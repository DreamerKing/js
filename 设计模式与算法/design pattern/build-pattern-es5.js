// 构建者模式
function Student() {
}

function StudentBuilder(){
    this.student = new Student();
    this.build = function(){
        return this.student;
    }
}
StudentBuilder.prototype.setName = function (name) {
    this.student.name = name;
}

StudentBuilder.prototype.setAge = function (age) {
    if (age < 18) {
        throw new Error("未成年！");
    }
    this.student.age = age;
}

let builder = new StudentBuilder();
    builder.setName("King");
    builder.setAge(20);
let king = builder.build();
console.log(king);
