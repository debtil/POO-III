import IBuilder from "../builders/IBuilder";
import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";

export default class Director{
    constructor (private builder: IBuilder){}

    constructBonivoSacnduiche(){
        this.builder.setSanduicheType(SanduicheType.BOVINO);
        this.builder.setBread(Bread.INTEGRAL);
        this.builder.setSalad(Salad.TOMATE);
        this.builder.setProtein(Protein.P_banana);
        this.builder.addSauces(new Sauce(1));
    }

    constructFrangoSanduiche(){
        this.builder.setSanduicheType(SanduicheType.FRANGO);
        this.builder.setBread(Bread.AO_LEITE);
        this.builder.setSalad(Salad.ALFACE);
        this.builder.setProtein(Protein.P_abacate);
        this.builder.addSauces(new Sauce(1));
    }
}