const employee = require("../lib/Employee");
const render = require("../lib/htmlRenderer");
const manager = require("../lib/Manager");
const intern = require("../lib/Intern");
const engineer = require("../lib/Engineer");
const inquirer = require("inquirer");
const fs = require("fs");
let employees = [];
inquirer
        .prompt([{
            type: "input",
            message: "What is your name?",
            name: "theName"
        },{
            type: "input",
            message: "What is your profession?",
            name: "job"
        },{
            type: "input",
            message: "What is your ID?",
            name: "id"
        },{
            type: "input",
            message: "What is your email?",
            name: "email",
        }])
        .then(async function({theName, job, id, email}) {
            if(job.toLowerCase() === "engineer"){
                await inquirer.prompt([{type: "input", message: "What is your Github Username?", name: "username"}]).then(function({username}){
                    employees.push(new engineer(theName, id, email, username))
                })
            }
            else if(job.toLowerCase() === "intern"){
                await inquirer.prompt([{type: "input", message: "What school do you go to?", name: "school"}]).then(function({school}){
                    employees.push(new intern(theName, id, email, school))
                })
            }
            else if(job.toLowerCase() === "manager"){
                await inquirer.prompt([{type: "input", message: "What is your office number?", name: "office"}]).then(function({office}){
                    employees.push(new manager(theName, id, email, office))
                })
            }
            inquirer.prompt([{
                type: "confirm",
                message: "Would you like to add more people to your team?",
                name: "people"
            }]).then(function({people}){
                if(people){
                    prompted();
                }
                else {
                    fs.writeFile('team.html', render(employees), (err) => {
                        if (err) throw err;
                        console.log('The file has been saved!');
                    });
                }
            })
        })
function prompted(){   
    inquirer
        .prompt([{
            type: "input",
            message: "What is your team member's name?",
            name: "theName"
        },{
            type: "input",
            message: "What is your team member's profession?",
            name: "job"
        },{
            type: "input",
            message: "What is your team member's ID?",
            name: "id"
        },{
            type: "input",
            message: "What is your team member's email?",
            name: "email",
        }])
        .then(async function({theName, job, id, email}) {
            if(job.toLowerCase() === "engineer"){
                await inquirer.prompt([{type: "input", message: "What is your team member's Github Username?", name: "username"}]).then(function({username}){
                    employees.push(new engineer(theName, id, email, username))
                })
            }
            else if(job.toLowerCase() === "intern"){
                await inquirer.prompt([{type: "input", message: "What school did you team member go to?", name: "school"}]).then(function({school}){
                    employees.push(new intern(theName, id, email, school))
                })
            }
            else if(job.toLowerCase() === "manager"){
                await inquirer.prompt([{type: "input", message: "What is your team member's office number?", name: "office"}]).then(function({office}){
                    employees.push(new manager(theName, id, email, office))
                })
            }
            inquirer.prompt([{
                type: "confirm",
                message: "Would you like to add more people?",
                name: "people"
            }]).then(function({people}){
                if(people){
                    prompted();
                }
                else {
                    console.log(employees)
                    fs.writeFile('team.html', render(employees), (err) => {
                        if (err) throw err;
                        console.log('The file has been saved!');
                    });
                }
            })
        })
}

