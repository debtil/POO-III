import Client from "./food/client/Client";
import Company from "./food/consts/Company";
import IAiqFomeDelivery from "./food/factorys/IAiqFomeDelivery";
import IFoodDelivery from "./food/factorys/IFoodDelivery";
import IDeliveryFactory from "./food/factorys/interfaces/IDeliveryFactory";

const cCompany = Company.AIQFOME;
let factory : IDeliveryFactory;

switch (cCompany){
    case Company.AIQFOME:
        factory = new IAiqFomeDelivery();
        break;
    case Company.IFOOD:
        factory = new IFoodDelivery();
        break;
    default:
        console.log("Companhia não definida!");
}

const client = new Client(factory!);
client.startDelivery();