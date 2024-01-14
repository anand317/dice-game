import React from 'react'
import { MainContainer,SBButton } from './styles.ts'


const StartGame = ({toggle}) => {
  return (
    <MainContainer>
      <div>
       <img src={process.env.PUBLIC_URL + '/images/dices.png'} alt='dices'/>    
      </div>
      <div className='content'>
        <h1>Dice Game</h1>
        <SBButton onClick={toggle} >Play now</SBButton>
      </div>
             
    </MainContainer>
  )
}

export default StartGame