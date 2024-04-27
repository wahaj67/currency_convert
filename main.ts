#!/usr/bin/env node

import inquirer from "inquirer"

const currency :any ={

USD:1,
PKR:279.09,
EUR:0.93,
GBP:0.79,
HFT:367.56,
INR:83.40,
ISK:140.55,
JOD:0.71,
KWD: 0.31,
LBD:4.88,
SAR:3.75,
TUD:3.15,
UAE:3.67,

}

let userAnswer = await inquirer.prompt([{
    name:"from",
    type:"list",
    message:"Enter from currency",
    choices:["USD","PKR","EUR","GBP","HFT","INR","ISK","JOD","KWD","LBD","SAR","TUD","UAE"]
},
{
    name:"to",
    message:"Enter to currency",
    type:"list",
    choices:["USD","PKR","EUR","GBP","HFT","INR","ISK","JOD","KWD","LBD","SAR","TUD","UAE"]
},
{
    name:"amount",
    type:"number",
    message:"amount",
}







])



let fromAmount = currency[userAnswer.from]
let toAmount = currency[userAnswer.to]
let amount = userAnswer.amount
let basedAmount = amount / fromAmount
let converted = basedAmount * toAmount
console.log(converted)