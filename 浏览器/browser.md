堆栈内存
存储数据和提供代码的执行环境
浏览器没打开一个页面,都会开辟一个进程，每个进行又可能有多个线程。
基本类型数据存储在栈内存中，引用类型数据存储在堆内存中。
heap 没有结构
stack 有结构的,有次序的
函数作用域消耗的栈内存
性能优化
堆栈内存
堆内存回收
1. 标记清除 /每隔一堆时间执行一次
2. 引用计数 // 循环引用

标记清楚
1. 给每个空间地址打上标记
2. 筛选过滤环境的变量或者被引用的变量的去除标记
3. 有标记的视为即将要删除的变量
4. 浏览器对有标记的变量占用的空间进行回收,释放内存

内存泄漏
全局变量不能被回收
闭包
对象中存在DOM引用
未清除的定时器


函数定义
1. 开辟一块堆内存，对应一个引用的空间地址
2. 把函数体作为字符串存在堆中
3. 把函数的空间地址赋值给函数名

函数调用，会引发VOAO
函数VO
1. 上下文执行环境(栈内存)
2. 初始化作用域链
3. 创建变量函数
4. 初始化arguments并赋值
5. 对函数上下文中

```js
let total = 100;
function fn(){
    let total = 10;
    return function(){
        console.log(total);
    }
}

let f = fn();
f();
```
```js
 var num =1;
    var obj = {
        num : 2,
        fn : (function () {
            this.num *= 2;
            num +=3;
            var num =1;
            return function () {
                num +=2;
                this.num +=2
                console.log(++num);
            }
        })()
    };
    var f= obj.fn;
    f();
    obj.fn();
    console.log(window.num,obj.num);
```
