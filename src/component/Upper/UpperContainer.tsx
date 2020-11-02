import React, { Component } from 'react';
import styled from "styled-components";
import LogoContainer from "./LogoContainer";
import DayScrollContainer from "./DayScrollContainer"

class UpperContainer extends Component {
    render() {
        return (
            <UpperMainContainer>
                <LogoContainer/>
                <DayScrollContainer/>
            </UpperMainContainer>
        );
    }
}

const UpperMainContainer = styled.div`
display: flex;
flex-direction: row;
height: 20%;
width: 100%;
`;

export default UpperContainer;