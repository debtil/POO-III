import IAirplane from "./interfaces/IAircraft" 
export default class Airplane implements IAirplane{
    startRoute(): void {
        this.checkWInd();
        this.getCargo();
        console.log("Avião iniciando decolagem!");
    }
    getCargo(): void {
        console.log("Avião: passageiros a bordo!");
    }
    checkWInd(): void {
        console.log("Avião: ventos a 25km à norte");
    }
}