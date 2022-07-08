import Idrink from "../../drink/interfaces/Idrink";
import Ifood from "../../fastfood/interfaces/Ifood";

export default interface IDeliveryFactory{
    createDeliveryDrink(): Idrink;
    createDeliveryFood(): Ifood;
}