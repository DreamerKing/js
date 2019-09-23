# 创建数组的方式
1. 字面量方式 `[]`
2. 构造函数 [new] Array()     
    注意：当传入一个整型参数是默认是制定数组大小。
属性
1. length 数组中元素个数(跟索引有关)，可修改， 清空数组的最好的方法是将lenght置为0。

# 数组方法
 + Array.isArray()

# 存取函数
+ indexOf() / lastIndexOf()
# 字符串表示
+ join()
+ toString()
# 创建新数组
+ concat()
+ slice()
+ splice()

# 栈／队列方法
+ push()
+ unshift()
+ pop()
+ shift()
+ splice()

# 排序
+ reverse()
+ sort()

# 迭代方法
+ forEach()
+ every()
+ some()
+ filter()
+ map()
+ reduce() / reduceRight()

数组的误用方式：
1. 添加非数值属性
2. 构造空洞
3. 倒序填充数组

JS引擎对数组的内部实现做了特殊的优化，尝试使元素存储在连续的内存区域，从而使数组运行的非常快，所有应该将数组做为有序数据结构来用。

数组的遍历
1. for
2. for..of 不能获取当前元素索引
3. for..in 会迭代所有属性，速度较慢(不建议使用)