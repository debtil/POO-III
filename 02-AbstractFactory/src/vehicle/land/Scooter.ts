import ILandVehicle from "./interfaces/ILandVehicle";

export default class Scooter implements ILandVehicle{
    startRoute(): void {
        console.log("Patinete: iniciando rota");
    }
    getCargo(): void {
        console.log("Patinete: indo para o caminho");
    }

}