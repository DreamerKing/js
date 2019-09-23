/* let p = new Promise((resolve, reject) => {
    console.log("P");
    resolve("ok")
});
p.then(function(){
    p.then(function(){
        console.log("C");
    });
    console.log("A");
});

p.then(function(){
    console.log("B");
}); */
/* 
const p3 = new Promise(function(resolve, reject){
    resolve("B");
});

const p1 = new Promise(function(resolve, reject){
    resolve(p3);
});

const p2 = new Promise(function(resolve, reject){
    resolve("A");
});

//异步展开
p1.then(function(v){
    console.log(v);
});

p2.then(function (v) {
    console.log(v);
}) */

/* 
function timeoutPromise(delay){
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            reject("timeout");
        }, delay);
    })
}

function foo(){
    return new Promise((resolve, reject) => {
        resolve("foo");
    })
}


Promise.race([foo(), timeoutPromise(3000)]).then(
    function(value){
         console.log(value);  
    }, 
    function(err){
    console.log(err);
}) */


let p = new Promise((resolve, reject) => {
    resolve("Hello");
});

p.then(function(value){
    console.log("1", value);
});
p.then(function (value) {
    console.log("2", value);
});