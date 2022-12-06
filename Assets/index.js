const finalTeam = (team) => {
    console.log(team)
    const htmlPage = [];
    const generateManager = manager => {
        console.log(manager);
        const managerHtml = ` 
        <div class="card" style="width: 15rem;">
            <div class="card-header">
           ${manager.name} <br/>
           <i class="fa-sharp fa-solid fa-mug-saucer"></i>Manager</div>
           <ul class="list-group">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
            <li class="list-group-item">Office Number: ${manager.officeNum}</li>
            </ul>
        </div>
        `;
        htmlPage.push(managerHtml);
    }
    const generateIntern = intern => {
        console.log(intern);
        const internHtml = ` 
        <div class="card" style="width: 15rem;">
            <div class="card-header">
           ${intern.name} <br/>
           <i class="fa-regular fa-graduation-cap"></i>Intern</div>
           <ul class="list-group">
            <li class="list-group-item">Employee ID: ${intern.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
            <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
        `
        htmlPage.push(internHtml)
    }

    const generateEngineer = engineer => {
        console.log(engineer);
        const engineerHtml = ` 
        <div class="card" style="width: 15rem;">
            <div class="card-header">
           ${engineer.name} <br/>
           <i class="fa-sharp fa-solid fa-glasses"></i>Engineer</div>
           <ul class="list-group">
            <li class="list-group-item">Employee ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
            <li class="list-group-item">Github Username: <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></li>
            </ul>
        </div>
        `
        htmlPage.push(engineerHtml)
    }

    for (let i = 0; i < team.length; i++) {
        if (team[i].getMember() === "Manager") {
            generateManager(team[i]);
        }
        if (team[i].getMember() === "Engineer") {
            generateEngineer(team[i]);
        }
        if (team[i].getMember() === "Intern") {
            generateIntern(team[i]);
        }
    }

    return htmlPage.join('');
}
module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/b15be11c0c.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../dist/style.css" />
    <title> Your Team Profile</title>
</head>
<body>
    <header>
    <h1> My Team </h1>
    </header>

    <main> ${finalTeam(team)} </main>
     
</body>
</html>
    `;
}