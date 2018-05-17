// 把回调包装成Promise
// 好处：
// 1. 可读性更好
//2. 返回结果可以加入任何Promise队列

const pfs = require("./package-file");

pfs.readFile("./race.js", "utf-8")
  .then(content => {
    console.log(content);
  })
