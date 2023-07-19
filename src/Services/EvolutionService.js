import axios from "axios"

const EVOLUTION_URL = "http://localhost:8080/api/evolution/";

class evolutionservice {

    getEvolution(){
        return axios.get(EVOLUTION_URL);
    }

    createEvolution(Evolution){
        return axios.post(EVOLUTION_URL+"save", Evolution);
    }

    getEvolutionById(EvolutionId){
        return axios.get(EVOLUTION_URL  + EvolutionId);
    }

    updateEvolution(EvolutionId, Evolution){
        return axios.put(EVOLUTION_URL +"up/"+ EvolutionId, Evolution);
    }

    deleteEvolution(EvolutionId){
        return axios.delete(EVOLUTION_URL + 'del/' + EvolutionId);
    }
}
const EvolutionService = new evolutionservice();
export default EvolutionService;