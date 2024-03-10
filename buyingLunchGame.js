var nameList = [];

function names(name){
    nameList.push(name);
}
names("Mala");
names("Nimal");
names("Sunil");
names("Sara");
var randomIndex = Math.floor(Math.random()*nameList.length);
console.log(nameList);
console.log(nameList[randomIndex]);
