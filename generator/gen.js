function * sayFullName(){
    let firstName = yield; //yield 没有发送任何值，调用next将返回undefined
    let lastName = yield;
    console.log(firstName, lastName);
}

let fullName = sayFullName();
let test = fullName.next(); // undefined 暂停
console.log(test);
fullName.next("King"); // 恢复执行，并用传入值替换yield, 暂停
fullName.next("Dreamer"); // 恢复执行，并用传入值替换第二个yield,执行之后的语句