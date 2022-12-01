import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Cart from '../components/card/Cart'
import styled from 'styled-components';
import {motion} from 'framer-motion'
import {getAllPizzasByCategory, reset} from '../features/pizzaSlice'
import {useSelector, useDispatch} from 'react-redux'


function CategoryFilter() {

    const {pizzas, isSuccess} = useSelector((state)=>state.pizzas)
    const dispatch = useDispatch()
    const {cat} = useParams()

    useEffect(() =>{
        return () => {
            if(isSuccess){
                dispatch(reset())
            }
        }
    }, [isSuccess])

    useEffect(() => {
           dispatch(getAllPizzasByCategory(cat))
    }, [cat, pizzas])

  return (
    <>
    <Grid  
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
    >
        
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
    grid-gap: 3rem;
`

export default CategoryFilter