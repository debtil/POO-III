import Client from "./vehicle/client/Client";
import Company from "./vehicle/consts/Company";
import ITransportFactory from "./vehicle/factorys/interfaces/ITransportFactory";
import NineNineFactory from "./vehicle/factorys/NineNineFactory";
import UberFactory from "./vehicle/factorys/UberFactory";

const currentCompany = Company.UBER;
let factory : ITransportFactory

switch (currentCompany) {
    case Company.UBER:
        factory = new UberFactory();
        break;
    case Company.NINENINE:
        factory = new NineNineFactory();
        break;
    default :
    console.log("Companhia não definida");
}

const client = new Client(factory!);
client.startRoute();

// lime cria drone e scooter