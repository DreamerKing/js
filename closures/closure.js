var outerValue = "ninja";
var later;

function outer(){
    var innerValue = "sameria";
    function inner(parms){
        console.log("outerValue: ", outerValue, outerValue2 );
        console.log("innerValue: ", innerValue); 
        console.log("parms:", parms);
        
    }
    later = inner;
}

outer();
outerValue2 = "King"
later("dreamer");

