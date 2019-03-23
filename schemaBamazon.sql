DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price FLOAT(10) NULL,
  stock_quantity  INTEGER(10) NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Radioshack alarm clock", "electronics", 37.55, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPod Touch", "electronics", 199.99, 400);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Red Batman T-shirt", "Men's clothing", 25.99, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Levis Jeans", "Men's clothing", 59.99, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Charmin toilet paper", "Health, household", 12.99, 10000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Brawny paper towels", "Health, household", 8.99, 1500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("AquaNet hairspray", "Beauty", 3.99, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Maybelline mascara", "Beauty", 9.99, 430);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Soccer ball", "Sports and games", 18.99, 800);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Monopoly", "Sports and games", 25.99, 3000);
 