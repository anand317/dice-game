import React, { useState } from 'react'
import { Container,BoxNumber,BoxBody,BoxNumber1,BoxNumber2,NumbersContainer ,NumberContainer,TextContainer
        ,ScoreContainer,NumContainer,CubeContainer,CubeText,ResetBtn,RulesBox} from './styles.ts'

const PlayGame = () => {
    const [score, setScore] =useState(0);
    const [currentDice,setCurrentDice] =useState(1);
    const [error,setError] =useState()
    const [showRules,setShowRules] = useState('false');

    const rules="1. Select any number. 2. Click on dice image.    ";
 
    const generateRandomNumber=(min,max)=>{
        return Math.floor(Math.random() * (max - min) + min);
    };

    const roleDice = ()=>{

        if(!selectedNumber) {
            setError("You have not selected any number")
            return;
        };

        const randomNumber=generateRandomNumber(1,7);
        setCurrentDice((prev)=>randomNumber);
        console.log(currentDice);

        if(selectedNumber===randomNumber){
            setScore(prev=>prev+randomNumber)
        }
        else{
            setScore(prev=>prev-2);
        }
        setSelectedNumber('undefind');
        setError("");
    }

    const arrNum=[1,2,3,4,5,6,7];

    const [selectedNumber,setSelectedNumber] =useState();

    const handleReset = () =>{
        setScore(0);
    }

  return (
    <Container>
        <BoxNumber>
            <BoxNumber1>
                <NumContainer>{score}</NumContainer>
                <ScoreContainer>Total Score</ScoreContainer>
            </BoxNumber1>
            <BoxNumber2>
                <p>{error}</p>
                <NumbersContainer>
                    {arrNum.map((value,i)=>(
                        <NumberContainer isSelected={value=== selectedNumber} key={i} onClick={()=>setSelectedNumber(value)} >{value}</NumberContainer>

                    ))}
                    

                </NumbersContainer>
                <TextContainer>Select number</TextContainer>
            </BoxNumber2>
        </BoxNumber>
        <BoxBody>
            <CubeContainer>
                <div style={{cursor:'pointer'}} onClick={roleDice}>
                   <img src={process.env.PUBLIC_URL + '/images/cube.png'} alt='dices'/> 
                </div>
                <CubeText>Click on Dice to roll</CubeText>  
                <ResetBtn onClick={()=>setScore(0)}>Reset</ResetBtn> 
                <ResetBtn onClick={()=>setShowRules('true')}>Show Rules</ResetBtn> 

            </CubeContainer>

        </BoxBody> 
        { showRules? <RulesBox>{rules}</RulesBox>: ""}
            
    </Container>
  )
}

export default PlayGame