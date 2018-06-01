var Counter = (function() {
	var privateConter = 0;

	function changeBy(val) {
		privateConter += val;
	}

	return {
		increment: function() {
			changeBy(1);
		},
		decrement: function() {
			changeBy(-1);
		},
		value: privateConter, // 为什么属性值不会改变

		value2: function() {
			return privateConter;
		}
	}
})();

Counter.increment();
console.log(Counter.value);
console.log(Counter.value2());

Counter.increment();

console.log(Counter.value);
console.log(Counter.value2());

Counter.decrement();

console.log(Counter.value);
console.log(Counter.value2());
