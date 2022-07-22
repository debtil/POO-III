import Item from "./Items/Interface/Item";
import Movie from "./Items/Movie";
import Location from "./Location";

export default class MovieLocation extends Location{
    protected createItem(): Item{
        return new Movie();
    }
}