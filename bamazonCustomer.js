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
    displayInventory()
});

//function to display table of products


function displayInventory(){
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log("These products are availabe for purchase.\n");
        // Log all results of the SELECT statement
        console.table(res);
        // connection.end();
        start();
    });
}

//function to prompt customer to make a purchase
function start() {
    inquirer.prompt([
        {
            name: "item",
            type: "input",
            message: "Enter the Item ID number of the item you would like to purchase:"
        },
        {
            name: "quantity",
            type: "input",
            message: "Enter quantity of this item you would like to purchase:"
        }
    ]).then(function (answer) {
        var customerItem = answer.item;
        var customerQty = answer.quantity;
        customerOrder(customerItem, customerQty);
    })
}

function customerOrder(itemID, qtyNeeded) {
    connection.query("SELECT * FROM products WHERE item_id = " + itemID, function (err, res) {
        if (err) throw err;
        if (qtyNeeded <= res[0].stock_quantity) {
            // Add total cost to response
            console.log("Thank you for your purchase. Your total is $0.00")
            //add function to update inventory
            displayInventory();
        }
        else {
            console.log("Insufficient quantity; cannot complete your order.");
            displayInventory();
        };
        
    });
}







// Prompt for quantitye
// inquirer
//         .prompt({
//             name: "quantity",
//             type: "input",
//             message: "Enter quantity of this item you would like to purchase:"
//         })
//         .then(function (answer) {
//             // based on their answer, either call the bid or the post functions
//             if (answer.quantitu === "POST") {
//                 postAuction();
//             }
//             else if (answer.quantity === "BID") {
//                 bidAuction();
//             } else {
//                 connection.end();
//             }

//         });