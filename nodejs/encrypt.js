/* To check for crypto module built in modules 
   To run the file
   >node <example>.js*/
   var krypto = require("crypto");
   //console.log(krypto);
   //Encryption
   var cipher01 = krypto.createCipher("aes-256-ecb","password");
   console.log("PC cipher01: "+cipher01);
   var mystr = cipher01.update("Pavan","utf8","hex")+cipher01.final("hex");
   console.log("mystr-"+mystr);
   //DeEncryption
   var decipher01 = krypto.createDecipher ("aes-256-ecb","password");
   console.log("PC decipher01: "+decipher01);
   var mystr_decrypt = decipher01.update("c625c2fbd8601565ec32bbd80d4a4a1d","hex","utf8")+decipher01.final("utf8");
   console.log("mystr_decrypt-"+mystr_decrypt);

