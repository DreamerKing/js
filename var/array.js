/*let [a,b,c] = [1,2,3,4];
console.log(a,b,c);*/

/*
let [a,[b,c]] = [1,[2,3],4];
console.log(a,b,c);
*/


/*let [,[,c]] = [1,[2,3],4];
console.log(c);*/

/*let [,[,...c]] = [1,[2,3,4]];
console.log(c);*/

/*let [x,y, ...z] = [1];
console.log(x,y,z);*/

/*let [a] = 1; // 如果右边不可遍历则报错
console.log(a);*/

/*
let [x,y,z] = new Set(['a','c','s']);
console.log(x,y,z);*/

/*
function* fibs() {
	let a = 0;
	let b = 1;
	while(true) {
		yield a;
		[a, b] = [b, a + b];
	}
}

let [a, b, c, d, e, f, g, h,i] = fibs();
console.log(a, b, c, d, e, f, g, h, i);

*/

/*let [foo = true, zoo] = [, 34]; // 默认值
console.log(foo, zoo);
*/

let [x=1,y=2] = [undefined, null];
console.log(x, y);
