
/* 
Front end
----------
axios
fetch
ajax.get

http.get

request 
 - is the module to request external api
request-promise
*/

   var request001 = require("request");
   console.log(request001);

   request001('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', {json:true}, (err,response,body) =>
     {
       if(err){console.log(err);}
       console.log(body.url);
       console.log(body.explaination);
     });


  

