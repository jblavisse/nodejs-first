const fs = require("fs");

// 1. Le chemin du fichier
// 2. Le contenu qu'on veut dans le fichier (entre "")
// 3. Le callback qui va s'exécuter une fois que c'est fait

const myJSONInString = `[
    {
        "title": "Ma note",
        "body": "Lorem ipsum dolor sit amet"
    }
]`;

fs.writeFile("notes.json",myJSONInString,(err) => {
    if(err) console.log(err);
    else {
        console.log("Le fichier a été sauvegardé");
    }
});