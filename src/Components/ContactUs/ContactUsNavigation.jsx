//import React from "react";

import React from 'react'
import { Container,LogoContainer,NavUl } from './styles.ts'

const ContactUsNavigation = () => {
  return (
    <Container>
      <LogoContainer>
        <img src={process.env.PUBLIC_URL + '/images/brand_logo.png'} alt='logo'/>
      </LogoContainer>
      <NavUl>
        <li>Home</li>
        <li>About</li>
        <li>Contact us</li>
      </NavUl>
    </Container>
  )
}

export default ContactUsNavigation