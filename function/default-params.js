/*
function log(x,y) {
	y = y || "World";
	console.log(x, y);
}

log("Hello", "World");
log("Hello");
log("Hello", ""); // 这时被不符合预期

*/

/*
function log(x,y) {
	if(typeof y === 'undefined') {
		y = "World";
	}
	console.log(x, y);
}

log("Hello", "World");
log("Hello");
log("Hello", ""); // 这时被不符合预期
log("hello", 0);
log("hello", undefined);

*/

/*
function log(x,y = "World") {
	console.log(x, y);
}

log("Hello", "World");
log("Hello");
log("Hello", ""); // 这时被不符合预期
log("hello", 0);
log("hello", undefined);

*/

/*function Point(x = 0, y = 0) {
	this.x = x;
	this.y = y;
}

const p = new Point();
console.log(p);
const p1 = new Point(1);
console.log(p1);
const p2 = new Point(1,2,3);
console.log(p2)
*/
 
/* 
//没有默认参数时,函数参数可以同名，同名参数最终取最后一个值
function foo(x,x,y) {
	console.log(x, x, y);
}

foo(1,2,3);
*/

/*
//有默认参数时,函数参数同名会报错
function foo(x,x,y =1) {
	console.log(x, x, y);
}

foo(1,2,3);
*/

/*
// 参数默认值是惰性求值的，也就是每次执行函数时重新计算默认参数表达式的值
let x = 99;
function foo(p = x + 1) {
	console.log(p);
} 

foo();
foo();

x = 100;
foo();
*/

/*
function foo({x, y = 5}) {
	console.log(x, y);
}

foo({});
foo({x: 1});
foo({x:1, y:3})
foo(); // 因为函数参数是一个对象,如果不传参则默认值为undefined,而undefined是不能解构的。
*/

/*
// 这种双重默认值写法值得推荐
function foo({x, y = 5} = {}) {
	console.log(x, y);
}

foo({});
foo({x: 1});
foo({x:1, y:3})
foo(); 
*/

/*
默认空对象会对具体设置了默认属性的对象进行解构赋值
function m1({x = 0, y = 0} = {}) {
	return [x,y];
}

console.log(m1());
console.log(m1({x:2}));
console.log(m1({y:2}));
console.log(m1({x:2, y:3}));
*/

/*
// 设置了具体的属性对象,不单独对具体默认的属性进行解构赋值
function m2({x , y } = {x:0, y:0}) {
	return [x,y];
}

console.log(m2());
console.log(m2({x:2}));
console.log(m2({y:2}));
console.log(m2({x:2, y:3}));
*/

/*
// 默认参数一般是尾参数, 非尾参数设置默认值无效，调用时不传参就会报错
function f(x =1, y) {
	return [x, y];
}

console.log(f());
console.log(f(2));
f(, 2);
f(undefined,1);
*/