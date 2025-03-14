# Portfolio Generator

## Project Overview

The Portfolio Generator is a command-line tool designed to help users create a personalized HTML portfolio page based on their input. The app prompts the user for essential details like name, location, bio, LinkedIn, and GitHub URLs, and then generates an HTML document with the provided information.

## Table of Contents

- [Usage](#usage)
- [Instructions](#instructions)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Additional Resources](#additional-resources)

## Usage

The application is invoked by using the following command:

```bash
node index.js
```

## Instructions

1. The application will prompt the user for information like their name, location, bio, LinkedIn URL, and GitHub URL.
2. An HTML document containing the information collected from the prompts will be constructed and written to the file system.

## Key Features

* Saves the HTML file to the file system.
* Prompts users for personal and professional information.
* Dynamically generates an HTML portfolio page using string template literals.

## Technology Stack

This application needs the following tools and technologies to operate:
* `fs` for writing to the file system.
* `inquirer` for collecting user input.
* String template literals for generating a string version of the HTML document before it is written to the file system.

## Additional Resources

Learn more about the [inquirer package](https://www.npmjs.com/package/inquirer) for collecting user input

Learn more about how to use the [fs module](https://nodejs.org/dist/latest-v16.x/docs/api/fs.html) for working with the file system
