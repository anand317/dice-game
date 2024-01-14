import React from 'react'
import { MdMessage } from "react-icons/md";
import {PrimaryBtn,OutlineBtn} from './Button.ts'

const Button = ({isOutLine,icon,name}) => {

  return (
    isOutLine ? <OutlineBtn>{icon}{name}</OutlineBtn> : <PrimaryBtn>{icon}{name}</PrimaryBtn>   
  )
}

export default Button