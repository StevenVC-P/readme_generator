// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// TODO: Create a function to create markdown for README
const createMarkdown = (data) =>
`
# ${data.title}

${data.badge}

## Description
${data.description}

##  Table of Contents

* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}
Please review [${data.licenseURL}](${data.licenseURL}) to understand the license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
Come checkout my Github!

[${data.github}](https://www.github/${data.github})

And if you have any questions you can e-mail me at:
[${data.email}](${data.email})`;

module.exports = {
    createMarkdown
}