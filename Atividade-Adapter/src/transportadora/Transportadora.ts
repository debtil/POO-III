import Itransportadora from "./Itransportadora";

export default class Transportadora implements Itransportadora{
    send(): void {
        console.log("\nEnviando encomenda pela transportadora!");
    }
    receive(): void {
        console.log("\nRecebendo encomenda pela transportadora!");
    }

}