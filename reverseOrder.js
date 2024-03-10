// Reverse order a list
function getReversed(source){
    var result = [];
    for(var i=0; i<source.length; i++){
        for(var j=i+1; j<source.length; j++){
            if(source[i]<source[j]){
                var n = source[i];
                var v = source[j];
                source[i] = v;
                source[j] = n;
            }
        }
    }
    return source;
}
var numbers =  [7, 17, 13, 19, 5];

console.log(getReversed(numbers));
