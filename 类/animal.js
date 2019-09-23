class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    
    run(speed){
        this.speed += speed;
        console.log(`${this.name} run with speed ${this.speed}`);
    }

    stop(){
        this.speed = 0;
        console.log(`${this.name} stoped`);
    }
}

// let animal = new Animal("An animal");
// console.log(animal.name, animal.speed);
// animal.run(3);
// console.log(animal.name, animal.speed);
// animal.stop();
// console.log(animal.name, animal.speed);

class Rabbit extends Animal {
    constructor(name) {
        super(name);
    }

    run(speed){
        super.run(speed);
        console.log("Rabbit runing");
    }
    
    hide(){
        console.log(`${this.name} hides!`);
    }
}

let rabbit = new Rabbit("Rabbit");

rabbit.run(6);
rabbit.hide();
console.log(rabbit.name, rabbit.speed);
rabbit.stop();
console.log(rabbit.name, rabbit.speed);



