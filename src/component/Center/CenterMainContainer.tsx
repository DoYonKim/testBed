import React, { Component } from 'react';
import styled from "styled-components";

import DayScrollContainer from './CenterSections/SelectDaySection/DayScrollContainer';
import ContentsListContainer from './CenterSections/CardSection/ContentsListContainer';

class UpperContainer extends Component {
    render() {
        return (
            <UpperMainContainer>
                <DayScrollContainer/>
                <ContentsListContainer/>
            </UpperMainContainer>
        );
    }
}

const UpperMainContainer = styled.div`
display: flex;
flex-direction: column;
height: 100%;
width: 100%;
`;

export default UpperContainer;