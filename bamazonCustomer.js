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
  if (err) throw err;
  console.log("connected as id" + connection);
  start();
});  

function start() {
  inquirer
    .prompt({
      message: "Bamazon Shop - What department",
      type: "list",
      message: "What's your order?",
      choices: ["PURCHASE", "EXIT"]
    })
    .then