// A partir de la librairie prompt, créer un programme 
// qui demande un nom dans le terminal, et qui affiche:
// "Bonjour, <lenom>" (ex: Bonjour, Jean-Bernard)

const prompt = require("prompt");

prompt.start();

prompt.get(['firstname'],(err, result) => {
    if(err) {
        console.log("Y a un blem!");
    }
    else {
        console.log(`Bonjour, ${result.firstname}`);
    }
});