var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "C@hill2013",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  connection.query("SELECT * FROM products", function(err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
  start();
});

function start() {
  inquirer
  .prompt(
    {
    name: "name",
    type: "input",
    message: "What's your name"
  },

  )
  .then(function(answer) {
    if (answer.)
  })

}