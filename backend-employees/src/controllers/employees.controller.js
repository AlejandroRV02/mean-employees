const employeeController = {}

const Employee = require('../models/employee')


employeeController.getEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
}

employeeController.createEmployee = async (req, res) => {
    const employee = new Employee(req.body);
    await employee.save();
    res.send({msg:'Employee saved'});
}

employeeController.getEmployee = async (req, res) => {
    const _id =  req.params.id;
    const employee = await Employee.findById(_id);
    res.send(employee);
}
employeeController.updateEmployee = async (req, res) => {
    const _id =  req.params.id;
    await Employee.findByIdAndUpdate(_id, req.body);
    res.send({msg:'Employee Updated'});
}

employeeController.deleteEmployee = async (req, res) => {
    const _id =  req.params.id;
    await Employee.findByIdAndDelete(_id);
    res.json({msg:'Deleted'});
}

module.exports = employeeController;