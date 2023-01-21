var { student, company } = require('../model/model')
const axios = require('axios');

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
            res.redirect('/studentlogin')
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
            res.redirect('/companylogin');
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
    student.deleteOne({ _id: id }, function (err)
    {
        if (err) {
            res.status(400).send(err);
        }
        else {
            res.redirect('/');
        }
    })
}

// delete company
exports.delete_company = (req, res) =>
{
    const id = req.params.id;
    company.deleteOne({ _id: id }, function (err)
    {
        if (err) {
            res.status(400).send(err);
        }
        else {
            res.redirect('/');
        }
    })
}

exports.validatestudent = (req, res) =>
{
    if (!req.body) {
        return res
            .status(400)
            .send({ message: 'Data can not be empty' });
    }

    const email = req.body.email;
    const pass = req.body.password;

    student.find({ email: email })
        .then((data) =>
        {
            if (!data) {
                res
                    .status(404)
                    .send({ message: `Not found user with email: ${email} ` });
            } else {
                if (data[0].password == pass) {
                    res.redirect(`/api/showstudent?email=${email}`);
                } else {
                    res.status(404).send({ message: "Invalid Password or email!" });
                }
            }
        })
        .catch((err) =>
        {
            res
                .status(500)
                .send({ message: `Error retrieving user with email ${email}` });
        });
}

exports.validatecompany = (req, res) =>
{
    if (!req.body) {
        return res
            .status(400)
            .send({ message: 'Data can not be empty' });
    }

    const email = req.body.email;
    const pass = req.body.password;

    company.find({ email: email })
        .then((data) =>
        {
            if (!data) {
                res
                    .status(404)
                    .send({ message: `Not found company with email: ${email} ` });
            } else {
                if (data[0].password == pass) {
                    res.redirect(`/api/showcompany?email=${email}`);
                } else {
                    res.status(404).send({ message: "Invalid Password or email!" });
                }
            }
        })
        .catch((err) =>
        {
            res
                .status(500)
                .send({ message: `Error retrieving company with email ${email}` });
        });
}

// find student
exports.find_student = (req, res) =>
{
    if (!req.query) {
        res.status(400).send({ message: 'Query can not be empty!' });
        return;
    }
    const email = req.query.email;
    student.find({ email: email })
        .then((data) =>
        {
            if (!data) {
                res
                    .status(404)
                    .send({ message: `Not found user with email: ${email} ` });
            } else {
                res.render('showstudent', { student: data[0] });
            }
        })
        .catch((err) =>
        {
            res
                .status(500)
                .send({ message: `Error retrieving user with email ${email}` });
        });
}

exports.find_companies = (req, res) =>
{
    if (!req.query) {
        res.status(400).send({ message: 'Query can not be empty!' });
        return;
    }

    if (req.query.id !== 'all') {
        const email = req.query.email;
        company.find({ email: email })
            .then((data) =>
            {
                if (!data) {
                    res
                        .status(404)
                        .send({ message: `Not found company with email: ${email} ` });
                } else {
                    res.render('showcompany', { company: data[0] });
                }
            })
            .catch((err) =>
            {
                res
                    .status(500)
                    .send({ message: `Error retrieving user with email ${email}` });
            });
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
                    message: err.message || 'Error occured while retriving company information'
                });
            });
    }
}

exports.search_company = (req, res) =>
{
    if (!req.query) {
        res.status(400).send({ message: 'Query can not be empty!' });
        return;
    }

    const { email, cpi, age } = req.query;

    axios.get('http://localhost:3000/api/showcompany?id=all')
        .then(function (response)
        {
            const companies = response.data;
            companies.sort((a, b) => b.package - a.package)
            const obj = []
            for (let i = 0; i < companies.length; i++) {
                const req_cpi = companies[i].req_cpi;
                const req_age = companies[i].req_age;
                if (cpi >= req_cpi && age >= req_age) {
                    obj.push(companies[i]);
                }
            }

            if (obj.length == 0) {
                res.render('oops');
            }
            else {
                res.render('allcompany', { company: obj });
            }
        })
        .catch(err =>
        {
            res.send(err);
        })

}

exports.studentedit = (req, res) =>
{
    const email = req.query.email;
    student.find({ email: email })
        .then((data) =>
        {
            if (!data) {
                res
                    .status(404)
                    .send({ message: `Not found user with email: ${email} ` });
            } else {
                res.render('studentedit', { student: data[0] });
            }
        })
        .catch((err) =>
        {
            res
                .status(500)
                .send({ message: `Error retrieving user with email ${email}` });
        });
}

exports.companyedit = (req, res) =>
{
    const email = req.query.email;
    company.find({ email: email })
        .then((data) =>
        {
            if (!data) {
                res
                    .status(404)
                    .send({ message: `Not found user with email: ${email} ` });
            } else {
                res.render('companyedit', { company: data[0] });
            }
        })
        .catch((err) =>
        {
            res
                .status(500)
                .send({ message: `Error retrieving user with email ${email}` });
        });
}