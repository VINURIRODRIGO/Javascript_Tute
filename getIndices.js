// Indices of sum
function getIndices(source, target){
    var result = [];
    for(var i =0; i< source.length; i++){
        for(var j =i+1; j< source.length; j++){
            if(source[i]+source[j]==target){
                result.push(source[i]);
                result.push(source[j]);
                break;
            }
        }
    }
    return result;
}
var source =  [7, 17, 13, 19, 55];
var target = 26;
console.log(getIndices(source, target));
