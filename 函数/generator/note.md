# 生成器函数

不会同时输出所有值序列，基于每次的请求生成值。
生成器可以挂起和恢复他们的执行状态。
不会阻塞主线程。
生成器函数的执行上下文在迭代器执行的过程中一直保存。

结合生成器和Promise能够使用同步风格的编码异步任务系列。