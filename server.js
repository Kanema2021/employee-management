const mysql2 = require("mysql2");
const inquirer = require("inquirer");
// const consoleTable = require("console.table");
// const query = require("mysql2/typings/mysql/lib/protocol/sequences/Query");

const connection = mysql2.createConnection ({
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
        let response = await inquirer.prompt ({
            type: "list",
            name: "mainOptions",
            message: "Hello! What would you like to do?",
            choices: [
                  "View all Employees", 
                  "View all Departments", 
                  "view all Roles", 
                  "Add a Role", 
                  "Add an Employee", 
                  "Update Employee's Role"
                ]    
    })
     
// .then(function(response){
    switch(response.mainOptions) {
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
         break;
    };

    } catch (err) {
        console.log (err);
        showOptions ();
    };
}




const viewAllEmployees = async () => {
// console.log("View all Employees");
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
    console.log (err);
    showOptions();
}

}

const viewAllDepartments = async () => {
    // console.log("View all Employees");
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
        console.log (err);
        showOptions();
    }
    
    }


// function viewAllEmployees() {
//     connection.query(`SELECT * FROM employee`, function(err, res) {
//         if(err) throw err;
//             console.table(res);
//             showOptions();
//     });
// }


// function viewAllDepartments() {
//     connection.query(`SELECT * FROM department`, (err, res) => {
//         if(err) throw err;
//             console.table(res);
//             showOptions();
//     });
// };

// function viewAllRoles() {
//     connection.query(`SELECT * FROM roles`, (err, res) => {
//         if(err) throw err;
//             console.table(res);
//             showOptions();
//     });
// }




