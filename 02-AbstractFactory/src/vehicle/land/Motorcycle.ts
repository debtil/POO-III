import ILandVehicle from "./interfaces/ILandVehicle";

export default class Motorcycle implements ILandVehicle{
    startRoute(): void {
        console.log("Moto: iniciando rota");
    }
    getCargo(): void {
        console.log("Moto: passageiro embarcado!");
    }
}