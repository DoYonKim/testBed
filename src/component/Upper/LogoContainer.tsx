import React, { Component } from 'react';
import styled from "styled-components";
import logo from '../../../public/img/logo.png';

//Style
const imgStyle = {
    padding: ".375rem .75rem",
    borderRadius: ".25rem",
    margin: "0 auto"
  }

class UpperContainer extends Component {
    render() {
        return (
            <Logo>
                <img src= {logo} style ={imgStyle}/>
            </Logo>
        );
    }
}

const Logo = styled.div`
display: flex;
flex-direction: row;
height: 100%;
width: 20%;
text-align : center;
`;


export default UpperContainer;