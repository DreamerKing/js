/*
//写法一：
function MyObject(name, message) {
	this.name = name.toString();
	this.message = message.toString();
	this.getName = function() {
		return this.name;
	};
	this.getMessage = function() {
		return this.message;
	};
}
*/

/*
// 写法二：
function MyObject(name, message) {
	this.name = name.toString();
	this.message = message.toString();
}

// 重新定义原型
MyObject.prototype = {
	getName: function() {
		return this.name;
	},
	getMessage: function() {
		return this.message;
	}
}
*/

function MyObject(name, message) {
	this.name = name.toString();
	this.message = message.toString();
}

MyObject.prototype.getName = function(){
	return this.name;
}

MyObject.prototype.getMessage = function() {
	return this.message;
}




var a = new MyObject("Dreamer", "Hello");
console.log(a.getName(), a.getMessage());
var b = new MyObject("Dreamer2", "Hello2");
console.log(b.getName(), b.getMessage());