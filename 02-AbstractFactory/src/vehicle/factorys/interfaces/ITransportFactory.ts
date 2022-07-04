import IAircraft from "../../aereo/interfaces/IAircraft";
import ILandVehicle from "../../land/interfaces/ILandVehicle";

export default interface ITransportFactory{
    createTransportVehicle() : ILandVehicle;
    createTransportAircraft() : IAircraft;
}