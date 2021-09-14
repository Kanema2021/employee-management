const mysql2 = require("mysql2");
const inquirer = require("inquirer");
const { exit } = require("process");

const connection = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "Jessiegw11!",
    database: "employees_db"
});

connection.connect(function (err) {
    console.log("Welcome to karen's Employee Management System")
    showOptions()
});

const showOptions = async () => {
    try {
        let response = await inquirer.prompt({
            type: "list",
            name: "mainOptions",
            message: "Hello! What would you like to do?",
            choices: [
                "View all Employees",
                "View all Departments",
                "View all Roles",
                "Add a Role",
                "Add an Employee",
                "Add a Department",
                "Update Employee's Role",
                "Exit"
            ]
        })

        switch (response.mainOptions) {
            case "View all Employees":
                viewAllEmployees()
                break;

            case "View all Departments":
                viewAllDepartments()
                break;

            case "View all Roles":
                viewAllRoles()
                break;

            case "Add a Role":
                addRoles()
                break;

            case "Add an Employee":
                addEmployees()
                break;

            case "Add a Department":
                addDepartment()
                break;

            case "Update Employee's Role":
                updateEmployee()
                break;

            case "Exit":
                exit();
                
        };

    } catch (err) {
        console.log(err);
        showOptions();
    };
}

const viewAllEmployees = async () => {
    try {
        let query = "SELECT * FROM employee";
        connection.query(query, function (err, data) {
            if (err) throw err;
            let empArr = [];
            data.forEach(employee => empArr.push(employee))
            console.table(empArr);
            showOptions();
        })
    } catch (err) {
        console.log(err);
       
    }
}

const viewAllDepartments = async () => {
    try {
        let query = "SELECT * FROM department";
        connection.query(query, function (err, data) {
            if (err) throw err;
            let deptArr = [];
            data.forEach(department => deptArr.push(department))
            console.table(deptArr);
            showOptions();
        })
    } catch (err) {
        console.log
        (err);
       
    }
};

const viewAllRoles = async () => {
    try {
        let query = "SELECT * FROM roles";
        connection.query(query, function (err, data) {
            if (err) throw err;
            let roleArr = [];
            data.forEach(roles => roleArr.push(roles))
            console.table(roleArr);
            showOptions();
        })
    } catch (err) {
        console.log(err);
        showOptions();
    }
};


const addEmployees = () => {
    return inquirer.prompt([
        {
            name: "firstName",
            type: "input",
            message: "Please enter new employee's first name."
        },
        {
            name: "lastName",
            type: "input",
            message: "Please enter employee's last name."
        },
        {
            name: "roleId",
            type: "number",
            message: "Please enter employee's roleId."
        },
        {
            name: "managerId",
            type: "number",
            message: "Please enter manager's ID."
        },

    ]).then(function (data) {
        connection.query(
            "INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", 
            [data.firstName, data.lastName, data.roleId, data.managerId], 
            function(err, res) {
                if (err) throw err
                console.log("You have successfully added a new employee");
                showOptions()
            })      
    });
}

    const addRoles = () => {
        return inquirer.prompt([
            {
                name: "roleName",
                type: "input",
                message: "Please enter the new role name."
            },
            {
                name: "salary",
                type: "input",
                message: "Please enter new role's salary."
            },
            {
                name: "departmentId",
                type: "number",
                message: "Please enter department ID number."
            },
            
    
        ]).then(function (data) {
            connection.query(
                "INSERT INTO roles(title, salary, department_id) VALUES (?, ?, ?)", 
                [data.roleName, data.salary, data.departmentId], 
                function(err, res) {
                    if (err) throw err
                    console.log("You have successfully added a new role!");
                    showOptions()
                })      
        });
    }
    const addDepartment = () => {
        return inquirer.prompt([
            {
                name: "deptName",
                type: "input",
                message: "Please enter the new department name."
            },
        
    
        ]).then(function (data) {
            connection.query(
                "INSERT INTO department(department_name, id) VALUES (?, ?)", 
                [data.deptName, data.id], 
                function(err, res) {
                    if (err) throw err
                    console.log("You have successfully added a new department");
                    showOptions()
                })      
        });
    }
    const updateEmployee = () => {
        return inquirer.prompt([
            {
                name: "firstName",
                type: "input",
                message: "Please enter the first name of employee."
            },
            {
                name: "lastName",
                type: "input",
                message: "Please enter the last name of employee."
            },
            {
                name: "newRole",
                type: "number",
                message: "Please enter employee's new role ID."
            },          
    
        ]).then(function (data) {
            connection.query(
                "UPDATE employee SET role_id=? WHERE first_name=? AND last_name=? ", 
                [data.newRole, data.firstName, data.lastName], 
                function(err, res) {
                    if (err) throw err
                    console.log("You have successfully changed employee's role");
                    showOptions()
                })      
        });
    }




