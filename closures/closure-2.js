function makeFun() {
	var name = "DK";
	function showName() {
		console.log(name);
	}
	return showName;
}

var showName = makeFun();
showName("Hahaha");