```js
let promise = new Promise(function(resolve, reject){});
```
promise内部属性：
+ state —— 最初是 “pending”，然后被改为 “fulfilled” 或 “rejected”，
+ result —— 一个任意值，最初是 undefined。
当 executor 完成任务时，应调用下列之一：
+ resolve(value) —— 说明任务已经完成：
    + 将 state 设置为 "fulfilled"，
    + sets result to value。
+ reject(error) —— 表明有错误发生：
    + 将 state 设置为 "rejected"，
    + 将 result 设置为 error。

API
+ resolve()
+ reject()
+ all()
+ allSettled()
+ race()

未处理的rejections在浏览器端可以监听`unhandledrejection`事件进行捕获