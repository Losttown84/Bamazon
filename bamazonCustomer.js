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
          productsArray.push(res[i].ItemId);
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
  connection.query("SELECT * FROM products WHERE ItemId = " +custChoiceID, function(error,data){
    console.log("this is our product!", error, data);

    var chosenProduct = data[0];


    console.log("You chose:  " + custChoiceID + " | " + chosenProduct.product_name);
  
    var unitNum = custAnswer.unitNum.trim();
    console.log("The amount of products you're about to buy: " + unitNum);
  
  
    var itemStocks = chosenProduct.stockTotal;
  
    if (unitNum < chosenProduct.stockTotal) {
        var newQuantity = chosenProduct.stockTotal - unitNum
  
        connection.query("UPDATE products SET ? WHERE ?", [{
            stockTotal: newQuantity
        }, {
            ItemId: chosenProduct.ItemId
        }], function(err) {
            if (err) throw err;
            console.log("Your order has been placed!");
            console.log("Total cost is $" + (unitNum * chosenProduct.price));
        })
    } else {
      console.log("Insufficient quantity."); 
    };
  });
});