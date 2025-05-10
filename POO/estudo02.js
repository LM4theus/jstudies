// Classe Pessoa
class Person {
  
  age = 0;
  
  //Metodo Construtor
  constructor(name, gender){
    this.name = name;
    this.gender = gender;

  }

  //Metodo de Exibição/ Olá
  hello(){
    console.log(`Olá ${this.name}, você tem ${this.age} anos de idade.`)
  }
}


// Conceito de Factory
function createPerson(name,gender,age){
  let person = new Person(name);
  person.age = age;
  person.gender = gender;

  return person;
}


//Instancia de Classe (objeto) por meio do Factory
let p1 = createPerson("Italo Vanderlan", "male", 15);

p1.hello()