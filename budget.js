let money= 1000
let rent= 100
let food= 500
let utilities= 225

let totalIncome= money
let totalExpenses= rent+food+utilities
let remainingMoney= totalIncome-totalExpenses

console.log ("The total income was:" + totalIncome.toLocaleString("en-US", {style: "currency", currency: "USD", }));
console.log ("The rent amount was:" + rent.toLocaleString("en-US", {style: "currency", currency: "USD", }));
console.log ("The amount spent on groceries was:" + food.toLocaleString("en-US", {style: "currency", currency: "USD", }));
console.log ("The percentage spent on rent was:" + ((rent/totalIncome)* 100) + "%");
console.log ("The percentage spent on groceries was:" + ((food/totalIncome)* 100) + "%"); 