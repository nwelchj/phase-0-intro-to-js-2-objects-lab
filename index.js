// Write your solution in this file!
const employee = {            //there are four keys street,city,state, and zip 
    Worker: {                  //the first key points points to another object 
      name: "bod",
      streetaddress: "1005",      //if the keys the are the same only the final vaule 
    },                
}

function updateEmployeeWithKeyAndValue(employee, key, value){
  const newemployee = { ...employee };

  newemployee[key] = value;

  return newemployee;
}
 
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
  employee[key] = value;

  return employee;
}

function deleteFromEmployeeByKey (employee, key ){
  const newemployee = { ...employee };

  delete newemployee.Worker;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
  return employee;
  
}