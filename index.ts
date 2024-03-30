#! /usr/bin/env node

import inquirer from 'inquirer';//import pakage from npm
let condition = "true";//condition true or false value come in varible
let todos: any = []; //todo


async function addTodoItems() {
  while (condition) {//condition is true then while loop run and false not run  
    // console.log(todos)
    let addTask = await inquirer.prompt([{//take a some input from user
      name: "todo",
      type: "input",
      message: "what you want to add in your todos! "
    }, {
      name: "addMore",
      type: "confirm",
      message: "do you want to add more?",
      default: false
    }
    ]);

    todos.push(addTask.todo);//add the input user in todos array
    condition = addTask.addMore;//condition to convert true and false from the user input
    console.log(todos)//console the array todos
  }

  let deleteItem = await inquirer.prompt( //input from user if you want to delete some
    [
      
        {
          name: "delete",
          type: "confirm",
          message: "if we want to delete item"
        }

    ]
   )
  if (deleteItem.delete === true) {//check the user want to delete  item
    let deleteItem = await inquirer.prompt([{//which item to delete
      name: "item",
      type: "input",
      message: "which item you want to delete"
    }]);
    let index = todos.indexOf(deleteItem.item);//index of the item to delete
    if (index !== -1) {//item in todos then give 1 to so on and not in todos then give -1
      todos.splice(index, 1);//use splice method in js ,  use to remove specific item in array
      console.log(todos);
    } else {
      console.log("Item not found in the list.");
    }
    
  }

  let update = await inquirer.prompt(//check the user want to update the item
    [
       {
        name: "edit",
        type: "confirm",
        messege: "you want to edit item"
      }
    ]
  )
      
  if (update.edit === true) {
    let editItem = await inquirer.prompt([//which item  want to update
      {
        name: "oldItem",
        type: "input",
        message: "Enter the item you want to edit:"
      },
      {
        name: "newItem",
        type: "input",
        message: "Enter the new value for the item:"
      }
    ]);

    let index = todos.indexOf(editItem.oldItem);//inde of item 
    if (index !== -1) {//item in todos then give 1 to so on and not in todos then give -1
      todos[index] = editItem.newItem;//new item add on index which you want to to update
      console.log(todos);
    } else {
      console.log("Item not found in the list.");
    }
  }
  // console.log(todos)
};
addTodoItems();