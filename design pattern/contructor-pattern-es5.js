function Student(name, score){
    this.name = name;
    this.score = score;
    this.qulity = 100;
    this.info = function(){
        return `${this.name} ${this.score}`;
    }
}

let king = new Student("King", 90);
console.log(king.name, king.score);
