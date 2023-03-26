// Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'usernameGit',
        message:'What is your GitHub username?',
        validate: usernameInput => {
            if (usernameInput){
                return true;
            } else {
                console.log ('Please enter your GitHub username');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your e-mail address?',
        validate: emailInput => {
            if (emailInput){
                return true;
            } else {
                console.log ('Please enter your e-mail address');
                return false;
            }
        }
    },
    
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
        validate: titleInput =>{
            if(titleInput){
                return true;
            } else {
                console.log ('Please enter a title');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project',
        validate: descriptionInput => {
            if(descriptionInput){
                return true;
            } else {
                console.log ('Please enter a description');
                return false;
            }
        }
    },

    {
        type: 'list',
        name: 'license',
        message: 'What license will you use for your project?',
        choices: ['apache', 'MIT', 'agpl', 'no license']
    },

    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        validate: installInput => {
            if(installInput){
                return true;
            } else {
                console.log('Please enter installation instructions');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'usage',
        message: 'What command should be run to run the tests',
        validate: usageInput => {
            if (usageInput){
                return true;
            } else {
                console.log ('Please enter usage instructions');
                return false;
            }
        }

    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
