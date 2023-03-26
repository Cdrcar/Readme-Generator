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
        message: 'What are the instructions for use?',
        validate: usageInput => {
            if (usageInput){
                return true;
            } else {
                console.log ('Please enter usage instructions');
                return false;
            }
        }

    },

    {
        type: 'confirm',
        name: 'acceptContributors',
        message: 'Would you allow contributions to your open source?',
        default: true
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'What is the guidelines for contributing to your project?',
        when: ({ acceptContributors}) => {
            if (acceptContributors){
                return true;
            } else {
                return false;
            }
        },
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log(' Please enter guidelines for contributing');
                return false;
            }
        }
    }

];

// Create a function to write README file
function writeToFile(data) {
    return new Promise((resolve, reject)=>{
        fs.writeToFile('./read/README-2.md', data, err => {
            if (err) {
                reject(err);
                return;
            } 
            resolve ({
                ok:true,
                message: 'Readme file has been generated'
            });
        });
    });
    
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
