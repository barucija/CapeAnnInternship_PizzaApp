import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components';
import Cart from '../components/card/Cart'
import {searchPizza, reset} from '../features/pizzaSlice'
import { useDispatch, useSelector } from 'react-redux';

function Searched() {
    const {search} = useParams();
    const {pizzas, isSuccess} = useSelector((state)=>state.pizzas)
    const dispatch = useDispatch()
  
    
      
    useEffect(() =>{
        return () => {
            if(isSuccess){
                dispatch(reset())
            }
        }
    }, [dispatch, isSuccess])

    useEffect(() => {
           dispatch(searchPizza(search))
    }, [search, dispatch, pizzas])

  return (
    <>
        <Grid>
            
            {pizzas && 

                pizzas.map((pizza)=>(
                    <Cart key={pizza.id} pizza={pizza}>
                       
                    </Cart>
                ))
            
            }
        </Grid>
    </>
    
  )
}

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 350px));
gap:1.5rem;
align-items: flex-start;
justify-content: center;
`



export default Searched