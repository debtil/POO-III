import IConsole from "../consoles/IConsole";
import IPlay from "./IPlay";


export default class Play implements IPlay{
    constructor(private consol: IConsole){}
    playing(): void {
        console.log("\nIniciando o jogo");
    }
    result(): void {
        console.log("\n---Jogo rodando---\n");    
    }

}