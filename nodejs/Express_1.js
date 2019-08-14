/* working on express */
var express01 = require('express');
var app1 = express01();

app1.get ('/', function(req,res)
                {
                    res.send("Welcome to express");
                }
        );
app1.get ('/hello', function(req,res)
                    {
                        res.send("Say Hello to express");
                    }
        );
        
app1.listen(5000, function()
                    {
                        console.log('app listening on port 5000!!!');
                    }
            );