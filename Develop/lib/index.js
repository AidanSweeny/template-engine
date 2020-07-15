const employee = require("../lib/Employee");
const render = require("../lib/htmlRenderer");
const manager = require("../lib/Manager");
const intern = require("../lib/Intern");
const engineer = require("../lib/Engineer");
const inquirer = require("inquirer");
// const eng1 = new engineer("Aidan", 3, "aidansweeny@gmail.com", "AidanSweeny");
// const eng2 = new engineer("Aidan", 3, "aidansweeny@gmail.com", "AidanSweeny");
// const eng3 = new engineer("Aidan", 3, "aidansweeny@gmail.com", "AidanSweeny");
// const employees = [eng1, eng2, eng3];
var prompt = inquirer.createPromptModule();
while (stillPeople){
    prompt([{
        type: "input",
        message: "What is your name?",
        name: "name"
      },{
        type: "input",
        message: "What is your ID?",
        name: "id"
      },{
        type: "input",
        message: "What is your email?",
        name: "email",
      }])
      .then(function({name, id, email}) {
        
      })
}
prompt([{
    type: "input",
    message: "What is your project title?",
    name: "title"
  },{
    type: "input",
    message: "What is a description of the project?",
    name: "description"
  },{
    type: "checkbox",
    message: "What button would you like",
    name: "button",
    choices: ["Website up", "Website down", "Uses CSS", "Uses HTML", "Uses Javascript"]
  },{
    type: "input",
    message: "How and what is required to install this project?",
    name: "installation"
  }])
  .then(async function({title}) {
        try {

        }
        catch(err) {
          console.log(err);
        }
  })
console.log(render(employees, employee, manager, intern, engineer));