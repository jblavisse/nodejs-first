const fs = require("fs");

// objet javascript
const newHighScore = {
    player: "JEA",
    score:  123000
};

const newHighScoreJSON = JSON.stringify(newHighScore);

fs.writeFile("highscore.json",newHighScoreJSON,(err) => {
    if(err) console.log(err);
    else {
        console.log("Le nouveau score a été sauvegardé");
    }
});