#! /usr/bin/env node
 
 import inquirer, { Answers } from "inquirer";
import chalk from "chalk";

let myBalance = 100000; //Dollar

let myPin = 9087;

console.log(chalk.bold.yellowBright("Welcome"));


let pinAnswer = await inquirer.prompt<{ pin: number }>({
  name: "pin",
  type: "number", //change type to 'input'
  message: "Enter your pin",
});

if (pinAnswer.pin === myPin) {
  console.log(chalk.greenBright("correct pin code !!!"));

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message:("pleace select option"),
      type: "list",
      choices:["withdraw", "fastcash", "check balance",],
    },
  ]);

    console.log(operationAns);

  if (operationAns.operation === "withdraw") {
    let amountans = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: (chalk.bgMagenta("pleace enter your amount")),
       
      },
    ]);

    if (myBalance >= amountans.amount) {
      myBalance -= amountans.amount;
    console.log(chalk.blue(`"Your remaining amount is " ${myBalance}`));  
      
    }
    else{
      console.log(chalk.red("unable to transaction your balance is insufficient"));
    }
   
  }else if (operationAns.operation ==="fastcash") {
    let fastcashans = await inquirer.prompt([{
      name: "fastcash",
      message: (chalk.bgMagenta("pleace select your amount")),
      type: "list",
      choices: ["1000","5000", "10000", "15000", "20000" ],
    }
  ]);
  if (myBalance >= fastcashans.fastcash) {
    myBalance -= fastcashans.fastcash;
    console.log(chalk.blue(`"Your remaining amount is " ${myBalance}`));
   }else {
    console.log(chalk.redBright("unable to transaction your balanec is insufficient"));
   }
   } else  if(operationAns.operation === "check balance") {
    console.log(chalk.yellow(`"Your remaining balance is " ${myBalance}`));
   
  }
  


  } else {
      console.log(chalk.red("incorrect pin code"));
};
//end transaction
