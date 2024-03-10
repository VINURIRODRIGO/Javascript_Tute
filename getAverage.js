// Calculate the average in the list
function getAverage(source){
    var count =0;
    for(var i in source){
        count+=source[i];
    }
    return count/source.length;
}
var numbers =  [-20, 30, -55];

console.log(getAverage(numbers));
