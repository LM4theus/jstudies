class Human {
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    talk(){
        return `Hi my name is ${this.name}, I have ${this.age} years`
    }
};
const human1 = new Human("Ricardo", 30, "male");
const human2 = new Human("Silvana", 27, "female");
console.log(human1.talk());