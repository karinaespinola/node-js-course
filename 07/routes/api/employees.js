const express = require('express');
const router = express.Router();
const employeesController = require('../../controllers/employeesController');
const { verifyJwt } = require('../../middleware/verifyJwt');

router.route('/')
  .get(verifyJwt, employeesController.getAllEmployees)
  .post(employeesController.createNewEmployee)
  .put(employeesController.updateEmployee)
  .delete(employeesController.deleteEmployee);

router.route('/:id')
  .get(employeesController.getEmployee);

module.exports = router;