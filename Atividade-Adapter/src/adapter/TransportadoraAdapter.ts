import Icorreio from "../correio/Icorreio";
import Transportadora from "../transportadora/Transportadora";

export default class TransportadoraAdapter implements Icorreio{
    
    constructor(private transp: Transportadora){
        console.log("Adaptando transportadora nos correios!");
    }
    
    sendCorreios(): void {
        this.transp.send();
    }
    receiveCorreios(): void {
        this.transp.receive();
    }
}