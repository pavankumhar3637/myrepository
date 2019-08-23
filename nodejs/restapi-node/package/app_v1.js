const yargs = require('yargs');
const noteModule = require('./service/notes.service');


module.exports.runNotesHelp = () =>{
    // help menu
    let titleOptions = {
        describe:'Title of the note',
        demand: true,
        alias:"t"
    };
    let bodyOptions = {
        describe:'Content or body of the note',
        demand: true,
        alias:"b"
    }
    const argvObj = yargs
        .usage( "Usage: $0 <command_name> [-h]")
        .command('add', "Adds a new note", {title:titleOptions,body: bodyOptions})
        .command('remove', "Remove  a note", {title:titleOptions})
        .command('read', "Read an existing note", {title:titleOptions})
        .command('List', "Display all the existing notes")
        .help('h')
        .alias('h', 'help')
        .argv;
}

module.exports.runNotes = () =>{

    const argvObj = yargs.argv;
    const command = argvObj._[0];
    const title = argvObj.title;
    const body  = argvObj.body;

    switch(command){
        //node app.js add --title "some title" --body "some content"
        case "add":
            //fetch values from terminal
            noteModule.addNote(title, body, (status)=>{
                console.log(`${status.title}:${status.message}`);
            });
            break;
        //node app.js list
        case "list":
            //fetch all values
            noteModule.list((status) =>{
                console.log(status);
            });
            break;
        //node app.js read --title "some title"
        case "read":
            //fetch note w.r.t title
            noteModule.readNote(title, (status) =>{
                if(status.message)
                    console.log(`${status.title}:${status.message}`);
                else
                    console.log(status.body);
                
            });
            break;
        //node app.js remove --title "some title"
        case "remove":
            //remove note w.r.t title
            noteModule.removeNote(title, (status)=>{
                console.log(`${status.title}:${status.message}`);
            });
            break;
        default:
            console.log("Bye.....");
    }
}