import axios from "axios"

const BUG_URL = "http://localhost:8080/api/bug/";

class bugservice {

    getBug(){
        return axios.get(BUG_URL);
    }

    createBug(Bug){
        return axios.post(BUG_URL+"save", Bug);
    }

    getBugById(BugId){
        return axios.get(BUG_URL  + BugId);
    }

    updateBug(BugId, Bug){
        return axios.put(BUG_URL +"up/"+ BugId, Bug);
    }

    deleteBug(BugId){
        return axios.delete(BUG_URL + 'del/' + BugId);
    }
}
const BugService = new bugservice();
export default BugService;