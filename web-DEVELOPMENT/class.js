class Animal{
    constructor(name){
        this.name = name;
        console.log("Object is created......")
    }

    eats(){
        console.log(this.name+" eats food");
    }
    jumps(){
        console.log(this.name+" jumps");
    }
}

class Lion extends Animal{

}

let a=new Animal("Bunny");
console.log(a)

let l=new Lion("Simba");
console.log(l)