// Write your solution in this file!
const employee = {
  name: `shukri`,
  streetAddress: `south c`,
};

//updateEmployeeWithKeyAndValue

function updateEmployeeWithKeyAndValue(employee,key,value){
  let updatedEmployee = {...employee}
  updatedEmployee[key] = value;
  return updatedEmployee;
}

  const updatedEmployee = updateEmployeeWithKeyAndValue(employee,"school","moringa");

  console.log(updatedEmployee);


//destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)

function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
  employee[key] = value;
  return employee;
}

  const destructivelyUpdateEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee,"sex","male");

  console.log(destructivelyUpdateEmployee);



//deleteFromEmployeeByKey(employee, key)

function deleteFromEmployeeByKey(employee, key){
  const newEmployee = {...employee}
  delete newEmployee[key];
  return newEmployee;
}

  const newEmployee = deleteFromEmployeeByKey(employee, "name");
  console.log(newEmployee);


// destructivelyDeleteFromEmployeeByKey(employee, key)

function destructivelyDeleteFromEmployeeByKey(employee, key){
  delete employee[key];
  return employee;
}

  const newEmployee2 = destructivelyDeleteFromEmployeeByKey(employee,"streetAddress");
  console.log(newEmployee2);




































