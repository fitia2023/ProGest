import axios from "axios"

const PROJETS_URL = "http://localhost:8080/api/projet/";

class porjetsservice {

    getProjets(){
        return axios.get(PROJETS_URL);
    }

    createProjet(projet){
        return axios.post(PROJETS_URL+"save", projet);
    }

    getProjetById(projetId){
        return axios.get(PROJETS_URL  + projetId);
    }

    updateProjet(projetId, projet){
        return axios.put(PROJETS_URL +"up/"+ projetId, projet);
    }

    deleteProjet(projetId){
        return axios.delete("http://localhost:8080/api/suppression/projet/" + projetId);
    }
}
const ProjetsService = new porjetsservice();
export default ProjetsService;