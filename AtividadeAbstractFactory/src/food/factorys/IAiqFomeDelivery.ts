import Idrink from "../drink/interfaces/Idrink";
import SoftDrink from "../drink/SoftDrink";
import HotDog from "../fastfood/HotDog";
import Ifood from "../fastfood/interfaces/Ifood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export default class IFoodDelivery implements IDeliveryFactory{
    createDeliveryFood(): Ifood {
        return new HotDog();
    }
    createDeliveryDrink(): Idrink {
        return new SoftDrink();
    }

}