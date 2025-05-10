/* eslint-disable no-unused-vars */
//Knight ou Sorcerer
//LittleMonster ou BigMonster

class Character  {
  _life = 1;
  maxLife = 1;
  attack = 0;
  defense = 0;

  constructor(name){
    this.name = name;
  }

  get life(){
    return this._life;
  }

  set life(newLife){
    this._life = newLife < 0 ? 0: newLife;
  }
}

class Knight extends Character {
  constructor(name){
    super(name);
    this.life = 100;
    this.attack = 10;
    this.defense = 8;
    this.maxLife = this.life;

  }
}

class Sorcerer extends Character {
  constructor(name){
    super(name);
    this.life = 80;
    this.attack = 15;
    this.defense = 3;
    this.maxLife = this.life;
  }
}


class LittleMonster extends Character {
  constructor(){
    super('Little Monster');
    this.life = 40;
    this.attack = 4;
    this.defense = 4;
    this.maxLife = this.life;
  }
}

class BigMonster extends Character {
  constructor(){
    super('Big Monster');
    this.life = 120;
    this.attack = 16;
    this.defense = 6;
    this.maxLife = this.life;
  }
}

class Stage {
  constructor(fighter1, fighter2, f1element, f2element, logObject){
    this.fighter1 = fighter1;
    this.fighter2 = fighter2;
    this.f1element = f1element;
    this.f2element = f2element;
    this.log = logObject;

  }

  start(){
    this.update();
    // TODO: Evento botao de atacar;

    this.f1element.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));
    this.f2element.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1))
  }

  update(){
    // Fighter 1
    this.f1element.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life} HP`;
    let f1percent = (this.fighter1.life / this.fighter1.maxLife)* 100;
    this.f1element.querySelector('.bar').style.width = `${f1percent}%`;


    // Fighter 2
    this.f2element.querySelector('.name').innerHTML =  `${this.fighter2.name} - ${this.fighter2.life} HP`;
    let f2percent = (this.fighter2.life / this.fighter2.maxLife)* 100;
    this.f2element.querySelector('.bar').style.width = `${f2percent}%`;
    
  }

  doAttack(attacking, attacked){
    if(attacking.life <= 0 || attacked.life <= 0){
      this.log.addMessage("Atacando cachorro morto.");
      return;
    }

    let attackFactor = (Math.random() *2).toFixed(2);
    let defenseFactor = (Math.random() *2).toFixed(2);

    let actualAttack = attacking.attack * attackFactor;
    let actualDefense = attacked.defense * defenseFactor;

    if(actualAttack > actualDefense){
      attacked.life -= actualAttack;
      this.log.addMessage(`${attacking.name} causo ${actualAttack} de dano`)
    }
    else {
      this.log.addMessage(`${attacked.name} conseguiu defender.`)
    }


    this.update()
  }
}

class Log {
  list = [];

  constructor(listElement){
    this.listElement = listElement;
  }

  addMessage(msg){
    this.list.push(msg);
    this.render();
  }

  render(){
    this.listElement.innerHTML = '';

    for(let i in this.list){
      this.listElement.innerHTML += `<li>${this.list[i]}</li>`
    }
  }
}