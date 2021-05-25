// créer un programme qui demande un mot de passe à 
// l'utilisateur et qui l'informe si ce mot de passe 
// est fort ou pas.
// Si le mot de passe est fort, afficher "Ce mot de passe est suffisamment sécurisé" en texte avec un fond vert
// Si le mot de passe est nul, afficher "Mot de passe pas assez sécur" en rouge gras

const chalk = require("chalk");
const prompt = require("prompt");
const validator = require("validator");

prompt.start();

prompt.get(['password'], (err, result) => {
    if(validator.isStrongPassword(result.password)) {
        console.log(chalk.inverse.green("Ce mot de passe est suffisamment sécurisé"));
    }
    else {
        console.log(chalk.bold.red("Ce mot de passe n'est pas sécurisé"));
    }
})
