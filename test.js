// 声明提升
/* 
var fn = function () {
    console.log('fn1');
}

function fn() {
    console.log('fn2');
}

fn(); // fn1
 */

/* 

// 函数声明优先于变量声明提升

var fn;

function fn() {
    console.log('fn2');
}

fn = function () {
    console.log('fn1');
}

*/
