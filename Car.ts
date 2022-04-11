import Colors from "./Colors";
import Directions from "./Directions";
import Doors from "./Doors";

class Car {
  _make: string;
  _color: Colors;
  _doors: number;
  _velocity: number;
  _carIsOn: boolean;

  constructor(make: string, color: Colors, doors: number){
    this._make = make;
    this._color = color;
    this._doors = doors;
    this._velocity = 0;
    this._carIsOn = false;
  }

  honk(): void {
    console.log('Buzinando: Fó Fóo')
  }

  openTheDoor(door: Doors): void {
    console.log(`Abrindo a porta: ${door}.`)
  }

  closeTheDoor(door: Doors): void {
    console.log(`Fechando a porta: ${door}.`);
  }

  turnOn(): void {

    if(this._carIsOn) {
      return console.log('O carro já está ligado.');
    }

    console.log('Ligando o carro!');
  }

  turnOff(): void {

    if (!this._carIsOn) {
      return console.log('O carro já está desligado.');
    }

    while (this._velocity > 0) {
      this._velocity -= 1;
      console.log('O carro está muito rapido!! Reduzindo velocidade para desligar');
    }

    console.log('Desligando o carro!');
  }

  speedUp(): void {
    this._velocity += 1;
    console.log(`Acelerando o carro para velocidade ${this._velocity}`);
  }

  speedDown(): void {
    this._velocity -= 1;
    console.log(`Desacelerando o carro para a velocidade ${this._velocity}`);
  }

  stop(): void {

    while (this._velocity > 0) {
      this._velocity -= 1;
      console.log('Parando o carro.');
    }

    console.log('O carro parou.');
  }

  turn(direction: Directions): void {
    console.log(`Virando o carro para a ${direction}`)
  }
}


export default Car;