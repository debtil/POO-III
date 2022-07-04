import Airplane from "../aereo/Airplane";
import IAircraft from "../aereo/interfaces/IAircraft";
import Car from "../land/Car";
import ILandVehicle from "../land/interfaces/ILandVehicle";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class UberFactory implements ITransportFactory{
    createTransportVehicle(): ILandVehicle {
        return new Car();
    }
    createTransportAircraft(): IAircraft {
        return new Airplane();
    }

}