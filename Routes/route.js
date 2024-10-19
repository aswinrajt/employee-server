const express=require('express')
const employeeController=require('../Controllers/employeeController')

const router=express.Router()

router.post('/addemp',employeeController.addEmployee)
router.get('/getemp',employeeController.getEmployees)
router.delete('/deleteemp/:id',employeeController.deleteEmployee)
router.put('/updateemp/:id',employeeController.updateEmployee)

module.exports=router