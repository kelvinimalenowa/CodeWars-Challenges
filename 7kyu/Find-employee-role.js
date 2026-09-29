function findEmployeesRole(name) {
    // employees array preloaded 
    let employee = employees.find((employee) => {
        return employee.firstName + " " + employee.lastName === name
    })
    if (employee) {
        return employee.role
    } else {
        return "Does not work here!"
    }
}