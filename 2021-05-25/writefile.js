const fs = require("fs");

// 1. Le chemin du fichier
// 2. Le contenu qu'on veut dans le fichier (entre "")
// 3. Le callback qui va s'exécuter une fois que c'est fait

fs.writeFile("message.txt","Coucou...",(err) => {
    if(err) console.log(err);
    else {
        console.log("Le fichier a été sauvegardé");
    }
});