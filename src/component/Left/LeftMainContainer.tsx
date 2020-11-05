import React, { Component } from 'react';
import styled from "styled-components";

import LogoContainer from './LeftSections/LogoSection/LogoContainer'
import CardTypeToggleContainer from './LeftSections/ToggleSection/CardTypeToggleContainer'

class LowerContainer extends Component {
    render() {
        return (
            <LowerMainContainer>
                <LogoContainer/>
                <CardTypeToggleContainer/>
            </LowerMainContainer>
        );
    }
}

const LowerMainContainer = styled.div`
background-color: red;
display: flex;
flex-direction: column;
width: 25%;
height: 100%;
`;
export default LowerContainer;