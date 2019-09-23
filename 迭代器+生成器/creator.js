/* function *foo(x, y){
    yield x + (yield y);
    console.log(x*y);
    return x - y;
}

let a = foo(23, 21);
console.log(a);

console.log(a.next());
console.log(a.next()); */


/* function *foo(){
    while (true) {
        yield Math.floor(Math.random()*101);
    }
}

const getRandomNumber = foo();

let number = getRandomNumber.next();
console.log(number.value); */

/* 
function *foo(){
    yield *[1, 2, 3]
   // yield yield yield 2;
}

const it = foo();

for (const i of it) {
    console.log(i);
} */
/* 
function *foo(){
    yield 1;
    yield 2;
    yield 3;
    return 4;
}

function *bar(){
    let x = yield *foo();
    console.log("x:", x);
}

for (const v of bar()) {
    console.log(v);
} */
/* 
function *foo(x){
    if(x < 3){
        x = yield *foo(x + 1);
    }
    return x * 2;
}

console.log(foo().next());


for (const it of foo()) {
    console.log(it);
} */
/* 
function *foo(){
    console.log("*foo() start");
    yield 3;
    yield 4;
    console.log("*foo() end");
}

function *bar() {
    yield 1;
    yield 2;
    yield *foo(); // 生成器委托 控制器权交接
    yield 5;
}

for (const it of bar()) {
    console.log(it); 
} */

/* function *foo(){
    console.log("inside *foo():", yield "B");
    console.log("inside *foo():", yield "C");
    return "D";
}

function *bar(){
    console.log("inside *bar():", yield "A");
    console.log("inside *bar():", yield *["B", "C", "D"]);

    //console.log("inside *bar():", yield *foo());
    console.log("inside *bar():", yield "E");
    return "F";
}

let it = bar();
console.log("outside0: ", it.next().value);
console.log("outside1: ", it.next(1).value);
console.log("outside2: ", it.next(2).value);
console.log("outside3: ", it.next(3).value);
console.log("outside4: ", it.next(4).value);
 */


 function *foo(){
     try {
         yield "B";
     } catch (error) {
         console.log("error caught inside *foo(): ", error);
     }
     yield "C";
     throw "D";
 }

 function *bar() {
     yield "A";
     try {
         yield *foo();
     } catch (error) {
         console.log("error caught inside *bar(): ", error); 
     }
     yield "E";
     yield *baz();
     yield "G";
 }

 function *baz(){
     throw "F";
 }

let it = bar();
console.log("outside0: ", it.next().value);
console.log("outside1: ", it.next(1).value);
console.log("outside2: ", it.throw(2).value);
console.log("outside3: ", it.next(3).value);

try {
    console.log("outside4: ", it.next(4).value);
} catch (error) {
   console.log("error caught outside4", error);  
}

console.log("outside5: ", it.next(5).value);



