//
const yargs = require('yargs');

console.log(process.argv)

// console.log(`argumets: ${yargs.argv._}`);
// console.log("Command: "+ yargs.argv.command);
/* node process-demo.js --command add title "callback" body "some noteS" */


console.log(yargs.argv)

// add : add a new note (add --title "some title" --body "some body")
// read : read a new note (add --title "some title")
// remove : removes an existing note (remove --title "some title")
// list   : reads all notes (list)


// help menu
var titleOptions = {
    describe:'Title of the note',
    demand: true,
    alias:"t"
};
var bodyOptions = {
    describe:'Content or body of the note',
    demand: true,
    alias:"b"
}
const argvObj = yargs
    .usage( "Usage: $0 <command_name> [-h]")
    .command('add', "Adds a new note", {title:titleOptions,body: bodyOptions})
    .command('remove', "Remove  a note", {itle:titleOptions})
    .command('read', "Read an existing note", {title:titleOptions})
    .command('List', "Display all the existing notes")
    .help('h')
    .alias('h', 'help')
    .argv;


const command = argvObj._[0];
//console.log(command);

switch(command){
    //node process-demo.js add --title "some title" --body "some content"
    case "add":
        const title = argvObj.title;
        const body  = argvObj.body;
        const note = {
            title, body
        }
        console.log(note);
        // console.log(argvObj.t);
        break;
    default:
        console.log("called default");
}