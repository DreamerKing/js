# 属性

1. prototype
2. constructor

# 方法

1. assign()
2. create()
3. defineProperties()
4. defineProperty()
5. entries()
6. fromEntries()
6. keys()
7. values()
8. hasOwnProperty()
10. isPrototyeOf()
11.
8. getOwnPropertyDescriptor()
9. getOwnPropertyDescriptors()
10. getPrototypeOf()
11. getOwnPropertyNames()
12. getOwnPropertySymbols() 获取对象上所有Symbol类型的键
13. is()
14. isExtensible()
15. isFrozen()
16. isSealed()
17. preventExtensions()
18.

Reflect.ownKeys(obj) 获取对象上所有的键

创建对象的方法

1. 构造函数形式
2. 字面量形式

对象的特点：

1. 可以访问任何属性，如果这个属性不存在也不会有错误；
2. 对象按引用存储复制

动态属性／计算属性 key为变量
保留字可以做属性名，但是不能是`__proto__`或`proto`

存在值检查

1. 访问不存在的属性会返回`undefined`
2. `in`操作符(可以检查值为`undefined`的属性)
3. 利用`for...in`循环

对象属性的顺序：整数属性有顺序，其他是按照创建的顺序
蒸熟属性是指一个字符串可以在不改变的情况下对整数进行转换。 Math.trunc(x) 数值或字符串去除小数点的方法

比较引用
对于对象`==`和`===`没有区别，只有当它们都指向同一对象时才相等。

常量对象其存储的始终是同一个对象的引用，但其对象属性是可以改变的。

对象的复制和合并 Object.assign()

1. 创建一个新的对象，遍历现有对象的属性，在原始值的状态下复制给新的对象。`for...in`
2. Object.assgin()

垃圾回收
JavaScript 中主要的内存管理概念是可达性。“可达”值是那些以某种方式可访问或可用的值。它们保证存储在内存中。

1. 下列出固有的可达值基本集合，这些值明显不能被释放。
    + 当前函数的局部变量和参数。
    + 嵌套调用时，当前调用链上所有函数的变量与参数。
    + 全局变量。
    +（还有一些内部的）
这些值被称作根。
2. 如果一个值可以通过引用或引用链，从根值访问到，则认为这个值是可达的。
在 JavaScript 引擎中有一个被称作垃圾回收器的东西在后台执行。它监控着所有对象的状态，并删除掉那些已经不可达的。

垃圾回收算法(mark-and-sweep)

+ 垃圾收集器找到所有的根，并“标记”（记住）它们。
+ 然后它遍历并"标记"来自它们的所有参考。
+ 然后它遍历到标记的对象并标记他们的引用。所有被遍历到的对象都会被记住，以免将来再次遍历到同一个对象。
+ …一直这样，直到有未访问的引用（从根访问到）。
+ 没有被标记的所有对象都被删除。
js引擎的一些优化点：
+ 分代收集
+ 增量收集
+ 闲时收集

1. 垃圾回收是自动完成的，我们不能强制执行或是阻止执行。
2. 当对象是可达状态时，它在内存中是可达的。
3. 被引用与可访问（从一个根）不同：一组相互连接的对象可能整体都无法访问。

对象的属性键只能是`String`类型或者`Symbol`类型

属性的标志
对象属性除 value 外还有三个特殊属性（所谓的“标志”）：

+ writable — 如果为 true，则可以修改，否则它是只读的。
+ enumerable — 如果是 true，则可在循环中列出，否则不列出。
+ configurable — 如果是 true，则此属性可以被删除，相应的特性也可以被修改，否则不可以。

Object.definedProperty(obj, propertyName, descriptor)
Object.definedProperties(obj,descriptors)
Object.getOwnPropertyDescriptor(obj, propertyName)
Object.getOwnPropertyDescriptors(obj);

Object.preventExtensions(obj) //禁止向对象添加属性
Object.seal(obj) // 禁止添加／删除属性
Object.freeze(obj) //禁止添加／删除／更改属性

Object.isExtensible(obj)
Object.isSealed(obj)
Object.isFrozen(obj)

对象属性分类：

1. 数据属性
2. 访问器属性 它们本质上是获取和设置值的函数，但从外部代码来看像常规属性。

Object.assign(target, orgin) //仅复制可枚举的属性(包括符号属性),原型上的属性不复制，只读属性会作为普通属性进行复制。
