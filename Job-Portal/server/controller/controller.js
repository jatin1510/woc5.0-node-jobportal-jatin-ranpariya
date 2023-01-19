var { student, company } = require('../model/model')

// create a new student
exports.create_student = (req, res) =>
{
    // validate request
    if (!req.body) {
        res.status(400).send({ message: 'Content can not be empty!' });
        return;
    }

    // new student
    const user = new student({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        batch: req.body.batch,
        cpi: req.body.cpi,
        age: req.body.age,
        gender: req.body.gender,
        techstack: req.body.techstack,
    })

    // save student in the database
    user
        .save(user)
        .then(data =>
        {
            res.send(data);
            // res.redirect('/')
        })
        .catch(err =>
        {
            res.status(500).send({
                message: err.message || 'Some error occured  while creating a create operation',
            });
        });
}

// create a new company
exports.create_company = (req, res) =>
{
    // validate request
    if (!req.body) {
        res.status(400).send({ message: 'Content can not be empty!' });
        return;
    }

    // new student
    const user = new company({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        req_age: req.body.req_age,
        req_cpi: req.body.req_cpi,
        website: req.body.website,
        position: req.body.position,
        package: req.body.package,
        description: req.body.description,
    })

    // save student in the database
    user
        .save(user)
        .then(data =>
        {
            res.send(data);
            // res.redirect('/')
        })
        .catch(err =>
        {
            res.status(500).send({
                message: err.message || 'Some error occured  while creating a create operation',
            });
        });
}

// update student
exports.update_student = (req, res) =>
{
    if (!req.body) {
        return res
            .status(400)
            .send({ message: 'Data to update can not be empty' });
    }

    const id = req.params.id;
    student.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data =>
        {
            if (!data) {
                res.status(400).send({ message: `Cannot update user with ${id}. May be user not found!` })
            } else {
                res.send(data);
            }
        })
        .catch(err =>
        {
            res.status(500).send({ message: 'Error update user information' });
        })
}

// update company
exports.update_company = (req, res) =>
{
    if (!req.body) {
        return res
            .status(400)
            .send({ message: 'Data to update can not be empty' });
    }

    const id = req.params.id;
    company.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data =>
        {
            if (!data) {
                res.status(400).send({ message: `Cannot update company with ${id}. May be company not found!` })
            } else {
                res.send(data);
            }
        })
        .catch(err =>
        {
            res.status(500).send({ message: 'Error update company information' });
        })
}

// delete student
exports.delete_student = (req, res) =>
{
    const id = req.params.id;
    student.findByIdAndDelete(id)
        .then(data =>
        {
            if (!data) {
                res.status(404).send({ message: `Cannot delete user with id ${id}. Maybe ID is wrong!` })
            }
            else {
                res.send({ message: 'User was deleted successfully' });
            }
        })
        .catch(err =>
        {
            res.status(500).send({
                message: `Could not delete user with id=${id}`,
            });
        });
}

// delete company
exports.delete_company = (req, res) =>
{
    const id = req.params.id;
    company.findByIdAndDelete(id)
        .then(data =>
        {
            if (!data) {
                res.status(404).send({ message: `Cannot delete company with id ${id}. Maybe ID is wrong!` })
            }
            else {
                res.send({ message: 'Company was deleted successfully' });
            }
        })
        .catch(err =>
        {
            res.status(500).send({
                message: `Could not delete company with id=${id}`,
            });
        });
}

// find all company
exports.find_companies = (req, res) =>
{
    if (req.query.id !== 'all') {
        const id = req.query.id;
        company.findById(id)
            .then(data =>
            {
                if (!data) {
                    res.status(404).send({ message: `Not found user with id ${id}` })
                } else {
                    res.send(data);
                }
            })
            .catch(err =>
            {
                res.status(500).send({ message: 'Error retriving user with id ' + id });
            })
    }
    else {
        company.find()
            .then(user =>
            {
                res.send(user);
            })
            .catch(err =>
            {
                res.status(500).send({
                    message: err.message || 'Error occured while retriving user information'
                });
            });
    }
}