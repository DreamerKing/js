回调函数惯例：
+ callback 的第一个参数是为了错误发生而保留的。一旦发生错误，callback(err) 就会被调用。（错误优先）
+ 第二个参数（如果有需要）用于成功的结果。此时 callback(null, result1, result2…) 将被调用。
因此单个 callback 函数可以同时具有报告错误以及传递返回结果的作用。