const app = require('./app_v1');
const yargs = require('yargs');

const argvObj = yargs.command('help', "display command details").argv;
// console.log(argvObj);


if(argvObj._[0] === "help"){
    app.runNotesHelp();
}else{
    app.runNotes();
}