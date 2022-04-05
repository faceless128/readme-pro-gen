// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Add optional Table of Contents
const generateTOC = checkTOC => {
  if (!checkTOC) {
      return '';
  }
  return `
  ##Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
`
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}
${generateTOC(data.confirmTOC)}
## Installation
${data.installation}

## Usage
${data.usage}

## License

## Contributing
${data.contribution}

## Tests
${data.tests}

## Questions
`;
}

module.exports = generateMarkdown;
