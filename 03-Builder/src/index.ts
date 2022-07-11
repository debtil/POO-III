import VehicleBuilder from "./builders/VehicleBuilder";
import Director from "./directors/Director";
import Vehicle from "./products/Vehicle";

const builder : VehicleBuilder = new VehicleBuilder();;
const director : Director = new Director(builder);

director.constructSedanCar();
let sedan : Vehicle  = builder.getVehicle();
console.log("Criando um veículo");
console.log("Tipo: " + sedan.vehicleType);
console.log("Rodas: " + sedan.wheelsTotal);

director.constructTruck();
let truck : Vehicle  = builder.getVehicle();
console.log("\nCriando um veículo");
console.log("Tipo: " + truck.vehicleType);
console.log("Rodas: " + truck.wheelsTotal);