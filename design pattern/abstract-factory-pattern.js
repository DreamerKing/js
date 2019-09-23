function Student(name,age){
    this.name = name;
    this.age = age;
}

function studentFactory(name, age){
    return new Student(name, age);
}

function teacherFactory(name){
    return new Teacher(name);
}


function Teacher(name) {
    this.name = name;
}

function producer(factory) {
    switch (factory) {
        case 'student':
            return studentFactory;
        case 'teacher':
            return teacherFactory;
        default:
            throw new Error("No factory");
    }
}

let s = producer('student')("King", 21);
let t = producer('teacher')("DK");
console.log(s);
console.log(t);



