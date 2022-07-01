import Game from "./Items/Game";
import Item from "./Items/Interface/Item";

export default class GameLocation extends Location{
    protected createItem(): Item{
        return new Game();
    }
}