import IAirplane from "./interfaces/IAircraft" 

export default class Drone implements IAirplane{
    startRoute(): void {
        this.checkWInd();
        this.getCargo();
        console.log("Drone ligando");
    }
    getCargo(): void {
        console.log("Drone levantando voo");
    }
    checkWInd(): void {
        console.log("Vento à 20 km por hora");
    }

}