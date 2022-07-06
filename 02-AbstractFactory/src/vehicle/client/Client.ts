import ITransportFactory from "../factorys/interfaces/ITransportFactory";
import ILandVehicle from "../land/interfaces/ILandVehicle";
import ILandAircraft from "../aereo/interfaces/IAircraft";
import Type from "../consts/Type";

export default class Client{
    private vehicle: ILandVehicle;
    private aircraft: ILandAircraft;

    constructor (factory : ITransportFactory, type : string){
        if(type === Type.Aerial){
            this.vehicle = factory.createTransportAircraft();
        }else if(type === Type.Land){
            this.vehicle = factory.createTransportVehicle();
        }else{
            this.vehicle = factory.createTransportVehicle();
            this.aircraft = factory.createTransportAircraft();
        }
    }

    startRoute() : void{
        if(this.aircraft){
            this.aircraft.startRoute();
        }
        
        if(this.vehicle){
            this.vehicle.startRoute();
        }
    }
}