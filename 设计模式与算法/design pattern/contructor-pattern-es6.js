
class Student {
    constructor(name, score) {
        this.name = name;
        this.score = score;
        this.qulity = 100;
        this.log = function(){
            console.log(this.qulity);
        }
    }
    // 这里的方法会在原型上
    info(){
        return `${this.name} ${this.score}`;
    }
}

let king = new Student("King", 90);
console.log(king.info());
console.log(king);
king.log();



