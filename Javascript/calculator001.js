/*Java script Operations*/

//Define variable 
//var a = 20, b = 10;
var a = window.prompt("Enter value a:");
a = parseInt(a); 
var b = window.prompt("Enter value b:");
b = parseInt(b); 
window.confirm ("Calculations on "+a+" and "+b );
document.write("<br>");
document.bgColor = "cyan";
d = new Date();
document.write(d);
document.write("<br>");document.write("<br>");
document.write(" SUM of "+a+" and "+b+" = ", (a+b));
document.write("<br>");document.write("<br>");
document.write(" DIFFERENCE of "+a+" and "+b+" = ",(a-b));
document.write("<br>");document.write("<br>");
document.write(" MULTIPLICATION of "+a+" and "+b+" = ",(a*b));
document.write("<br>");document.write("<br>");
document.write(" MOD of "+a+" and "+b+" = ",(a%b));
document.write("<br>");document.write("<br>");
document.write(" DIVISION: "+a+" divided by "+b+" = ",(a/b));
document.write("<br>");document.write("<br>");
document.write(" EXPONENTIAL: "+a+" power of "+b+" = ",(a**b));

