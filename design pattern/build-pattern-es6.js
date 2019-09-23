// 构建者模式
class Student {
}

class StudentBuilder {
    constructor() {
        this.student = new Student();
    }
    build() {
        return this.student;
    }

    setName(name) {
        this.student.name = name;
    }

    setAge(age) {
        if (age < 18) {
            throw new Error("未成年！");
        }
        this.student.age = age;
    }
}

let builder = new StudentBuilder();
builder.setName("King");
builder.setAge(20);
let king = builder.build();
console.log(king);
