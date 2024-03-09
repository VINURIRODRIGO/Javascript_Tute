var name  = prompt("What is your name?");
console.log(name.toUpperCase());

var twit =  prompt("Add a message");
alert(twit.slice(0,129); // 128 characters 

var name = prompt("Hello 👋\n What is your name?")
var cappitalizeFirstLetter = name.slice(0,1).toUpperCase();
var restOfName = name.slice(1,name.length);
alert("Hi!! "+cappitalizeFirstLetter+restOfName);

function shiftNum() {
    var num1 = 3;
    var num2 = 5;

    var num3 = num2;
    num2 = num1;
    num1 = num3

   console.log(name.length)
    console.log(num2); 
}
shiftNum();
