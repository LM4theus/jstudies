class Person {

    age = 0;

    constructor(name) {
        this.name = name;
    }

}

class Student extends Person {

    constructor(name, id) {
        super(name);
        this.id = id;
    }
}

let p1 = new Student('Lucas Matias', 1);
p1.age = 21

let p2 = new Student('Eduarda Martinele', 2);
p2.age = 19

console.log(`${p1.name} tem ${p1.age} anos e matrícula #${p1.id}`)
console.log(`${p2.name} tem ${p2.age} anos e matrícula #${p2.id}`)
