/* To run http
   To run the file
   >node <example>.js
   Testing:
   ---------
   1.node http.server.js
   2.Open browser and navigste URL
    http://localhost:3000
   
    OR
   3. CURL http://localhost:3000
    */

    var httpp = require("http");

    var PORT = process.env.PORT || 3000;

    var server = httpp.createServer(
        function(req,res)
        {
        res.writeHead(200, {"Content-Type":"text/html"});
        res.write('<!DOCTYPE html>'+
                 '<html lang= "en">'+
                 '<head>'+
                 '<meta charset="UTF-8">'+
                 '<meta name="viewport" content="width=device-width, initial-scale=1.0">'+
                 '<meta http-equiv="X-UA-Compatible" content="ie=edge">'+
                 '<title>http example</title>'+
                 '</head>'+
                 ' <body>'+
                 '<h1> <P> Example for HTTP - <br> Welcome to NODE.JS</P> </h1>'+
                 '<h2> <P> First code with nodemon </P> </h2>'+
                 ' </body>')
        res.end();
        });
        
    server.listen(PORT);
    console.log("Server is listening to Port: 3000");
