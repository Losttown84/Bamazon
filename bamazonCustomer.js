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
  console.log("connected as id" + connection.threadId);
});



connection.query("SELECT * FROM products", function(err, result) {
    console.log(result);
    for (var i = 0; i < result.length; i++) {
      console.log("Item ID: " + result[i].ItemId + "\nName of Product: " + result[i].productName + "\nPrice: " + "$" + result[i].price + "\n=======================")
    }
  });

  connection.query("SELECT * FROM products", function(err, result) {
    if (err) throw err;
    
  function start() {
  inquirer.prompt([{
//     name: "name",
//     type: "input",
//     message: "What\'s your name?",
//   }, {
//     name: "departments",
//     type: "list",
//     message: "What department would you like to shop in?",
//     choices: ["GAMES", "MOVIES", "CLOTHING", "ACCESSIORES", "GROCERY"],
//     default: 3,
//   }, {
//   //   name: "products",
//   //   type: "list",
//   //   message: "What product would you like to buy?",
//   //   choices: ["GAMES, MOVIES, CLOTHING, SWIMWEAR, SHOES, ACCESSIORES, GROCERY, ALCOHOL"],
//   // }]).then((answers) => {
//   //   console.log(`\n Hi ${answers.name}.`)
//   // });
