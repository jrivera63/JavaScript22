class Dog {
    constructor(name, breed, color, tailLength) {
        this.name = name;
        this.breed = breed;
        this.color = color;
        this.tailLength = tailLength;
    }

    dogStats(){
        return `This dog's name is ${this.name}, it is a ${this.breed}, has ${this.color} fur, and has a ${this.tailLength} tail!`
    }
}

const scooby = new Dog("Scooby", 'Great Dane', 'brown', "long");
document.getElementById("dog1").innerHTML = scooby.dogStats();

const zoey = new Dog("Zoey", 'Chihuahua', 'brown', "medium");
document.getElementById("dog2").innerHTML = zoey.dogStats();

const cody = new Dog("Cody", 'Black Lab', 'black', "short");
document.getElementById("dog3").innerHTML = cody.dogStats();

const dexter = new Dog("Dexter", 'Beagle', 'brown', "long");
document.getElementById("dog4").innerHTML = dexter.dogStats();


// console.log(scooby);
// console.log(scooby.dogStats());