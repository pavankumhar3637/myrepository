const fs = require('fs');
const filePath = './data/notes-data.json'

let fetchNotes = () => {
    try{
        if(fs.existsSync(filePath)){
            let noteString = fs.readFileSync(filePath);
            return JSON.parse(noteString);
        } else{
            return null;
        }
    } catch(e){
        return [];
    }
};

let  saveNotes = (notes)=>{
    fs.writeFileSync(filePath, JSON.stringify(notes));
}

//Adding note
let addNote = (title, body, addCallback) =>{
 let note={
     title, 
     body
 };
 let notes = fetchNotes();
 if(notes !== null){
        if(notes.length > 0){
            let foundNote = notes.find(n => n.title === title);
            if(foundNote === undefined){
                notes.push(note);
                saveNotes(notes);
                addCallback({
                    title: note.title,
                    message: 'added successfully'
                });
            }
            else{
                addCallback({
                    title: note.title,
                    message: 'Note already exists'
                });
            }
        }else{
            notes.push(note);
            saveNotes(notes);
            addCallback({
                title: note.title,
                message: 'Added successfully'
            });
        }
    }else{
        addCallback({
            title: null,
            message: "file doesn't exist"
        });
    }
}

//reading note
let readNote = (title, readCallback) =>{
    let note={
        title
    };
    let notes = fetchNotes();
    if(notes.length > 0){
        let foundNote = notes.find(n => n.title === title);
        if(foundNote !== undefined){                    
            readCallback(foundNote);
        }
        else{
            readCallback({
                title: note.title,
                message: "Note doesn't exist"
            });
        }
    }else{
        readCallback({
            title: note.title,
            message: "Note doesn't exist"
        });

    }
    
}


//remove note
let removeNote = (title, removeCallback) =>{
    let note={
        title
    };
    let notes = fetchNotes();
    if(notes.length > 0){
        let foundNote = notes.find(n => n.title === title);
        if(foundNote !== undefined){             
            notes = notes.filter(n=> n.title != title)
            saveNotes(notes);
            removeCallback({
                title: title,
                message: "Removed successful"
            })
        }
        else{
            removeCallback({
                title: note.title,
                message: "Note doesn't exist"
            });
        }
    }else{
        removeCallback({
            title: note.title,
            message: "Note doesn't exist"
        });        
    }
    
}
//list all notes
let list = (listCallback) =>{
    let notes = fetchNotes();
    if(notes !== null){
        if(notes.length > 0){
           listCallback(notes);
        }
        else{
            listCallback("notes not exists");
        }
    }
}

module.exports = {
    addNote,
    readNote,
    removeNote,
    list
}