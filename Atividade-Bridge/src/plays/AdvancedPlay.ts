import IConsole from "../consoles/IConsole";
import Play from "./Play";

export default class AdvancedPlay extends Play{
    constructor(consol: IConsole){
        super(consol);
    }
    challenge(): void{
        console.log("Desafio aceito, novo modo liberado\n");
    }
}