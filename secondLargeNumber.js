function secondLargeNumber(source){
    for(var i=0; i<source.length; i++){
        for(var j=i+1; j<source.length; j++){
            if(source[i]>source[j]){
                var temp = source[i];
                source[i] = source[j];
                source[j] = temp;
            }
        } 
    }
    return source[source.length-2];
}


var source = [8,7,6,1,0,9,2];
console.log(secondLargeNumber(source));
