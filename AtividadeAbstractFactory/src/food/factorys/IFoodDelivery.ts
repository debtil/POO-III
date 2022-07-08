import Beer from "../drink/beer";
import Idrink from "../drink/interfaces/Idrink";
import Hamburguer from "../fastfood/Hamburger";
import Ifood from "../fastfood/interfaces/Ifood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export default class IFoodDelivery implements IDeliveryFactory{
    createDeliveryFood(): Ifood {
        return new Hamburguer();
    }
    createDeliveryDrink(): Idrink {
        return new Beer();
    }

}