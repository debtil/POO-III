import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";

export default class Sanduiche{
    private _sanduicheType: SanduicheType;
    private _bread : Bread;
    private _sauces : Sauce[] = [];
    private _protein : Protein;
    private _salad : Salad;

    get sanduicheType(): SanduicheType{
        return this._sanduicheType;
    }

    set sanduicheType(value: SanduicheType){
        this._sanduicheType = value;
    }

    get bread (): Bread{
        return this._bread;
    }

    set bread(value: Bread){
        this._bread = value;
    }

    get protein(): Protein{
        return this._protein;
    }

    set protein(value: Protein){
        this._protein = value;
    }

    get salad(): Salad{
        return this._salad;
    }

    set salad(value: Salad){
        this._salad = value;
    }

    addSauce (sauce : Sauce){
        this._sauces.push(sauce);
    }

    get sauce(): Sauce []{
        return this._sauces;
    }

    get sacuesTotal(): number{
        return this._sauces.length;
    }
}