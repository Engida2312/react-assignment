import axios from "axios";

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

const showAllListings = async()=>{
    const response = await api.get('/users')
    return response.data
}

const dashboardService ={   
    showAllListings,
}   

export default dashboardService