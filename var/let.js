{
    let a = 10;
    const b = 8;
    var c = 20; // var 声明的变量没有块作用域，会有变量提升
    // b = 12;  // const 声明的变量再次赋值会报错
    console.log(a,b, "innner");
}
console.log(c);
// console.log(a, b, "outter");  // let const 声明的变量支持块作用域，块外不能访问
let a = 23; // let 声明的变量不可被后面的同名变量或函数覆盖
function a() {
    return 30;
}
// var a = 20;
console.log(a);