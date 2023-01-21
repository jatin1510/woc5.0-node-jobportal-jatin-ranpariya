const axios = require('axios');

exports.home = (req, res) =>
{
    res.render('index');
};

exports.company = (req, res) =>
{
    res.render('company');
};

exports.companylogin = (req, res) =>
{
    res.render('companylogin');
};

exports.student = (req, res) =>
{
    res.render('student');
};

exports.studentlogin = (req, res) =>
{
    res.render('studentlogin');
};

exports.showstudent = (req, res) =>
{
    res.render('showstudent');
};

exports.nocompany = (req, res) =>
{
    res.render('oops');
};

exports.allcompany = (req, res) =>
{
    axios.get('http://localhost:3000/api/showcompany?id=all')
        .then(function (response)
        {
            res.render('allcompany', { company: response.data });
        })
        .catch(err =>
        {
            res.send(err);
        })
}