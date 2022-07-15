import SanduicheBuilder from "./builders/SanduicheBuilder";
import Director from "./directors/Director";
import Sanduiche from "./products/Sanduiche";


const builder : SanduicheBuilder = new SanduicheBuilder();;
const director : Director = new Director(builder);

director.constructBonivoSacnduiche();
let bovino : Sanduiche  = builder.getSanduiche();
console.log("Fazendo o sanduiche");
console.log("Tipo: " + bovino.sanduicheType);
console.log("salada: " + bovino.salad);
console.log("proteina: " + bovino.protein);
console.log("Quantidade de temperos: " + bovino.sacuesTotal);

builder.reset();

director.constructFrangoSanduiche();
let frango : Sanduiche  = builder.getSanduiche();
console.log("\nFazendo o sanduiche");
console.log("Tipo: " + frango.sanduicheType);
console.log("salada: " + frango.salad);
console.log("proteina: " + frango.protein);
console.log("Quantidade de temperos: " + frango.sacuesTotal);

builder.reset();