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
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your project?",
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
    message: "What license did you use?",
    choices: [
      "The MIT License",
      "Apache License",
      "GNU License",
      "UNLICENSED",
      "N/A",
    ],
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Please choose what license you used. If you didn't use a license then please choose the 'N/A' option.";
      }
    },
  },
  {
    type: "input",
    name: "contribution",
    message:
      "Did anyone else contribute to the project? If so, add their names. If not, leave this blank.",
  },
  {
    type: "input",
    name: "test",
    message: "What are the instructions to test your application?",
  },
  {
    type: "input",
    name: "questions",
    message: "Please enter your email for people to contact you.",
  },
];

const promptUser = () => {
  return inquirer.prompt(questions);
};

// TODO: Create a function to write README file
function writeToFile(data) {
  return new Promise((resolve, reject) => {
    fs.writeFile("./src/README.md", data, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        message: "README.md Created",
      });
    });
  });
}

// TODO: Create a function to initialize app
function init() {
  promptUser(questions)
    .then((answers) => {
      return generateMarkdown(answers);
    })
    .then((readmeMarkdown) => {
      return writeToFile(readmeMarkdown);
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Function call to initialize app
init();
