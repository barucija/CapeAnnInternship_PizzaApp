import React from 'react'
import './footer.css'
import { BsFillTelephoneFill}from 'react-icons/bs'
import {IoLocationSharp} from 'react-icons/io5'
import {IoMdMail} from 'react-icons/io'
import {AiFillClockCircle} from 'react-icons/ai'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <>
    <div className='wholeFooterDiv'>

    <Grid>

    <div className="boxNew">
        <div className='headerFooter'>
        {/* <BsFillTelephoneFill  /> */}
        <p>O nama</p>
        </div>
        <div className="contentFooter">
        {/* <h3>Phone Number</h3>
        <p> +123 456 789 </p>
        <p> +987 654 321 </p> */}
            <div className='textFooter'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget augue nec lacus luctus placerat. Phasellus elementum nisl in lacinia pellentesque. Vestibulum tellus est, imperdiet in efficitur ut, commodo in neque.</p>
            </div>
        </div>
    </div>

    <div className="boxNew">
        <div className='headerFooter'>
        {/* <IoLocationSharp  /> */}
        <p>Informacije</p>
        </div>
        <div className="contentFooter">
            <div className="subHeaderFooter">
                Kontakt telefon:
            </div>
            <div className='textFooterLinks'>      	
                <a href="tel:38735257345" className='footerLinks'>+387 35 257 345</a>
            </div>

            <div className="subHeaderFooter">
                Adresa:
            </div>
            <div className='textFooterLinks'>      	
                <a href="https://goo.gl/maps/m8Zuk6ykfurempjD6" className='footerLinks'>Patriotske lige 10, Tuzla 75000</a>
            </div>
            
        {/* <h3>Our Location</h3>
        <p> Zmaja od Bosne bb </p> */}
        </div>
    </div>

    <div className="boxNew">
        <div className='headerFooter'>
        {/* <AiFillClockCircle  /> */}
        <p>Drustvene mreze</p>
        </div>
        <div className="contentFooter">
            <div className="subHeaderFooter">
            
            </div>
            <div className='iconsFooter'>
                <div className='iconsFooterFB'>
                    <FacebookIcon></FacebookIcon>
                </div>
                <div className='iconsFooterIG'>
                    <InstagramIcon></InstagramIcon>
                </div>
                <div className='iconsFooterLI'>
                    <LinkedInIcon></LinkedInIcon>
                </div>
            </div>
        {/* <h3>Opening Hours</h3>
        <p> 09:00 </p>
        <p> 21:00 </p> */}
        </div>
    </div>

    </Grid>

    <div className="credit">
        &copy; copyright 2022 by <span> Cape One Team in Zenica </span>, all rights reserved!
    </div>
    </div>
    </>
  )
}

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
gap:1.5rem;
align-items: flex-start;
justify-content: center;
margin-top: 5rem;
margin: 2% 5%;
`

export default Footer