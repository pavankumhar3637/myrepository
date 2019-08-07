/*Java script Arrow functions*/

d = new Date();
document.write(d);

addOn = () => 
{
    num01 = document.getElementById("firstnumber").value;
    num02 = document.getElementById("secondnumber").value;
    document.getElementById("result").innerHTML= parseInt(num01,10) + parseInt(num02,10);
};
subOf = () => {
    num01 = document.getElementById("firstnumber").value;
    num02 = document.getElementById("secondnumber").value;
    document.getElementById("result").innerHTML= parseInt(num01,10) - parseInt(num02,10);
};
prodOf = () => {
    num01 = document.getElementById("firstnumber").value;
    num02 = document.getElementById("secondnumber").value;
    document.getElementById("result").innerHTML= parseInt(num01,10) * parseInt(num02,10);
};
divOf = () => {
    num01 = document.getElementById("firstnumber").value;
    num02 = document.getElementById("secondnumber").value;
    document.getElementById("result").innerHTML= parseInt(num01,10) / parseInt(num02,10);
};
modOf = () => {
    num01 = document.getElementById("firstnumber").value;
    num02 = document.getElementById("secondnumber").value;
    document.getElementById("result").innerHTML= parseInt(num01,10) % parseInt(num02,10);
};

