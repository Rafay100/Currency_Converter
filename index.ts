#! /usr/bin/env node

import inquirer from "inquirer";


let currency: any ={
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    UAE: 3.67,
    USD: 1 // base currency
};

let ans = await inquirer.prompt([{
    type: "list",
    name: "from",
    message: "Enter From Currency",
    choices: ['EUR', 'GBP', 'INR','PKR', 'UAE', 'USD']
},
{
    type: "list",
    name: "to",
    message: "Enter To Currency",
    choices: ['EUR', 'GBP', 'INR','PKR', 'UAE', 'USD']
},
{
    type: "number",
    name: "amount",
    message: "Enter Your Amount"
}

])

let fromAmount = currency[ans.from] //exchange rate
let toAmount = currency[ans.to] //exchange rate
let amount = ans.amount
let baseAmount = amount / fromAmount //USD base currency
let covertedAmount = baseAmount * toAmount
console.log(covertedAmount);
