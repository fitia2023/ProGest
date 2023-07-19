import axios from "axios";


const PROJETS_URL ="http://localhost:8080/api/listviewprojet";

class porjetDTOservice {
    GetProjet(id_projet){
        return axios.get(PROJETS_URL+"/"+id_projet)
    }
}

const ProjetDTOService = new porjetDTOservice();

export default ProjetDTOService;