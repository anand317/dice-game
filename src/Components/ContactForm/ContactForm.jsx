import React from 'react'
import {FormContainer,ButtonContainer,Form,FormController,InputField,LabelField} from './styles.ts'
import Button  from '../Button/Button'
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";

const ContactForm = () => {

const onViaCallClicked = () =>{
  console.log("I am clicked");
}

  return (
    <>
      <FormContainer>
          <ButtonContainer>
              <Button  isOutLine={false} name={"VIA SUPPORT CHAT"} icon={<MdMessage/>}></Button>
              <Button  isOutLine={false} name={"VIA CALL"} icon={<IoMdCall/>}></Button> 
              <Button  isOutLine={true} name={"VIA EMAIL FORM"} icon={<TfiEmail/>}></Button>        
          </ButtonContainer>               
      </FormContainer>
      <Form>
        <FormController>
          <label>Name</label>
          <InputField></InputField>
          
          <label>E-Mail</label>
          <InputField></InputField>

          <label>Text</label>
          
          <InputField></InputField>
        </FormController>
        
      </Form>
      <div style={{display:'flex', justifyContent:'center'}}>
          <Button  isOutLine={false} name={"Submit"} icon={<MdMessage/>}></Button>
      </div>
      <div>
            <img src="/public/images/Service 24_7-pana 1.svg" alt="lslsl"></img>
      </div>
      
      
    </>
  )
}

export default ContactForm