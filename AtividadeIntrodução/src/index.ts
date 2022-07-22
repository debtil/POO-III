import Endereco from "./Endereco";
import Usuario from "./Usuario";
import { Sexo } from "./utils";

let endereco1 : Endereco = new Endereco("Rua batata", 1016, "Guarapuava", "Julio de Castilho", 544540);
let usuario1 : Usuario = new Usuario("Matheus", 8888, 9999, Sexo.masculino, endereco1);

console.log("\nNome do usuário: " + usuario1.nome + "\nCPF: " + usuario1.cpf + "\nRG: " + usuario1.rg + "\nSexo: " + usuario1.sexo);

let endereco2 : Endereco = new Endereco("Rua cebola", 2030, "Curitiba", "centro", 6565656);
let usuario2 : Usuario = new Usuario("Roberta", 6666, 7777, Sexo.indefinido, endereco2);

console.log("\nNome do usuário: " + usuario2.nome + "\nCPF: " + usuario2.cpf + "\nRG: " + usuario2.rg + "\nSexo: " + usuario2.sexo);