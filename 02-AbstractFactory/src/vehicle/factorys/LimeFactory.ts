import Drone from "../aereo/Drone";
import IAircraft from "../aereo/interfaces/IAircraft";
import ILandVehicle from "../land/interfaces/ILandVehicle";
import Scooter from "../land/Scooter";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class LimeTransportFactory implements ITransportFactory{
    createTransportVehicle(): ILandVehicle {
        return new Scooter();
    }
    createTransportAircraft(): IAircraft {
        return new Drone();
    }

}