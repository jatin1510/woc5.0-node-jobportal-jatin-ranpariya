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

// API
route.post('/api/student', controller.create_student);
route.post('/api/company', controller.create_company);

route.put('/api/studentupdate/:id', controller.update_student);
route.put('/api/companyupdate/:id', controller.update_company);

route.delete('/api/studentdelete/:id', controller.delete_student);
route.delete('/api/companydelete/:id', controller.delete_company);

route.get('/api/showcompany', controller.find_companies);

module.exports = route;