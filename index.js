// Write your solution in this file!
const  employee = {
    worker: "name",
    street: "streetAddress",

};
function updateEmployeeWithKeyAndValue(employee,key,value){
     return {
    ...employee,
    [key]: value,
  };

}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value;

  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    console.log(key)
    const newEmployee = {...employee};
    delete newEmployee[key]

    return newEmployee
    //[newEmployee.key].delete
    
    

}

    
function  destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}