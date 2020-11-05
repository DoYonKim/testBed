import React, { Component } from 'react';
import styled from "styled-components";
import logo from '../../../../../public/img/logo.png';

//Style
const imgStyle = {
    
  }
class UpperContainer extends Component {
    render() {
        return (
            <LogoOuterDiv>
                    <img src= {logo} style ={imgStyle}/>
            </LogoOuterDiv>
        );
    }
}

const LogoOuterDiv = styled.div`
    margin: 50px;
    display:flex;
    justify-content:center;
    align-items:center;

`;

export default UpperContainer;