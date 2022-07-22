import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";
import Sanduiche from "../products/Sanduiche";
import IBuilder from "./IBuilder";

export default class SanduicheBuilder implements IBuilder{
    
    private _sanduiche = new Sanduiche();

    reset() {
        this._sanduiche = new Sanduiche();
    }
    getSanduiche() {
        return this._sanduiche;
    }
    setSanduicheType(value: SanduicheType) {
        this._sanduiche.sanduicheType = value;
    }
    setBread(bread: Bread) {
        this._sanduiche.bread = bread;
    }
    setProtein(protein: Protein) {
        this._sanduiche.protein = protein;
    }
    setSalad(salad: Salad) {
        this._sanduiche.salad = salad;
    }
    addSauces(sauce: Sauce) {
        this._sanduiche.addSauce(sauce);
    }

}