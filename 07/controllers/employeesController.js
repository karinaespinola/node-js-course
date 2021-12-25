const data = {};
data.employees = require('../../data/employees.json');

const getAllEmployees = (req, res) => {
    res.json(data);
}

const createNewEmployee = (req, res) => {
    res.json({
      "firstName": req.body.firstname,
      "lastName": req.body.lastname
    })
};

const updateEmployee = (req, res) => {
    res.json({
      "firstName": req.body.firstname,
      "lastName": req.body.lastname
    })
};

const deleteEmployee = (req, res) => {
    res.json({
      "id": req.body.id
    })
};

const getEmployee = (req, res) => {
    res.json({"id": req.params.id})
}

module.exports = {
    getAllEmployees,
    createNewEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee
}