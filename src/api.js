import axios from 'axios'



const ApiKey = '*';
const ApiKeySecret = '*';
const url = 'https://api.tvmaze.com/search/shows?q=star%20wars'
const api = axios.create({
    baseURL: url

})

 

export default api