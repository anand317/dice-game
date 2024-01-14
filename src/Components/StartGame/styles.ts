import styled from 'styled-components'

export const MainContainer=styled.div`
    max-width:1180px;
    display: flex;
    height:100vh;
    margin:0 auto;
    align-items: center;

    .content {
        h1{
            font-size:96px;
            white-space:nowrap;
        }
    }
`



export const SBButton=styled.button`
    background-color:black;
    flex-direction:column;
    padding: 11px 18px;
    border-radius: 5px;
    min-width: 220px;
    /* display: flex; */
    align-items: center;
    border: none;
    cursor:pointer;

    &:hover{
        background: #383838;
    }


`

export const Container=styled.div`
    display: inline-flex;
    padding: 64px 80px 144px 80px;
    flex-direction: column;
    align-items: center;
    gap: 48px;
`

export const BoxNumber=styled.div`
    display: flex;
    align-items: center;
    gap: 593px;
`

export const BoxBody=styled.div`
    display: inline-flex;
    padding: 64px 80px 144px 80px;
    flex-direction: column;
    align-items: center;
    gap: 48px;
`
export const BoxNumber1=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
`

export const BoxNumber2=styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 30px;
`

export const NumbersContainer=styled.div`
    display: flex;
width: 72px;
height: 72px;
padding: 18px 25px 18px 31px;
justify-content: flex-end;
align-items: center;
gap:4px;
`

export const NumberContainer = styled.div`
    display: flex;
width: 72px;
height: 72px;
padding: 18px 26px 18px 31px;
justify-content: flex-end;
align-items: center;
border: 1px solid #000;
background: #FFF;
background-color:${(props)=> props.isSelected ? "black":"White"};
color:${(props)=> props.isSelected ? "White":"black"};
`

export const TextContainer= styled.div`
    color: #000;
font-family: Poppins;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
white-space:nowrap;
`

export const ScoreContainer=styled.div`
    display: flex;
flex-direction: column;
align-items: center;
gap: 3px;
`

export const NumContainer=styled.div`
    width: 62px;
height: 112px;
color: #000;
font-family: Poppins;
font-size: 100px;
font-style: normal;
font-weight: 500;
line-height: normal;
`

export const CubeContainer=styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 36px;
`

export const CubeText=styled.div`
color: #000;
font-family: Poppins;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: normal;
`
export const ResetBtn=styled.button`
display: flex;
width: 220px;
padding: 10px 18px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 5px;
border: 1px solid #000;
background: #FFF;
color:black;
cursor: pointer;
`

export const RulesBox=styled.div`
    display: inline-flex;
padding: 20px;
flex-direction: column;
align-items: flex-start;
gap: 24px;
background: #FBF1F1;
`