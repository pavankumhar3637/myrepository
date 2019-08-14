## Node JS
- It is a open source and cross platform.
- It is build on V8 google javascript engine and developed in C++.
- It is javascript on server side.
- It is platform to run JS on server.
- It is used to develop scalable network based applications, 
  web applications, chat servers, TCP servers, REST API's.
- It is very fast.
- It performs Event-driven, non-block I/O operations.

## To Check Node revision.
$node -v
    C:\Users\Pawankumhar>node -v
    v10.16.0

## To Check npm (node package manager) revision.
$npm -v
    C:\Users\Pawankumhar>npm -v
    6.9.0

## NVM
- Node Version Manager.
- used to manage different revisions of node in our system.
  Ex: nvm use

## REPL
- READ EVAL PRINT LOOP
- It is used to execute basic java script code in command prompt.
- denoted by (>)
EX: C:\Users\Pawankumhar>node
    > console.log("Hai Hello");
    Hai Hello
    undefined
    >
    (To exit, press ^C again or type .exit)
    > .exit

### Process
- It is a global object in node, like window() in client side.
    C:\Users\Pawankumhar>node
    > process.platform
        'win32'
    > process.arch
        'x64'

### REQUIRE
- require() / import()
- It is used to load any predefined or custom modules.
   > var os = require("os");
    undefined

### npm commands
- npm init: TO CREATE EMPTY package.json file.
- npm install: TO INSTALL dependencies WHICH ARE IN pacakage.json file.
  - To install particular module as well as it saves in package.json (dependencies)
   - npm install <module> --save
   - npm install <module>@<revision> --save
    EX:
    ----- 
    PS F:\BC\PREQ\myrepository\nodejs> node .\list_Modules.js
       internal/modules/cjs/loader.js:638
    throw err;
    ^
    Error: Cannot find module 'builtin-modules'
  
    PS F:\BC\PREQ\myrepository\nodejs> npm install builtin-modules --save
    PS F:\BC\PREQ\myrepository\nodejs> node .\list_Modules.js
   
  - To install particular module as well as it saves in package.json (dev dependencies)
   - npm install <module> --save -dev
  - To UNINSTALL particular module
   - npm uninstall <module>
   - npm clean.cache
  - custom
   - npm init or npm init -y
   - npm install nodemon --g or npm install nodemon --save

 ## EXpress
 - Express is a minimal and flexible node.js web application framework
 # Install: 
 $npm install express --save
 #Testing
  1.$node <express_1.js>
  2.Open browser and navigate to url
    http://localhost:5000 or CURL -- curl http://localhost:5000

 - var express01 = require('express');
   var app = express();
   app.listen(3000);
## Middle Ware
   app.use

--> npm install express-generator -g
--> express <myfirstapp>
--> cd <myfirstapp>
--> npm install
--> npm start

--> node emailer
--> moduledemo
--> restapi