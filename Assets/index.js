const fs = require('fs')
const inquirer = require('inquirer')
const Manager = require('./manager')
const Engineer = require('./engineer')
const Intern = require('./intern')
const path = require('path')
const teamMembers = []

const teamManager = () =>{
    return inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "What's your name?"
    },
    {
        name: "id",
        type: "input",
        message: "what's your employee ID"
    },
    {
        name: "email",
        type: "input",
        message: "What's your email?"
    },
    {
        name: "officeNum",
        type: "input",
        message: "what's your office number?"
    },
]).then(response => {
    const manager = new Manager(response.name,response.id,response.email,response.officeNum)
    teamMembers.push(manager)
    
})
};