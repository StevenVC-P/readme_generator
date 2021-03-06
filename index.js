//Includes packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

//Creates an array of questions for user input
 const questions = [
        {
        type: 'input',
        message: 'What is your user title?',
        name: 'title',
        },
        {
        type: 'input',
        message: 'Please describe your application',
        name: 'description',
        },
        {
        type: 'input',
        message: 'What are the steps to install?',
        name: 'installation',
        },
        {
        type: 'list',
        message: 'Please describe your license',
        choices: ['Mozzila Public License 2.0', 'Appache 2.0 License', 'The MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license',
        },
        {
        type: 'input',
        message: 'Please explain how to use the applicaiton',
        name: 'usage',
        },
        {
        type: 'input',
        message: 'Mention your contributors here',
        name: 'contributing',
        },
        {
        type: 'input',
        message: 'What tests do you suggest?',
        name: 'tests',
        },
        {
        type: 'input',
        message: 'What is your Github UserName?',
        name: 'github',
        },
        {
        type: 'input',
        message: 'What is your e-mail?',
        name: 'email',
        },
]
    
//Creates a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Commit logged!')
    );
};  

//Creates a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then ((response) => {
        if(response.license === 'Mozzila Public License 2.0'){
            response.badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]';
            response.licenseURL = 'https://opensource.org/licenses/MPL-2.0';
        };
        if(response.license === 'Appache 2.0 License'){
            response.badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]';
            response.licenseURL = 'https://opensource.org/licenses/Apache-2.0';
        };
        if(response.license === 'The MIT License'){
            response.badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
            response.licenseURL = 'https://opensource.org/licenses/MIT';
        };
        if(response.license === 'Boost Software License 1.0'){
            response.badge = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]';
            response.licenseURL = 'https://www.boost.org/LICENSE_1_0.txt';
        };
        if(response.license === 'The Unlicense'){
            response.badge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]';
            response.licenseURL = 'http://unlicense.org/';
        };
        writeToFile('./readme_output/Readme.md', generateMarkdown.createMarkdown(response))
    });
};

// Function call to initialize app
init();
