/*Java script variables*/
//Define variable - number
var a = 10;
//print value of a
console.log ("a value : "+a);
document.write("a value : "+a);
//print type of a 
console.log ("type of a value : "+typeof(a));
document.write("\ Type of a value : "+typeof(a));
//Define variable - String
var b = "Wicked";
//print value of b
document.writeln(" b value : "+b);
//print type of b 
document.writeln("  Type of b value : "+typeof(b));
//Define variable - boolean
var bool = true;
//print value of bool
document.writeln(" bool value : "+bool);
//print type of bool 
document.writeln("  Type of bool value : "+typeof(bool));
//Define variable - array
var arr1 = [1,2,3,4,5,5,7];
//print value of arr1
document.writeln(" arr1 value : "+arr1);
//print type of arr1 
document.writeln("  Type of arr1 value : "+typeof(arr1));
document.writeln("  Length of arr1 value : "+arr1.length);
//Define variable - object
var obj = {"id":10,"name":"Sivasai", "age":45, "Gender":"M"};
//print value of obj
document.writeln(" obj value : "+obj);
//print string of obj
document.writeln(" obj value : "+JSON.stringify(obj));
//print string of obj
//var obj1 = JSON.parse(obj);
//document.writeln(" obj1 value : "+obj1.id);
//print type of obj 
document.writeln("  Type of obj value : "+typeof(obj));
//print type of obj 
document.writeln("  id of obj value : "+obj.id);
//print type of obj 
document.writeln("  Name of obj value : "+obj.name);