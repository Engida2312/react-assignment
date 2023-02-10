import axios from "axios";

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});
const alldata = JSON.parse(localStorage.getItem("allListings"))

const showAllListings = async()=>{
    if(alldata){
        const response = window.localStorage.setItem("allListings", JSON.stringify(response.data))
        return response

    }else{
        const response = await api.get('/users')
        window.localStorage.setItem("allListings", JSON.stringify(response.data))
        return response.data
    }
}

const dashboardService ={   
    showAllListings,
}   

export default dashboardService