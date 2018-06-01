function init() {
	var name = "King";
	function displayName() {
		console.log(name); //可以访问父函数的变量
	}

	displayName();
}

init();