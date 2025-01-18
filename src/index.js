import inquirer from "inquirer";
import colors from "colors";
import fs from "fs";

inquirer
  .prompt([
    {
      type: 'input',
      name: 'userName',
      message: 'What is your name?'
    },
    {
      type: 'list',
      name: 'userLocation',
      message: 'In what city are you located?',
      choices: ['Orlando', 'Tampa', 'Miami', 'Jacksonville', 'Tallahassee']
    },
    {
      type: 'input',
      name: 'userBio',
      message: 'Write a quick bio about yourself.'
    },
    {
        type: 'input',
        name: 'userLinkedIn',
        message: 'Enter your LinkedIn URL.'
      },
      {
        type: 'input',
        name: 'userGithub',
        message: 'Enter your Github URL.'
      },
      {
        type: 'number',
        name: 'userNumOfQuestions',
        message: 'How many more questions do you think I am going to ask?'
      },
      {
        type: 'confirm',
        name: 'userConfirm',
        message: 'Are you interested in creating a Portfolio out of these responses?'
      }
  ])

  .then((response) => {
    const data =
    `<!DOCTYPE html>
    <html lang="en">

    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
    <title>Document</title>
    </head>

    <body>
    <header class="p-5 mb-4 header bg-light">
    <div class="container">
      <h1 class="display-4">Hi! My name is ${response.userName}</h1>
      <p class="lead">I am from ${response.userLocation}.</p>
      <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">A litle bit about myself: ${response.userBio}</li>
        <li class="list-group-item">My GitHub username is ${response.userGithub}</li>
        <li class="list-group-item">My LinkedIn URL is ${response.userLinkedIn}</li>
      </ul>
    </div>
    </header>

    </body>
    </html>`;

    fs.writeFile("index.html", data, (err) => {
        if (err) {
            console.log(colors.red("An error occurred while saving the file."));
        } else {
            console.log(colors.green("The responses have been saved successfully and your portfolio has been generated!"));
        }
    })
  });