function Ninja(){
    var feints = 0;
    this.getFeits = function(){
        return feints;
    };
    this.feint = function(){
        feints++;
    }
}

let n = new Ninja();
console.log(n.feints);
n.feint();
console.log(n.getFeits());


