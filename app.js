const fs = require("fs");

fs.readFile("highscore.json", "utf-8", (err,dataStr) => {
    if(err) console.log(err);
    else {
        console.log(dataStr);
        const dataObjJS = JSON.parse(dataStr);
        console.log(dataObjJS);

        console.log(dataObjJS.player);
    }
})