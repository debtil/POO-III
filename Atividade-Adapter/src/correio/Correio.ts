import Icorreio from "./Icorreio";

export default class Correio implements Icorreio{
    sendCorreios(): void {
        console.log("\nEnviando encomenda pelos correios!");
    }
    receiveCorreios(): void {
        console.log("\nRecebendo encomenda pelos correios!");
    }

}