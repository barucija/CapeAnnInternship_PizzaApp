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

import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

function Header() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
              <AccountCircleIcon
                onClick={handleClick}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}>
                </AccountCircleIcon>
                <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.51,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem>
              <Avatar /> Profile
            </MenuItem>
            <MenuItem>
              <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
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