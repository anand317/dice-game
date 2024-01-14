import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';
import HeroSection from './Components/Hero';
import { Container } from './Components/styles.ts';
import ContactUsNavigation from './Components/ContactUs/ContactUsNavigation';
import ContactHeader from './Components/ContactHeader/ContactHeader';
import ContactForm from './Components/ContactForm/ContactForm';
import StartGame from './Components/StartGame/startgame';
import { useState } from 'react';
import PlayGame from './Components/StartGame/PlayGame';

function App() {

  const [isGameOn, setIsGameOn] =useState(true);

  const toggleGame = () =>{
    setIsGameOn((prev)=>!prev)
    
  }
  //const expenses = [{ id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14), }, { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) }, { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28), }, { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12), },];
  return (
    <Container>
      {isGameOn ? <StartGame toggle={toggleGame}/>: <PlayGame/>}
       




        
      {/* <ContactUsNavigation/>
      <ContactHeader/>
      <ContactForm/> */}
      {/* <Navigation/>
      <HeroSection/> */}
    </Container>
  );
}

export default App;
