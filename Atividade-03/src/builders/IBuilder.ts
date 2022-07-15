import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";

export default interface IBuilder{
    reset();
    getSanduiche();
    setSanduicheType(value: SanduicheType);
    setBread(bread: Bread);
    setProtein(protein: Protein);
    setSalad(salad: Salad);
    addSauces(sauce: Sauce);
}