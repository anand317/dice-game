import styled from 'styled-components'

export const FormContainer=styled.div`
    
    max-width:1000px;
    display:flex;
    gap:12px;
`
export const ButtonContainer=styled.div`
     display:flex;
     gap:32px;
`

export const Form=styled.form`
display:flex;
    gap:8px

`
export const FormController=styled.div`
    display:flex;
    flex-direction:column;
    width:802px;
    position:relative;
    gap:8px;

`

export const InputField= styled.input`
    height:40px;
    padding:0 8px;
`

export const LabelField = styled.label`
    position:absolute;
    padding: 0 8px;
    top: -11px;
    left: 10px;
    background: white;
`