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

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
