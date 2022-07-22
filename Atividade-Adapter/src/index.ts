import TransportadoraAdapter from "./adapter/TransportadoraAdapter";
import Icorreio from "./correio/Icorreio";
import Transportadora from "./transportadora/Transportadora";

const encomenda : Icorreio = new TransportadoraAdapter(new Transportadora);

encomenda.sendCorreios();
encomenda.receiveCorreios();


