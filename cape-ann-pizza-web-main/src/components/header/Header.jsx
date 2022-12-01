import React from 'react'
import {GiKnifeFork} from 'react-icons/gi'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import styled from 'styled-components'
import {CSSTransition} from 'react-transition-group'
import './header.css'
import Search from "../Search";
import appLogo from "./capeonepizzalogo.png";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
  return (
    <>
    <div className='wholeHeaderDiv'>
      <WholeGridHeader>
        <div className='header'>
          <div className="logo">
            <img src={appLogo} alt="" className='appLogoMain'/>
          </div>
          <div className='searchHeaderDiv'>
            <Search />
          </div>
          <div className='nav'>
              {/* <Link to={"/addPizza"}>Postavke računa</Link> */}
              <ShoppingCartIcon></ShoppingCartIcon>
              <AccountCircleIcon></AccountCircleIcon> 
          </div>
        </div>
      </WholeGridHeader>
    </div>
    </>
  )
}

export default Header

const WholeGridHeader = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
// gap:1.5rem;
// align-items: flex-start;
justify-content: center;

margin-right: 6%;
margin-left: 6%;
`

const Nav = styled.div`
//   padding: 4rem 0rem;
//   display: flex;
//   svg{
//     font-size: 2.5rem;
//     margin: 0.5rem;
//   }
//   color: white
// `