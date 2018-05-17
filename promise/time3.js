console.log("here we go");
new Promise(resolve => {
	setTimeout(() => {
		resolve('Hello');
	}, 2000);
})
.then( value => {
	console.log(value, " world");
	(function() {
		return new Promise(resolve => {
			setTimeout(() => {
				console.log("Mr. Luncy");
				resolve("Marry Tom");
			},2000);
		});
	}().then(value => {
		console.log(value,"test");
	}));
	//return false;
})
.then( value => {
	console.log("world ", value);	
});

// 如果then中不返回promise实例，则会继续执行后续的then

// .then() 接受两个函数作为参数，分别代表fullfilled和rejected
// .then() 返回一个新的Promise实例，所以它可以链式调用