import Item from "./Interface/Item";

export default class Movie implements Item{
    start(): void{
        this.getDescription();
        console.log("Filme de terror com zumbis");
    }
    getDescription(): void{
        console.log("Zumbis no parque");
    }
}