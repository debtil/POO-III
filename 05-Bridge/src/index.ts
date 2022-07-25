import Facebook from "./plataformas/Facebook";
import IPlatform from "./plataformas/IPlatform";
import Twitch from "./plataformas/Twitch";
import Youtube from "./plataformas/Youtube";
import AdvancedLive from "./transmissions/AdvancedLive";
import Live from "./transmissions/Live";

function startLive(platform: IPlatform){
    console.log("\nAguarde...");
    const live = new Live(platform);
    live.broadcasting();
    live.result();
}

//startLive(new Youtube());
//startLive(new Twitch());
//startLive(new Facebook());

function startAdvancedLive(platform: IPlatform){
    console.log("\nAguarde...");
    const live = new AdvancedLive(platform);
    live.broadcasting();
    live.result();
    live.subtitles();
    live.coments();
}

startAdvancedLive(new Youtube());
startAdvancedLive(new Twitch());
startAdvancedLive(new Facebook());