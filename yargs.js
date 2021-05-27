const yargs = require('yargs');

yargs.command({
    command: 'hi',
    describe: 'Dit bonjour',
    builder: {
        firstname: {
            describe: 'Prénom d\'un gens',
            demandOption: true, // requis
            type: 'string'
        },
        lastname: {
            describe: 'Nom d\'un gens',
            demandOption: false, // non requis 
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log(`Coucouuuuu ${argv.firstname} ${argv.lastname}`);
    }
}).command({
    command: 'goodbye',
    describe: "Dit au revoir",
    handler: () => {
        console.log("Tchao!");
    }
}).argv;