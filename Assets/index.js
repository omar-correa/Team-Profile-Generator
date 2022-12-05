const fs = require('fs')
const inquirer = require('inquirer')

inquirer.prompt([
    {
        name: "name",
        type:
        message:
    },
    {
        name: "id",
        type:
        message:
    },
    {
        name: "email",
        type:
        message:
    },
    {
        name: "office"
        type: 
        message:
    },
]).then(response => {
    const html = `<html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio</title>
      <link rel="stylesheet" href="./style.css">
    </head>
    <body>
      <main>
          <h1>Portfolio</h1> 
          <div><h3>${response.name}</h3></div>
          <div><h3>${response.location}</h3></div>
          <div><h3>${response.bio}</h3></div>
          <div><h3>${response.linkedin}</h3></div>
          <div><h3>${response.github}</h3></div>
        </main>
        <script src="index.js"></script>
    </body>
    </html>`
    fs.writeFile("index.html", html, error => {
        if (error) {
            console.log("error")
        } else {
            console.log("response saved successfully")
        }
    })
})