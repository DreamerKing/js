/*
var  a = 12;
function b() {
    return 23;
}

function b() { // 同名函数后面声明的函数会覆盖前面的函数
    return 100;
}

{
    var a = 23; // 后声明的变量会覆盖之前声明的变量
}
console.log(a, b());

var b = 80;  // 变量会覆盖函数
function b() {
    return 90;
}
console.log(b());
*/

function show() {
	a = "Hello";
	console.log(a);
}

show();


// var a;

// 声明变量
// 变量初始化  变量初始化语句可以写在变量声明之前，这是因为变量声明通常是在代码执行之前完成,也就是所谓的变量提升。
// 更新变量
