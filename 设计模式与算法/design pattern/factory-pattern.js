function Student(name, birthday){
    this.name = name;
    this.birthday = birthday;
}

function factory(name, birthday) {
    // 对象构建逻辑
    return new Student(name, birthday);
}

let king = factory('king', "2017-12-09");
console.log(king);
