import Item from "./Interface/Item";

export default class Movie implements Item{
    start(): void{
        this.getDescription();
        console.log("Battle Royale com construção");
    }
    getDescription(): void{
        console.log("Fortnite");
    }
}