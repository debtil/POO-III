import Carro from "./carro";

let uno : Carro = new Carro("FIAT", "tino");
console.log(uno.marca)
uno.marca = "Ferrari";
console.log(uno.marca)
uno.ligar()