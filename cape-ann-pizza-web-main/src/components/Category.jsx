import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import {TbPizza} from 'react-icons/tb'
import {IoPizzaOutline} from 'react-icons/io5'
import {GiFullPizza} from 'react-icons/gi'
import './Category.css'

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const options = ['U ponudi pronadjite...', 'Volite meso?', 'Vegetarijanac ste?'];

function Category() {
  return (
    <>
        {/* <List>

        <SLink to={'/category/all'} >
                    <GiFullPizza />
                    <h4>All</h4>
            </SLink>

            <SLink to={'/category/Veg'} >
                    <TbPizza />
                    <h4>Vegetarian</h4>
            </SLink>

            <SLink to={'/category/Non-Veg'} >
                <IoPizzaOutline />
                <h4>Non-Vegetarian</h4>
            </SLink>
        </List> */}
        <div className='wholeCategoryDiv'>
            <Grid>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '& > *': {
                        m: 1,
                        },
                    }}
                >
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        
                        <Link to={'/category/all'} className='categoryOptions'>
                            <Button>Svi proizvodi</Button>
                        </Link>
                        <Link to={'/category/Non-Veg'} className='categoryOptions'>
                            <Button>Volite meso?</Button>
                        </Link>
                        <Link to={'/category/Veg'} className='categoryOptions'>
                            <Button>Vegetarijanac ste?</Button>
                        </Link>
                    </ButtonGroup>
                </Box>
            </Grid>
        </div>
    </>
  )
}


const Grid = styled.div`
margin: 1% 5%;
margin-top: 3%;
text-align: right;
display: flex;
justify-content: flex-end;
`
const List = styled.div`
//         display: flex;
//         justify-content: center;
//         margin: 7rem 0rem;
// `

const Link = styled(NavLink)`
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// border-radius: 50%;
// margin-right: 2rem;
// text-decoration: none;
// background: linear-gradient(35deg, #494949, #313131);
// width: 8rem;
// height: 8rem;
// cursor: pointer;
// transform: scale(0.8);

// h4{
//     color: white;
//     font-size: 0.8rem
// }


// svg{
//     color: white;
//     font-size: 2rem;
//     margin-bottom: 0.5rem;
// }

// &.active{
//     background: linear-gradient(to right, #f27121, #C97642);

//     svg{
//         color: white;
//     }

//     h4{
//         color: white;
//     }
// }

// `

export default Category