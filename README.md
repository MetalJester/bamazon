# BAMAZON Storefront CLI App

Welcome to my Bamazon Storefront. This is a CLI app that uses node.js to run inconjunction with mysql and inquirer npm packages. Before running the node.js file from your own command terminal make sure you install both npm packages. You will also neeed to create and run the database by adding the schema sql file to your mysql workbench. 

This app will display the items available for purchase and then prompt you to select item and the quantity you would like to purchase. 


The app will then check the quantity you've asked for against the current inventory. If there is sufficient inventory, the app will complete your purchase and give you the total cost. It will also update the inventory on the database for the item you've chosen. When you make another purchase you will see the quantity available for that item has changed.

If there is insufficient inventory then the app will respond as such and ask if you'd like to make a different purchase. If you choose yes, you are returned to the screen 

* Use the command “movie-this” to find details about any movie from the OMDB API.

* Use the command “spotify-this-song” to look up your favorite song on the Spotify API.

* Use the command “concert-this” to find upcoming concerts from your favorite artists. 
  (If no concerts are currently advertised, it will let you know.)

* The last command is “do-what-it-says”, which uses the native node npm File System to read a text file and perform a command.

##### Follow this link to watch a demonstration of the CLI app: https://drive.google.com/file/d/13xHlB5QP9xMHcT1TmDzRCmJ-PIQcUuad/view
