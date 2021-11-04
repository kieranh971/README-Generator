// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const util = require("util");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const Choices = require("inquirer/lib/objects/choices");
// TODO: Create an array of questions for user input
const questions = [
    // Project title
    {
        type: "input",
        name: "title",
        message: "Please enter the title of your project here."
    },
    // Project description
    {
        type: "input",
        name: "description",
        message: "Please add a detailed description of your project here."
    },
    // Project installation instructions
    {
        type: "input",
        name: "installation",
        message: "Please add instructions on how to install your project here."
    },
    // Project usage information
    {
        type: "input",
        name: "usage",
        message: "Please describe how to use your project."
    },
    // Project contribution guidelines
    {
        type: "input",
        name: "contribution",
        message: "Please describe how users can contribution to your project"
    },
    // Project testing instructions
    {
        type: "input",
        name: "testing",
        message: "Please describe how users can test your project."
    },
    // Licensing Options - Thought it made more sense to use a checkbox instead of a list in case user has multiple licenses required for a project
    {
        type: "checkbox",
        name: "licensing",
        message: "Please choose any required linceses for your project.",
        choices: ["HTML", "CSS", "Javascript"]
    },
    // Github UN
    {
        type: "input",
        name: "githubUN",
        message: "Please enter your Github username."
    },
    // Email contact
    {
        type: "input",
        name: "email",
        message: "Please enter your email address for user to contact with questions"
    },
];
// The badge for that lincense is added to top of readme and a notice is added to that section of the readme titled License that explains which license the application is covered under

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) // Need to throw error if any errors
            throw err;
            console.log("Inputs added to README")
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
}

// Function call to initialize app
init();
