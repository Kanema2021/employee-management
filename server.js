const mysql2 = require("mysql2");
const inquirer = require("inquirer");

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
                  "View all Roles", 
                  "Add a Role", 
                  "Add an Employee", 
                  "Update Employee's Role"
                ]    
    })
     
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
        console.log (err);
        showOptions();
    } 
};

const addEmployees = () => {
    inquirer.prompt ({
        name: "addEmployee",
        type: "input",
        message: "Please enter new employee's full name."
    })
    .then(function(response) {
        console.log(response);
        const name = response.addEmployee;
        const fullName = name.split(" ");
        console.log(fullName)
        const query = "INSERT INTO employee (first_name, last_name) VALUES ?"
        connection.query(query, [[fullName]], function(err, data) {
            if (err) throw err
        })
        showOptions()
    })
}






// const addEmployees = (first_name, last_name, role_id, manager_id) => { 
//     return this.connection.query("INSERT INTO employee SET ?",{
//         first_name: first_name,
//         last_name: last_name,
//         role_id: role_id,
//         manager_id: manager_id,     
//     })
    
// };


//     const addEmployees = () => {
//         inquirer.prompt({
//             type: "input",
//             name: "Employee Name",
//             message: "Please enter new employee's first and last name"
//         })

//     .then (function(response) {
//         console.log(response);
//         const fullName = response.addEmployees;
//         const firstAndLastName = fullName.split(" ");
//         console.log(firstAndLastName)
//     })
// };
    // let managerId;
    // if (showResponse.manager !== "none") {
    //     const managerFound = employee.find (
    //         results =>
    //         showResponse.manager === results.first_name + " " + results.lastName
    //     );
    //     managerId = managerFound.id;
    // };

    // const roleData = role.find (
    //     results => results.title === showResponse.role
    // );
    //     const roleId = roleData.id;
    //     await connection.addEmployees(results.firstName, results.lastName, roleId, managerId)

    //     console.log(`${results.firstName} + '' ${results.lastName} has been addded to the employee databse`)

    // }




        //     try {
//      let query = "SELECT * FROM roles"
//      connection.query(query, function (err, data) {
//          if (err) throw err;
//          inquirer.prompt ([
//              {
//                  type: "input",
//                  name: "firstName",
//                  message: "Please enter new employee's first name."
//              },
//              {
//                 type: "input",
//                 name: "lastName",
//                 message: "Please enter new employee's last name."
//             },
//             {
//                 type: "list",
//                 name: "title",
//                 message: "Please enter new employee's title.",
//                 choices() {
//                     const titleArr = [];
//                     response.forEach(({title}) => {
//                         titleArr.push (title);
//                     })
//                     return titleArr;
//                 }
//             },
//         ])

//         .then()
//     }
// }
        
    
    
        

    
    
    
    
    
    
    
        
    // response = await inquirer.prompt ({
    //     name: "addEmployees",
    //     type: "input",
    //     message: "Enter Employee First then Last Name"
    //   })
    // }


    
    //     .then(response) => {
    //      const name = response.addEmployees;
    //     const firstNameLastName = name.split(" ");
    //     let query = "INSERT INTO employee (first_name, last_name) VALUES?"
    //     connection.query(query [[firstNameLastName]], function (err, res) {
    //        console.table (name)
    //        showOptions()
    //     })
      

    // }






 // {
        //     type: "input",
        //     name: "lastName",
        //     message: "Please enter new employee's last name"
        // },
        // {
        //     type: "list",
        //     name: "role",
        //     message: "Please enter new employee's new role",
        //     choices: [
        //         'Manager',
        //         'Payroll',
        //         'Accounting',
        //         'Manager',
        //         'Head Salesperson',
        //         'Salesperson',
        //         'Manager', 
        //         'Developer',
        //         'Digital Merchandiser',
        //         'Manager',
        //         'Customer Service Supervisor',  
        //         'Customer Service Rep' 
        //     ]
        // },
    
// const addEmployees = async () => {
//     const role = await connection.viewAllRoles();
//     const allRoles = role.map(record => {
//         return record.title;

//     })

//     const employee = await connection.viewAllEmployees();
//     const allEmployees = employee.map(record => {
//         return record.first_name.concat(" " + record.last_name);
//     })
//     employeeList.unshift("None");

