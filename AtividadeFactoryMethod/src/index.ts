import GameLocation from "./Location/GameLocation";
import MovieLocation from "./Location/MovieLocation";
import Location from "./Location/Location";

declare var process;

let item : Location;

if(process.argv.includes("--filme")) {
    item = new MovieLocation();
}else if(process.argv.includes("--jogo")) {
    item = new GameLocation();
}else{
    console.log("Selecione um item para locação!");
}

if(item!){
    item.startLocation();
}