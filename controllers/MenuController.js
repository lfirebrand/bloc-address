const inquirer = require('inquirer');

module.exports = class MenuController {
  constructor(){
    this.mainMenuQuestions = [
          {
           type: "list",
            name: "mainMenuChoice",
            message: "Please choose from an option below: ",
            choices: [
              "Add new contact",
              "Log current date and time",
              "Exit"
            ]
          }
        ];
        this.contacts = [];
  }

  main(){
   console.log(`Welcome to AddressBloc!`);
   inquirer.prompt(this.mainMenuQuestions).then((response) => {
     switch(response.mainMenuChoice){
       case "Add new contact":
         this.addContact();
         break;
       case "Exit":
         this.exit();
       case "Log current date and time":
        this.getDate();
        break;
       default:
         console.log("Invalid input");
         this.main();
     }
   })
   .catch((err) => {
     console.log(err);
   });
  }
  clear(){
    console.log("\x1Bc");
  }

  addContact(){
    this.clear();
    console.log('addContact called');
    this.main();
  }

  getDate() {
    var currentDate = new Date();
    console.log(currentDate.toString());
    this.main();
  }

  exit(){
    console.log("Thanks for using AddressBloc!");
    process.exit();
  }
  getContactCount(){
    return this.contacts.length;
  }
}
