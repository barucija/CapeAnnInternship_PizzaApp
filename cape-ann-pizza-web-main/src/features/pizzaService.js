import axios from 'axios'

const API_URL = 'localhost:5000'


//GET PIZZAS BY CATEGORY
const getPizzasByCategory = async (category) => {
    if(category === 'all'){
        const response = await axios.get(`${API_URL}/pizza`)
        console.log(await axios.get(`${API_URL}/pizza`))
        return response.data
    }else{
        const response = await axios.get(`${API_URL}/pizzaByCategory/${category}`)
        return response.data
    }
}


//GET SINGLE PIZZA
const getSinglePizza = async (pizzaId) =>{
    const response = await axios.get(`${API_URL}/${pizzaId}`)
        return response.data
}

// ADD NEW PIZZA
const createPizza = async (pizzaData) =>{
    const response = await axios.post(`${API_URL}`, pizzaData)
    return response.data
}


// SEARCH PIZZA
const searchPizza = async (term) => {
    const response = await axios.get(`/searchPizza/${term}`)
    return response.data
}

//DELETE PIZZA
const deletePizza = async (id) => {
    const response = await axios.delete(`/pizza/${id}`);
    return response.data;
}


//UPDATE PIZZA
const updatePizza = async (pizzaData) => {
    const response = await axios.put(`/pizza/${pizzaData.id}`, pizzaData)
    return response.data
}

const pizzaService = {
    getPizzasByCategory,
    getSinglePizza,
    createPizza,
    searchPizza,
    deletePizza,
    updatePizza
}


export default pizzaService