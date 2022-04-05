// Include packages needed for this application
const inquirer = require('inquirer');
const getMarkdown = require('./utils/generateMarkdown.js');


// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is name of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else{
                console.log('Please enter your project name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project. (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else{
                console.log('Please describe your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for this project? (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else{
                console.log('Please provide installation instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide the usage information for this project. (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else{
                console.log('Please provide the usage information!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines? (Required)',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else{
                console.log('Please detail the contribution guidelines!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions for this project? (Required)',
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else{
                console.log('Please outline the test instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'profile',
        message: 'Enter the GitHub link to your profile. (Required)',
        validate: profileInput => {
            if (profileInput) {
                return true;
            } else{
                console.log('Please enter the GitHub link!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address. (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else{
                console.log('Please enter your email!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmTOC',
        message: 'Would you like to create a "Table of Contents" section? (Helpful for navigating larger README files)',
        default: false
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {return inquirer.prompt(questions)};

// Function call to initialize app
init().then(promptProject = portfolioData => {
    console.log(portfolioData);
});