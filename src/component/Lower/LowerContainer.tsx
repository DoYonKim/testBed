import React, { Component } from 'react';
import styled from "styled-components";

import SelctorContainer from './SelectorContainer'
import ContentsListContainer from './ContentsListContainer'

class LowerContainer extends Component {
    render() {
        return (
            <LowerMainContainer>
                <SelctorContainer/>
                <ContentsListContainer/>
            </LowerMainContainer>
        );
    }
}

const LowerMainContainer = styled.div`
background-color: red;
display: flex;
flex-direction: row;
width: 100%;
height: 80%;
`;
export default LowerContainer;