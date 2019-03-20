var mysql = require("mysql");
var inquirer = require("inquirer");


//connection information for sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazonDB"
});

//connect to mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // console.log("I'm connected to the database");
    readProducts();
    start();
});

//function to display table of products
function readProducts() {
    console.log("These products are availabe for purchase.\n");
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);
        connection.end();
    });
};

//function to prompt customer to make a purchase
function start() {
    inquirer
        .prompt({
            name: "item",
            type: "input",
            message: "Type the ID number of the item you would like to purchase."
        },
            {
                name: "quantity",
                type: "input",
                message: "Enter quantity of this ite you would like to purchase."
            })
    //   .then(function(answer) {
    //     // based on their answer, either call the bid or the post functions
    //     if (answer.item === "POST") {
    //       postAuction();
    //     }
    //     else if(answer.item === "BID") {
    //       bidAuction();
    //     } else{
    //       connection.end();
    //     }
    //   });
};