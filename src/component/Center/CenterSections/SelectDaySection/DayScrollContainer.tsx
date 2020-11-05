import React, { Component } from 'react';
import styled from "styled-components";
import DayScrollItem from "./DayScrollItem";

class DayScrollContainer extends Component {
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
height: 200px;
width: 300%;
overflow: auto;

background-color: pink;
margin-top: 20px;
padding-left: 40px;
`;

export default DayScrollContainer;