import IConsole from "./IConsole";

export default class PlayStation implements IConsole{
    constructor(){
        this.configureGame();
        console.log("PlayStation: Console ligado");
    }
    configureGame(): void {
        this.authToken();
        console.log("PlayStation: Iniciando jogo");
    }
    authToken(): void {
        console.log("PlayStation: Autenticando aplicação");
    }
}