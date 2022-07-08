import Idrink from "../drink/interfaces/Idrink";
import IDeliveryFactory from "../factorys/interfaces/IDeliveryFactory";
import Ifood from "../fastfood/interfaces/Ifood";

export default class Client{
    private fastfood: Ifood;
    private drink : Idrink;

    constructor (factory : IDeliveryFactory){
        this.drink = factory.createDeliveryDrink();
        this.fastfood = factory.createDeliveryFood();
    }

    startDelivery(): void {
        this.fastfood.startDelivery();
        this.drink.startDelivery();
    }
}