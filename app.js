// Si on veut utiliser une librairie disponible dans le moteur de Node.JS
// OU sur npm

// Dans le cas de npm, npm install lalibrairie (ex: npm install validator)
// On crée une variable et on l'initialise avec la fonction require
// Qui vient récupérer la librairie concernée entre les guillemets
const validator = require("validator");

let myEmail = "jean-baptiste@pop.com";

if(validator.isEmail(myEmail)) {
    console.log("C'est une adresse mail correc");
}
else {
    console.log("T'as marqué de la merde")
}