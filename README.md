# Portfolio Generator

## Description

The Portfolio Generator is a command-line tool designed to help users create a personalized HTML portfolio page based on their input. The app prompts the user for essential details like name, location, bio, LinkedIn, and GitHub URLs, and then generates an HTML document with the provided information.

## Instructions

* The application will prompt the user for information like their name, location, bio, LinkedIn URL, and GitHub URL.

* An HTML document containing the information collected from the prompts will be constructed and written to the file system.

## Key Features

* Prompts users for personal and professional information.

* Dynamically generates an HTML portfolio page using string template literals.

* Saves the HTML file to the file system.

## Technology Stack:

This application needs the following tools and technologies to operate:

* `fs` for writing to the file system

* `inquirer` for collecting user input

* String template literals for generating a string version of the HTML document before it is written to the file system

## Additional Resources

* Learn more about how to use `inquirer` for collecting user input: [Inquirer.js Documentation](https://www.npmjs.com/package/inquirer) - 

* Learn more about how to use the `fs` module for working with the file system: [Node.js fs Documentation](https://nodejs.org/dist/latest-v16.x/docs/api/fs.html)
