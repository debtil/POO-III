import IPlatform from "../plataformas/IPlatform";
import ITransmission from "./ITransmission";

export default class Live implements ITransmission{
    constructor(private platform: IPlatform){}
    broadcasting(): void {
        console.log("\nIniciando a transmissão");
    }
    result(): void {
        console.log("\n---Live no ar---\n");    
    }

}