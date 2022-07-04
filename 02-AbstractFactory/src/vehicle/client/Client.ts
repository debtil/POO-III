import ITransportFactory from "../factorys/interfaces/ITransportFactory";
import ILandVehicle from "../land/interfaces/ILandVehicle";
import ILandAircraft from "../aereo/interfaces/IAircraft";

export default class Client{
    private vehicle: ILandVehicle;
    private aircraft: ILandAircraft;

    constructor (factory : ITransportFactory){
        this.vehicle = factory.createTransportVehicle();
        this.aircraft = factory.createTransportAircraft();
    }

    startRoute() : void{
        this.vehicle.startRoute();
        this.aircraft.startRoute();
    }
}