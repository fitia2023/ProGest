import axios from "axios"

const ANNEE_URL = "http://localhost:8080/api/annee/";

class anneeservice {
    

    getAnnee(){
        return axios.get(ANNEE_URL);
    }

    createAnnee(Annee){
        return axios.post(ANNEE_URL+"save", Annee);
    }

    getAnneeById(AnneeId){
        return axios.get(ANNEE_URL  + AnneeId);
    }

    updateAnnee(AnneeId, Annee){
        return axios.put(ANNEE_URL +"up/"+ AnneeId, Annee);
    }

    deleteAnnee(AnneeId){
        return axios.delete(ANNEE_URL + 'del/' + AnneeId);
    }

    lookexist(ans,id_projet){
        return axios.get(ANNEE_URL+'look/'+ans+'/'+id_projet)
    }
}
const AnneeService = new anneeservice();
export default AnneeService;