function highestscorer(playersinfo){
    var highestscorer=playersinfo[0][0];
    var highestscorer=playersinfo[0][1];
    for( var x=0; x<playersinfo.length; x++)
        if(highestscorer=playersinfo[x][1]){
            highestscorer=playersinfo[x][1];
            highestscorer=playersinfo[x][0];
        }
           
    return highestscorer;


}
var playersinfo =[["masud",22],["shakon",24],["rahman",28]];
var name =highestscorer(playersinfo);
console.log(name);
