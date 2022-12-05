const fs = require('fs')
const inquirer = require('inquirer')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const path = require('path')
const OUTPUT_DIR = path.resolve(__dirname,"output")
const outputPath = path.join(OUTPUT_DIR,"")
const teamMembers = []


const teamManager = () => {
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
        console.log(response)
        const manager = new Manager(response.name, response.id, response.email, response.officeNum)
        teamMembers.push(manager)
        prompts()
    })
};

const prompts = () => {
    return inquirer.prompt([
        {
            name: 'menu',
            type: 'list',
            list: ['Add an intern to your team', 'Add an engineer to your team', 'Finish creating your team']
        }
    ])
        .then(userInput => {
            if (userInput.menu) {
                if ('Add an intern to your team') {
                    addIntern()
                }
                else if ('Add an engineer to your team') {
                    addEngineer()
                }
                else if ('Finish creating your team') {
                    finalTeam()
                }
            }
        })
}

const addIntern = ()=>{
    return inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            question: "What's your intern's name?"
        },
        {
            name: 'id',
            type: 'input',
            question: "What's your intern's id?"
        },
        {
            name: 'email',
            type: 'input',
            question: "What's your intern's email?"
        },
        {
            name: 'github',
            type: 'input',
            question: "What school is your intern enrolled in?"
        }
    ]).then(response =>{
        console.log(response)
        const intern = new Intern(response.name, response.id, response.email, response.school)
        teamMembers.push(intern)
        prompts()
    })
}

const addEngineer = () =>{
    return inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            question: "What's your engineer's name?"
        },
        {
            name: 'id',
            type: 'input',
            question: "What's your engineer's id?"
        },
        {
            name: 'email',
            type: 'input',
            question: "What's your engineer's email?"
        },
        {
            name: 'github',
            type: 'input',
            question: "What's your engineer's GitHub?"
        }
    ]).then(response => {
        console.log(response)
        const engineer = new Engineer(response.name, response.id, response.email, response.github)
        teamMembers.push(engineer)
        prompts()
    })
}

const finalTeam = () =>{
    if(!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath,index(teamMembers),"UTF-8")
}

teamManager()