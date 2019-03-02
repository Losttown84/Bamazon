var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "C@hill2013",
  database: "bamazon"
});

con.connect(function(err) {
  if (err) {
    console.log("error connecting:" + err.stack);
    return;
  }

    console.log("connected as id" + con.threadId);
});

con.query("SELECT * FROM products", function(err,data) {
  console.log("What would you like to order ?");
});