import IConsole from "./consoles/IConsole";
import PlayStation from "./consoles/PlayStation";
import Xbox from "./consoles/Xbox";
import AdvancedPlay from "./plays/AdvancedPlay";
import Play from "./plays/Play";

function startConsole(consol: IConsole){
    console.log("\nAguarde...");
    const jogo = new Play(consol);
    jogo.playing();
    jogo.result();
}

startConsole(new Xbox());
startConsole(new PlayStation());

function startAdvancedPlay(consol: IConsole){
    console.log("\nAguarde...");
    const jogo = new AdvancedPlay(consol);
    jogo.playing();
    jogo.result();
    jogo.challenge();
}

startAdvancedPlay(new Xbox());
startAdvancedPlay(new PlayStation());