let outerValue = 'outerValue';
let later;

function wrapper() {
    let innerValue = "innerValue";
    function innerFn(){
        console.log(innerValue, outerValue);
    }
    later = innerFn;
    innerValue = "innerValue2";
    outerValue = "outerValue2";
}

wrapper();
later();