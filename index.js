// Write your solution in this
const employee = {
    name: "John",
    streetAdress: "Yeni Mah. Filiz Sok.",
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj };

    newObj[key] = value;

    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key, value){
    let newEmployee= {...employee}
    newEmployee[key]=value
    delete newEmployee.streetAddress
    return newEmployee
};

function destructivelyDeleteFromEmployeeByKey(employee, key, value){
    employee[key]=value
    delete employee.streetAddress
    return employee
}