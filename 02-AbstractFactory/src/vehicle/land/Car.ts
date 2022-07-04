import ILandVehicle from "./interfaces/ILandVehicle";

export default class Car implements ILandVehicle{
    startRoute(): void {
        console.log("Carro: iniciando rota");
    }
    getCargo(): void {
        console.log("Carro: passageiros embarcados!");
    }

}