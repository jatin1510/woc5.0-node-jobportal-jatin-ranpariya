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