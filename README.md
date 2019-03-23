# BAMAZON Storefront CLI App

Welcome to my Bamazon Storefront. This is a CLI app that uses node.js to run in conjunction with the mysql and inquirer npm packages. Before running the node.js file from your own command terminal make sure you install both npm packages. You will also neeed to create and run the database by adding the schema sql file to your mysql workbench. 

This app will display the items available for purchase and then prompt you to select an item and the quantity you would like to purchase. 

The app will then check the quantity you've asked for against the current inventory. If there is sufficient inventory, the app will complete your purchase and give you the total cost. It will also update the inventory on the database for the item you've chosen. When you make another purchase you will see the quantity available for that item has changed.

If there is insufficient inventory then the app will tell you that it cannot complete your transaction. It will then ask if you'd like to make a different purchase. If you choose "YES", the table of available items will be displayed again and you try another purchase. If you select "NO" then the connection will end.

##### Follow this link to watch a demonstration of the app: 