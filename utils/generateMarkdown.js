// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "The MIT License":
      return `![MIT License Badge](https://img.shields.io/badge/license-MIT-brightgreen)`;
    case "Apache License":
      return `[Apache License Badge](https://img.shields.io/badge/license-Apache-brightgreen)`;
    case "GNU License":
      return `[GNU License Badge](https://img.shields.io/badge/license-GNU-brightgreen)`;
    case "UNLICENSED":
      return `[UNLICENSED License Badge](https://img.shields.io/badge/license-UNLICENSED-brightgreen)`;
    case "N/A":
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "The MIT License":
      return `[MIT License](https://www.mit.edu/~amini/LICENSE.md)`;
    case "Apache License":
      return `[Apache License](https://www.apache.org/licenses/LICENSE-2.0)`;
    case "GNU License":
      return `[GNU License](https://www.gnu.org/licenses/gpl-3.0.en.html)`;
    case "UNLICENSED":
      return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "N/A") {
    return "";
  } else {
    return `This project uses the following license 
    ${renderLicenseLink(license)}
    `;
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (answers) => {
  function renderTableOfContents(data) {
    if (data === "N/A") {
      return `
-[Installation](#installation)
-[Usage](#usage)
-[Contributing](#contributing)
-[Test](#tests)
-[Questions](#questions)
-[Contribution](#contribution)
    `;
    } else {
      return `
-[Installation](#installation)
-[Usage](#usage)
-[License](#license)
-[Contributing](#contributing)
-[Test](#tests)
-[Questions](#questions)
-[Contribution](#contribution)
    `;
    }
  }

  function renderContribution(data) {
    if (answers.contribution === "") {
      return `Made with ❤️ by ${answers.name}`;
    } else {
      return `Made with ❤️ by ${answers.name}, ${answers.contribution}`;
    }
  }

  return `
  # ${answers.title}

  ${renderLicenseBadge(answers.license)}

  ## Description
  ${answers.description}

  ## Table of Contents
  ${renderTableOfContents(answers.license)}

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## License
  ${answers.license}

  ## Contributing:
  ${answers.contributing}

  ## Tests
  ${answers.test}

  ## Questions -
  Please send all questions to: ${answers.questions}
  
  Git Hub Profile: https://github.com/${answers.github}

  ## Contribution:
  ${renderContribution()}
  `;
};

module.exports = generateMarkdown;
