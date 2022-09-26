// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "You must enter your name!";
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your application?",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation requirements for your application?",
  },
  {
    type: "input",
    name: "usage",
    message: "How do we use your application?",
  },
  {
    type: "list",
    name: "license",
    message: "What license(s) did you use?",
    choices: ["N/A"],
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Please choose what license(s) you used. If you didn't use a license then please choose the 'N/A' option.";
      }
    },
  },
  {
    type: "input",
    name: "contribution",
    message: "Who contributed in creating the application?",
  },
  {
    type: "input",
    name: "test",
    message: "What are the instructions to test your application?",
  },
  {
    type: "input",
    name: "questions",
    message: "How can someone contact you if they have questions?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();