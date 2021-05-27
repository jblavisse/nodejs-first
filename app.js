const fs = require("fs");

// Pour modifier le contenu d'un fichier
// 1. le récupérer
fs.readFile("highscore.json", "utf-8", (err,dataStr) => {
    if(err) console.log(err);
    else {
        // 1a. Je récupère le contenu en chaîne de caractère
        console.log(dataStr);

        // 1b. Je transforme la string JSON en objet JS
        const dataObjJS = JSON.parse(dataStr);
        console.log(dataObjJS);

        // 2. Exécuter les modifications en JS
        dataObjJS.player = 'JB';
        console.log(dataObjJS);

        // 2b. Transformer mes modifs obj JS en chaine JSON
        const newDataJSON = JSON.stringify(dataObjJS); 
        console.log(newDataJSON);

        // 3. Envoyer les modifs de mon JSON en écrasant le fichier
        fs.writeFile("highscore.json",newDataJSON,(err) => {
            if(err) console.log(err);
            else {
                console.log("Le score a été modifié");
            }
        });
    }
})


