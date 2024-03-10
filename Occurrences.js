// Code Challenge: Occurrences of a word in a string
var source = "Here is an example. Right here.";
var word = "here";


function getOccurrences(source, word){
    var count =0;
    if(source!=null){
        source = source.replaceAll(".", "");
        source = source.split(" ");
        for(var i=0; i<source.length; i++){
            if(source[i].toLowerCase()==word.toLowerCase()){
                count++;
            }
        }
    }
    return count;
}

console.log(getOccurrences(source, word));
