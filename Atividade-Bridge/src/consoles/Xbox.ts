import IConsole from "./IConsole";

export default class Xbox implements IConsole{
    constructor(){
        this.configureGame();
        console.log("Xbox: Console ligado");
    }
    configureGame(): void {
        this.authToken();
        console.log("Xbox: Iniciando jogo");
    }
    authToken(): void {
        console.log("Xbox: Autenticando aplicação");
    }
}