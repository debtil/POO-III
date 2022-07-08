import Ifood from "./interfaces/Ifood";

export default class HotDog implements Ifood{
    startDelivery(): void {
        console.log("HotDog saindo para entrega!");
    }
}