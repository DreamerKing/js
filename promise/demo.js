console.log("here we go");

/*doSomething().then(function (value) {
	console.log(value);
	return doSomethingElse();
}).then(value => {
	console.log(value);
});*/

/*doSomething().then(function (){
	doSomethingElse();
})*/

/*doSomething()
.then(doSomethingElse())
.then( value => {
	console.log(value);
});
*/

doSomething().then(doSomethingElse).then(value => console.log(value));


function doSomething() {
	console.log("doSomething");
	return new Promise(resolve => {
		setTimeout(() => {
			// console("step ...");
			resolve('Hello');
		}, 2000);
	})
}

function doSomethingElse(){
	setTimeout(() => {
		console.log("esle");
	}, 1000);
	return "else return";
}