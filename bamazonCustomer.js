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
});

displayInventory();

//function to display table of products
function displayInventory() {
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
            connection.query("UPDATE products SET ? WHERE ?", [
                {
                    stock_quantity: res[0].stock_quantity - qtyNeeded
                },
                {
                    item_id: res[0].item_id
                }
            ]);
            console.log("Thank you for your purchase. Your total is $" + parseInt(res[0].price * qtyNeeded));
            tryAgain();
        }
        else {
            console.log("Insufficient quantity; cannot complete your order.");
            tryAgain();
        };

    });

}

function tryAgain() {
    inquirer.prompt({
        name: "shop",
        type: "list",
        message: "Would you like to make another purchase?",
        choices: ["YES", "NO"]
    })
        .then(function (answer) {

            if (answer.shop === "YES") {
                displayInventory();
                
            }
            else {
                connection.end();
            }
        });
}




