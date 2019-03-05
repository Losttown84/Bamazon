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
  // startSearch;
});

inquirer.prompt([{
  name: "productList",
  list: function() {
      var productsArray = [];
      for (var i = 0; i < res.length; i++) {
          productsArray.push(res[i].item_id);
      }
      return productsArray;
  },
  message: "What would you like to buy? (Type in the Item ID).",
}, {
  name: "unitNum",
  message: "How many would you like to buy?",

}]).then(function(custAnswer) {


  var custChoiceID = custAnswer.productList.trim();


  var arrNum = custChoiceID - 1;

  var chosenProduct = res[arrNum];


  console.log("You chose:  " + custChoiceID + " | " + chosenProduct.product_name);

  var unitNum = custAnswer.unitNum.trim();
  console.log("The amount of products you're about to buy: " + unitNum);


  var itemStocks = chosenProduct.stock_quantity;

  if (unitNum < chosenProduct.stock_quantity) {
      var newQuantity = chosenProduct.stock_quantity - unitNum

      connection.query("UPDATE products SET ? WHERE ?", [{
          stock_quantity: newQuantity
      }, {
          item_id: chosenProduct.item_id
      }], function(err) {
          if (err) throw err;
          console.log("Your order has been placed!");
          console.log("Total cost is $" + (unitNum * chosenProduct.price));
      })
  } else {
    console.log("Insufficient quantity."); 
  };
});