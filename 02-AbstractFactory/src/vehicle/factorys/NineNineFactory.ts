import Helicopter from "../aereo/Helicopter";
import IAircraft from "../aereo/interfaces/IAircraft";
import ILandVehicle from "../land/interfaces/ILandVehicle";
import Motorcycle from "../land/Motorcycle";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class NineNineFactory implements ITransportFactory{
    createTransportVehicle(): ILandVehicle {
        return new Motorcycle();
    }
    createTransportAircraft(): IAircraft {
        return new Helicopter();
    }

}