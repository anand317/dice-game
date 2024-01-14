import React from 'react'
import '../App.css';
import { Container, NavContainer,Nav,SCButton } from './styles.ts';
//import LogoImg from './../../public/images/brand_logo.png'

const Navigation = () => {
  return (
    <>
        <NavContainer>
        <div className="logo">
          <img src={process.env.PUBLIC_URL + '/images/brand_logo.png'} alt='logo'/>
        </div>
          <Nav>
            <ul>
              <li href="#">Menu</li>
              <li href="#">Location</li>
              <li href="#">About</li>
              <li href="#">Contact</li>
            </ul>
          </Nav>
        <SCButton>
          Login
        </SCButton>

      </NavContainer>
    </>
  )
}

export default Navigation