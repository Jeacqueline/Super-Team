const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');

let myTeam = [];

function createManager(){
    inquirer
    .prompt([
        {
            type:'input',
            name: 'name',
            message:"What is the Manager's name",
        },
        {
            type:'input',
            name: 'email',
            message:"What is the Manager's email address?",
        },
        {
            type:'input',
            name: 'id',
            message:"What is the Manager's employee ID?",
        },
        {
            type:'input',
            name: 'officeNumber',
            message:"What is the Manager's office number?",
        },
    ])

    .then((answers)=>{
        const manager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            answers.officeNumber
        );
        myTeam.push(manager);
        nextQuestion();
    });
}
function createTeam(){
  console.log("Welcome to my Super Team!");
  createManager()
}
function nextQuestion(){
    inquirer
    .prompt([
        {
            type:'list',
            name: 'employeeType',
            message: 'Wich type of employee would you like to add?',
            choices:['Engineer', 'Intern','Finish my Super Team'],
        },
    ])
    .then((answer)=>{
        switch (answer.employeeType){
            case 'Engineer':
                createEngineer();
                break;
                case 'Intern':
                createIntern();
                break;
                default:
                    generateHTML();
        }
    });
}

function createEngineer(){
    inquirer
    .prompt([
        {
            type:'input',
            name:'name',
            message: 'What is the enngineer s name?',
        },
        {
            type:'input',
            name:'id',
            message: 'What is the enngineer s ID??',
        },
        {
            type:'input',
            name:'email',
            message: 'What is the enngineer s email address?',
        },
        {
            type:'input',
            name:'github',
            message: 'What is the enngineer s GitHub username?',
        },
    ])
    .then((answers)=> {
        const engineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            answers.github
        );
        myTeam.push(engineer);
        nextQuestion();
    });
}
function createIntern(){
    inquirer
    .prompt([
        {
            type:'input',
            name:'name',
            message:'What is the intern name?',
        },
        {
            type:'input',
            name:'id',
            message:'What is the intern ID?',
        },
        {
            type:'input',
            name:'email',
            message:'What is the intern email address?',
        },
        {
            type:'input',
            name:'school',
            message:'What is the intern s school?',
        },
    ])
    .then((answers) =>{
        const intern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            answers.school
        );
        myTeam.push(intern);
        nextQuestion();
    });
}




function generateHTML() {
    // Crear la estructura básica del HTML
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>My Super Team</title>
          <link rel="stylesheet" href="style.css">
        </head>
        <body>
          <header>
            <h1>My Super Team</h1>
          </header>
          <main>
            <div class="card-container">
              ${generateCards()}
            </div>
          </main>
        </body>
      </html>
    `;
  
    // Crear un archivo llamado "team.html" con el contenido generado
    fs.writeFile("team.html", html, (err) => {
      if (err) throw err;
      //console.log("El archivo team.html ha sido generado con éxito.");
    });
  }
  
  function generateCards() {
    let cards = "";
   console.log(myTeam);
    // Generar la tarjeta HTML para cada miembro del equipo
    for (const member of myTeam) {
      let details = "";
  
      if (member instanceof Manager) {
        details = `<p>Office Number: ${member.office}</p>`;
      } else if (member instanceof Engineer) {
        details = `<p>GitHub: <a target="_blank" href="https://github.com/${member.github}">${member.github}</a></p>`;
      } else if (member instanceof Intern) {
        details = `<p>School: ${member.school}</p>`;
      }
  
      const card = `
        <div class="card">
          <h2>${member.name}</h2>
          <h3>${member.role}</h3>
          <p>ID: ${member.id}</p>
          <p>Email: <a href="mailto:${member.email}">${member.email}</a></p>
          ${details}
        </div>
      `;
  
      cards += card;
    }
  
    return cards;
  }
  

createTeam();

module.exports= generateHTML;