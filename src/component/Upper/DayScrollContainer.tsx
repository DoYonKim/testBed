import React, { Component } from 'react';
import styled from "styled-components";
import DayScrollItem from "./DayScrollItem";

class UpperContainer extends Component {
    render() {
        return (
            <UpperMainContainer>
                <DayScrollItem/>
                <DayScrollItem/>
                <DayScrollItem/>
                <DayScrollItem/>
                <DayScrollItem/>
                <DayScrollItem/>
                <DayScrollItem/>
                <DayScrollItem/>
                <DayScrollItem/>
                <DayScrollItem/>
                <DayScrollItem/>
                <DayScrollItem/>
                <DayScrollItem/>
                <DayScrollItem/>
                <DayScrollItem/>
                <DayScrollItem/>
                <DayScrollItem/>
                <DayScrollItem/>
                <DayScrollItem/>
                <DayScrollItem/>
                <DayScrollItem/>
                <DayScrollItem/>
                <DayScrollItem/>
                <DayScrollItem/>
                <DayScrollItem/>
                <DayScrollItem/>
                <DayScrollItem/>
            </UpperMainContainer>
        );
    }
}

const UpperMainContainer = styled.div`
display: flex;
height: 100%;
width: 80%;

flex-direction: row;
flex-wrap: nowrap;
overflow: auto;
`;

export default UpperContainer;