const express = require('express');
const route = express.Router();
const services = require('../services/render');
const controller = require('../controller/controller');

/**
  * @description Root Route
  * @method GET /
  */
route.get('/', services.home)

/**
  * @description company login route
  * @method GET /companylogin
  */
route.get('/companylogin', services.companylogin)

/**
  * @description company register Route
  * @method GET /company
  */
route.get('/company', services.company)

/**
  * @description student login Route
  * @method GET /studentlogin
  */
route.get('/studentlogin', services.studentlogin)

/**
  * @description student register Route
  * @method GET /student
  */
route.get('/student', services.student)

/**
  * @description all registered company
  * @method GET /allcompany
  */
route.get('/allcompany', services.allcompany)

/**
  * @description user data show
  * @method GET /showstudent
  */
route.get('/showstudent', services.showstudent)

/**
  * @description user data show
  * @method GET /showstudent
  */
route.get('/oops', services.nocompany)


// API
route.post('/api/student', controller.create_student);
route.post('/api/company', controller.create_company);

// validate login
route.post('/api/studentlogin', controller.validatestudent);
route.post('/api/companylogin', controller.validatecompany);

route.put('/api/studentupdate/:id', controller.update_student);
route.put('/api/companyupdate/:id', controller.update_company);

route.get('/api/studentdelete/:id', controller.delete_student);
route.get('/api/companydelete/:id', controller.delete_company);

// use - /api/showcompany?id=all
// use - /api/showcompany?id=<obj_id>
route.get('/api/showstudent', controller.find_student);
route.get('/api/showcompany', controller.find_companies);

route.get('/searchcompany', controller.search_company);

route.get('/studentedit', controller.studentedit)
route.get('/companyedit', controller.companyedit)
module.exports = route;