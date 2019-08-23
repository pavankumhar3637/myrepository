
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

   var request_p001 = require("request-promise");
   console.log(request_p001);

   request_p001
   (  
     {
       method: 'GET', uri:"http://www.google.com", timeout:10000
      },
      function(err,response,body){console.log(body);}  
   )


  

