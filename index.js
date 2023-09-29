// Write your solution in this file!
const employee={
    empname:"sam",
    streetAddress:"11 Broadway",
    
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee={...employee};
    updatedEmployee[key] = value;
    return updatedEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value
    return employee
}
function  deleteFromEmployeeByKey(employee, key){
    const copyOfEmployee={...employee}
    delete copyOfEmployee[key];
    return copyOfEmployee
    
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    const destructDel=employee
    delete destructDel[key]
    return destructDel
}
