模块功能：
+ 定义接口，通过接口调用
+ 隐藏模块内部实现

模块模式 
对象、函数、闭包和立即执行函数
缺点：
+ 模块扩展无法共享模块内私有变量
+ 模块依赖关系很难管理


AMD/CommonJS/UMD

AMD
```js
define(module-name, [dependecies], function (deps){
    return { }
});
```
AMD模块优点：
+ 自动处理依赖关系
+ 异步加载模块,避免阻塞
+ 在同一文件中可以定义多个模块
+ 基于浏览器设计
  
CommnJS
每个文件为一个模块，模块同步加载。


