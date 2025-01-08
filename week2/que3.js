function updateEmployeedetails(employee,rolename){
    return {...employee,role:rolename};


}
const employee = { name: "chethan", role: "developer", age: 28, location: "in" }
const newemployee=updateEmployeedetails(employee, "senior developer");
//console.log(employee)
console.log(newemployee)
