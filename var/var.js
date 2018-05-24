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