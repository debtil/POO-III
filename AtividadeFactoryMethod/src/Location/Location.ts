import Item from "./Items/Interface/Item";

export default abstract class Location{
    startLocation() : void{
        const item = this.createItem();
        item.start();
    }
    protected abstract createItem(): Item;
}