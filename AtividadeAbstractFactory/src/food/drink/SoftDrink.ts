import Idrink from "./interfaces/Idrink";

export default class Beer implements Idrink{
    startDelivery(): void {
        console.log("Suquinho de uva saindo para entrega!");
    }
}