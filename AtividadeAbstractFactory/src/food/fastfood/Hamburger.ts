import Ifood from "./interfaces/Ifood";

export default class Hamburguer implements Ifood{
    startDelivery(): void {
        console.log("Hamburguer saindo para entrega!");
    }
}