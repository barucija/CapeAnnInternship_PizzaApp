import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import {toast} from 'react-toastify'
import './pizzaDetails.css'
import {getSinglePizza} from '../../features/pizzaSlice'
import StarRatings from 'react-star-ratings';
import {useSelector, useDispatch} from 'react-redux'


function PizzaDetails() {
    const {id} = useParams()
    const {pizza, isError, message} = useSelector((state)=>state.pizzas)
    const dispatch = useDispatch()
    const [activeTab, setActiveTab] = useState('description')
    const [quantity, setQuantity] = useState(1)
    const [ingridients, setIngridients] = useState([])
    const [price, setPrice] = useState(null)
    const [size, setSize] = useState('s');

    useEffect(()=>{

        if(isError){
            toast.error(message)
          }

       dispatch(getSinglePizza(id))
       let ingrid = pizza.ingredients?.split(',')
       setIngridients(ingrid)
    }, [id, dispatch])

  return (
    <PizzaDetailsWrapper>
        <div>
            <StarRatings
                numberOfStars={5}
                rating={pizza.rating}
                starRatedColor="#f27121"
                />
            <h2> {pizza.name} </h2>
            <img src={pizza.picture} alt="" />
        </div>

        <Info>
        <Button className={activeTab === 'description' ? 'active' : '' } onClick={ () => setActiveTab('description')} >Description</Button>
        <Button className={activeTab === 'ingridients' ? 'active' : '' } onClick={ () => setActiveTab('ingridients')} >Ingridients</Button>
            <div>
                {activeTab === 'description' && (
                    <h4 className='description'>{pizza.description}</h4> 
                )}
                {activeTab === 'ingridients' && (
                    <ul>
                        {ingridients && ingridients.map((ingridient, i)=>(
                            <li key={i} > <h4>{ingridient}</h4>  </li>
                        )) }
                    </ul>
                )}
            </div>



            <div className="size-config">
            <h4>Size</h4>

            <div className="pizza-size-choose">
                <Button className={size === 's' ? 'active' : '' } onClick={() => (setSize('s'), setPrice(pizza.price))}>S</Button>
                <Button className={size === 'm' ? 'active' : '' } onClick={() => (setSize('m'), setPrice(pizza.price * 1.25))}>M</Button>
                <Button className={size === 'l' ? 'active' : '' } onClick={() =>  (setSize('l'), setPrice(pizza.price * 1.5))}>L</Button>
            </div>
            </div>

            <div className="price-config">
            <h4>Price: <span>${price ? (Math.round((price) * 100) / 100) * quantity  : (Math.round((pizza.price) * 100) / 100) *quantity }  </span> </h4>
            </div>

            <form>
          <input 
          min={1} 
          max={5} 
          className='quanity' 
          type="number" 
          id='quantity' 
          name='quanity' 
          value={quantity} 
          onChange={(e)=>(setQuantity(e.target.value))} 
          />
          <button className='btn' type='submit' >Add to card</button>
        </form>

        </Info>
    </PizzaDetailsWrapper>
  )
}

const PizzaDetailsWrapper = styled.div`
        margin-top: 10rem;
        margin-bottom: 5rem;
        display: flex;
        
        .active{
        background: linear-gradient(to right, #f27121, #C97642);
        color: white;
        }

        h2{
            margin-top: 2rem;
        }

       
        img{
            width: 500px;
            height: 500px;
            border-radius: 2rem;
            margin-top: 2rem;
        }

        ul{
            margin-left: 55%;
            list-style-type: none;
         }

         li{
            line-height: 2;
            color: white;
            font-size: 1.2rem;
            text-transform: capitalize;

         }
`


const Info = styled.div`
        margin-left: 10rem;

        .description{
            line-height: 2rem;
        }

        form{
            display: flex;
            gap:1rem;
            margin-top: 2rem;
        }

        form input{
            width: 5rem; 
            padding:0.5rem;
            margin-top: 1rem;
            border-radius: .5rem;
            font-size: 1.8rem;
            color:var(--black);
         }
        
         form .btn{
            display: block;
            width: 200px;
            margin-top: 1rem;
            border-radius: 0.5rem;
            color: white;
            background-color: #C97642;
            cursor: pointer;
            text-transform: capitalize;
            text-align: center;
         }

        

`

const Button = styled.button`
        padding: 1rem 2rem;
        color: white;
        background: linear-gradient(35deg, #494949, #313131);
        margin-right: 2rem;
        font-weight: 600;
        margin-bottom: 2rem;
        cursor: pointer;

`

export default PizzaDetails