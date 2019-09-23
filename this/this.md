引用类型的值是三点的结合 (base, name, strict)，如下：
+ base 是对象。
+ name 是属性。
+ 当 use strict 生效，strict 为真。

箭头函数有些特别：`它们没有自己的this`。如果我们在这样的函数中引用 this，this 值取决于外部『正常的』函数。