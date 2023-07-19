import axios from "axios"

const ENTREPRISE_URL = "http://localhost:8080/api/entreprise/";

class entrepriseservice {

    getEntreprise(){
        return axios.get(ENTREPRISE_URL);
    }

    createEntreprise(entreprise){
        return axios.post(ENTREPRISE_URL+'save',entreprise);
    }

    getEntrepriseId(entreprise){
        return axios.get(ENTREPRISE_URL + entreprise);
    }

    updateEntreprise(entrepriseId , entreprise){
        return axios.put(ENTREPRISE_URL + 'up/' + entrepriseId, entreprise);
    }

    deleteEntreprise(entrepriseId){
        return axios.delete("http://localhost:8080/api/suppression/entreprise/"+ entrepriseId);
    }
}
const EntrepriseService = new entrepriseservice();
export default EntrepriseService;