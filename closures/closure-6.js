function showItem(item) {
	console.log(item);
}

function showArrayItem(arr) {
	var temps = [];
	var i, len = arr.length;
	for(i = 0; i < len; i++) {
		(function(item) {
			temps[i] = function() {
				showItem(item);
			};
		})(arr[i]);
	}
	return temps;
}

var a = ["A", "B", "C"];

var b = showArrayItem(a);
b[2]();