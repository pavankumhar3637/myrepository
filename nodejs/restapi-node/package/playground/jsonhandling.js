const fs = require('fs');

const person = [
    {
        name: "siva",
        id: 1
    },
    {
        name: "kiran",
        id: 2
    }
];

let write  = () => {
    const personJson = JSON.stringify(person);
    fs.writeFileSync('jsondata.json',personJson);
}


let read  = () => {
    let data = fs.readFileSync('jsondata.json');
    let d = JSON.parse(data);
    console.log(d);
}

read();