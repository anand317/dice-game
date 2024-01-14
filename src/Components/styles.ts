

import React from "react";
import styled from "styled-components";

export const Container = styled.div`
 padding:1em;
`

export const NavContainer=styled.nav`
    display:flex;
`

export const Nav=styled.nav`
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    margin: 0 auto;
    height: 70px;
    align-items: center;
`

export const SCButton = styled.button`
    all: unset;
    padding: 6px 16px;
    border: 1px solid;
    border-radius: 12px;
    background: red;
    height: 32px;
    color: white;
    font-weight: 500;
`