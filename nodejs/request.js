
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

   request001
   (  
     {
       method: 'GET', uri:"http://httpbin.org.in", timeout:10000
      },
      function(err,response,body){console.log(body);}  
   )


  

