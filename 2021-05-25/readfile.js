const fs = require('fs');

// Objectif, récupérer le contenu d'un fichier
// En l'occurence celui de index.html

// 1. le fichier que vous voulez
// 2. L'encodage (jeu de caractères) -> utf-8
// 3. La fonction à exécuter quand c'est bon
// data -> le contenu du fichier

fs.readFile('style.css','utf-8', (err, data) => {
    if(err) console.log(err);
    else {
        console.log(data);
    }
})