// Definindo Classes (Padrão para objetos)
class Person {

  age = 0;

  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  setAge(newAge){
    if(typeof newAge == "number") {
      this.age = newAge;
    }
    else{
      console.log("[ERROR] - sao permitidos apenas números para a idade")
    }
  }

  Hello(){
    console.log(`Olá ${this.name} e tem ${this.age} anos de idade`);
  }
}

// Definindo instancias de Objetos
let pessoa1 = new Person("João Pedro", 7);
let pessoa2 = new Person("Maria Juana", 30);

// Alterando atributos de um objeto
pessoa1.age = 10;
pessoa2.setAge("OLa")

//Exibindo atributos
console.log(pessoa1.age);
console.log(pessoa2.name);

// Usando métodos de ação
pessoa1.Hello();
pessoa2.Hello();