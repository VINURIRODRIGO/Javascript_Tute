// Words with five or fewer characters
function findFiveOrFewer(source){
    var result = [];
    source = source.split(" ");
    for(var i in source){
        if(source[i].length<=5){
            result.push(source[i]);
        }
    }
    return result;
}
var source =  "there are both smaller and bigger words here";

console.log(findFiveOrFewer(source));
