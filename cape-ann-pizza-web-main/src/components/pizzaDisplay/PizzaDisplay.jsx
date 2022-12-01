import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import pizzaService from "../../features/pizzaService";
import { Link, useLocation } from "react-router-dom";
import './pizzaDisplay.css'

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';


import styled from 'styled-components'



// const PizzaDisplay = () => {
    
//     const [pizzas, setPizzas] = useState([]);

//     useEffect(()=>{
//         fetchPizzas();
//     }, []);

//     const fetchPizzas = () =>{
//         axios.get('http://localhost:5000/pizza').then((res) =>{
//             console.log(res.data.data);
//             setPizzas(res.data.data);
//             console.log(pizzas);
//         }).catch((err)=>{
//             console.log(err);
//         });
//     };

//     return (
//         <div>
//             <h1>Our pizzas</h1>
//             <div className='pizza-container'>
//                 {pizzas.map((pizza) => (
//                 <div className='box' key={pizza.id}>
//                     <Link to={`/pizza/${pizza.id}`}>
//                     <div className="price">$ <span> {pizza.price} </span> </div>
//                     <img src={pizza.picture_link} alt={pizza.name} />
//                     <div className="name"> {pizza.name} </div>
//                     </Link>
//                 </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// const  = () => {

// }

  
export default function PizzaDisplay() {

    const location = useLocation();
    const [pizzas, setPizzas] = useState([]);

    useEffect(()=>{
        fetchPizzas();
    }, [location]);

    function fetchPizzas(){
        console.log(location);

        switch(location.pathname){
            case '/category/all':
                axios.get('http://localhost:5000/pizza').then((res) =>{
                console.log(res.data.data);
                setPizzas(res.data.data);
                }).catch((err)=>{
                    console.log(err);
                });
                break;
            case '/category/Veg':
                axios.get('http://localhost:5000/pizza/category/1').then((res) =>{
                console.log(res.data.data);
                setPizzas(res.data.data);
                }).catch((err)=>{
                    console.log(err);
                });
                break;
            case '/category/Non-Veg':
                axios.get('http://localhost:5000/pizza/category/2').then((res) =>{
                console.log(res.data.data);
                setPizzas(res.data.data);
                }).catch((err)=>{
                    console.log(err);
                });
                break;
            default:
                axios.get('http://localhost:5000/pizza').then((res) =>{
                console.log(res.data.data);
                setPizzas(res.data.data);
                }).catch((err)=>{
                    console.log(err);
                });
                break;
        }

        if(location.pathname == '/category/all'){
            axios.get('http://localhost:5000/pizza').then((res) =>{
            console.log(res.data.data);
            setPizzas(res.data.data);
            }).catch((err)=>{
                console.log(err);
            });
        }
        console.log('all pizzas');
            
    };

    return (
        <div className='wholeCardListDiv'>
            <WholeGridCardList
            >
                {pizzas.map((pizza) => (
                        <Card className='listedCards'>
                        {/* <Card> */}
                            <Link to={`/pizza/${pizza.id}`} className='headerAndSubheaderCardList'>
                                <CardHeader
                                title={pizza.name}
                                subheader={pizza.description}
                                />
                            </Link>
                            <Link to={`/pizza/${pizza.id}`}>
                                <CardMedia
                                component="img"
                                height="194"
                                image={pizza.picture_link}
                                alt="Paella dish"
                                className="imageInCard"
                                />
                            </Link>
                            <CardContent>
                            <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            >
                            <Typography variant="body2" color="text.secondary" className='CardRating'>
                                {pizza.rating}
                                <div className="starIconCardList">
                                    <StarIcon></StarIcon>
                                </div>
                            </Typography>
                            <Typography variant="body2" color="text.secondary"  className='CardPrice'>
                                {pizza.price} KM
                            </Typography>
                            </Grid>
                            </CardContent>
                        </Card>
                ))};
            </WholeGridCardList>
        </div>
    );
}

const WholeGridCardList = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
// gap:1.5rem;
// align-items: flex-start;
justify-content: center;
margin-top: 4rem;
margin: 2% 5%;
`