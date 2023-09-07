import axios from 'axios';
// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// window.axios.defaults.headers['crossDomain'] = true;
// window.axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",

})

export default {
    getPosts() {
        return api.get("/posts");
    }
}