import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import pizzaService from './pizzaService'

const initialState = {
    pizzas: [],
    pizza: {},
    isError: false,
    isSuccess: false,
    message: ''
}

//GET PIZZAS BY CATEGORY
export const getAllPizzasByCategory = createAsyncThunk(
    'category', 
    async (category, thunkAPI) => {
        try {
            return await pizzaService.getPizzasByCategory(category);
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data. message) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

//GET SINGLE PIZZA
export const getSinglePizza = createAsyncThunk(
    'pizza',
    async(pizzaId, thunkAPI) => {
        try {
            return await pizzaService.getSinglePizza(pizzaId);
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data. message) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

//CREATE NEW PIZZA
export const createPizza = createAsyncThunk(
    'addPizza',
    async (pizzaData, thunkAPI) =>{
        try {
            return pizzaService.createPizza(pizzaData);
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data. message) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// SEARCH PIZZA
export const searchPizza = createAsyncThunk(
    'search',
    async (term, thunkAPI) => {
        try {
            return pizzaService.searchPizza(term);
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data. message) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

//DELETE PIZZA
export const deletePizza = createAsyncThunk(
    'pizza/:id',
    async (id, thunkAPI) => {
        try {
            return pizzaService.deletePizza(id);
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data. message) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

//UPDATE PIZZA
export const updatePizza = createAsyncThunk(
    'update',
    async (pizzaData, thunkAPI) => {
        try {
            return pizzaService.updatePizza(pizzaData)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data. message) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const pizzaSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) =>{
        builder
        .addCase(createPizza.fulfilled, (state)=>{
            state.isSuccess = true
            state.isError = false
        })
         .addCase(createPizza.rejected, (state, action) => {
            state.isError = true
            state.message = action.payload
         })
        .addCase(getAllPizzasByCategory.fulfilled, (state, action) => {
            state.isSuccess = true
            state.pizzas = action.payload
        })
        .addCase(getAllPizzasByCategory.rejected, (state, action) => {
            state.isError = true
            state.message = action.payload
        })
        .addCase(getSinglePizza.fulfilled, (state, action) => {
            state.isSuccess = true
            state.pizza = action.payload
        })
        .addCase(getSinglePizza.rejected, (state, action) => {
            state.isError = true
            state.message = action.payload
        })
        .addCase(searchPizza.fulfilled, (state, action) => {
            state.isSuccess = true
            state.pizzas = action.payload
        })
        .addCase(searchPizza.rejected, (state, action) => {
            state.isError = true
            state.message = action.payload
        })
        .addCase(deletePizza.fulfilled, (state, action) => {
            state.isSuccess = true
            state.pizzas.map((pizza) => pizza.id !== action.payload.id)
        })
        .addCase(deletePizza.rejected, (state, action) => {
            state.isError = true
            state.message = action.payload
        })
        .addCase(updatePizza.fulfilled, (state, action) => {
            state.isSuccess = true
            state.pizza = action.payload
        })
        .addCase(updatePizza.rejected, (state, action) => {
            state.isError = true
            state.message = action.payload
        })
        
       
    }
})

export const {reset} = pizzaSlice.actions


export default pizzaSlice.reducer