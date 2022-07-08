import Idrink from "./interfaces/Idrink";

export default class Beer implements Idrink{
    startDelivery(): void {
        console.log("Cerveja saindo para entrega!");
    }
}