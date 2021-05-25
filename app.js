const yargs = require('yargs');

yargs.command({
    command: 'hi',
    describe: 'Dit bonjour dans la console',
    handler: () => {
        console.log("Kikoo lol");
    }
}).command({
    command: 'dalek',
    describe: "Pousse le cri d'un dalek",
    handler: () => {
        console.log("EXTERMINATEEEEEEEE");
    }
}).argv;