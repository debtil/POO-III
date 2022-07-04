import IAirplane from "./interfaces/IAircraft" 
export default class Helicopter implements IAirplane{
    startRoute(): void {
        this.checkWInd();
        this.getCargo();
        console.log("Helicóptero iniciando decolagem!");
    }
    getCargo(): void {
        console.log("Helicóptero: passageiros a bordo!");
    }
    checkWInd(): void {
        console.log("Helicóptero: ventos a 12km à norte");
    }
}