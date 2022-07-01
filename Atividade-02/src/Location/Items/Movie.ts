import Item from "./Interface/Item";

export default class Movie implements Item{
    start(): void{
        this.getDescription();
        console.log("Zumbis no parque");
    }
    getDescription(): void{
        console.log("Filme de terror com zumbiz");
    }
}