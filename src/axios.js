import axios from "axios";

const instance = axios.create({
    // API url (cloud function)
    baseURL: 'http://localhost:5001/clone-84264/us-central1/api'
});

export default instance;