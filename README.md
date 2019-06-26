JavaScript是一种具有函数优先的**轻量级解释型**编程语言,它是一种基于**原型**编程、多范式的动态脚本语言，并且支持面向对象、命令式和声明式风格。

配置Babel
1. `@babel/core`
2. 配置`.bebalrc`
   1. presets  @babel/preset-env @babel/preset-react
   2. plugins

命令行 babel
 @babel/cli
 -o/--out-file 指定输出文件
 -d/--out-dir 指定输出目录
 -s 生成source map文件

支持REPL
babel-node
@babel/node

register
@babel/register 对require命令的改写 注意：它只对require的文件转码而不会对当前文件转码，并且是实时转码，只适合开发环境

polyfill
@babel/polyfill

Traceur