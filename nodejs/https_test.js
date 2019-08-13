/* To run http
   To run the file
   >node <example>.js
   Testing:
   ---------
   1.node http.server.js
   2.Open browser and navigste URL
    http://localhost
   
    OR
   3. CURL http://localhost
    */

    var httpp = require("http");

    var server = httpp.createServer(
        function(req,res)
        {
        res.writeHead(200);
        res.end("Welcome to NODE.JS");
        });
        
    server.listen(4000);
    console.log("Server is listening to Port: 4000");
