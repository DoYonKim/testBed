import React, { Component } from 'react';
import styled from "styled-components";
import ContentsListItem from './ContentsListItem'

const h1Style = {
    margin: "0 auto",
}

class ContentsListContainer extends Component {
    render() {
        return (
            <ContentsList>
                <h1 style ={h1Style}>장소 목록</h1>
                <ContentsListItem/>
                <ContentsListItem/>
                <ContentsListItem/>
                <ContentsListItem/>
                <ContentsListItem/>
                <ContentsListItem/>
                <ContentsListItem/>
                <ContentsListItem/>
                <ContentsListItem/>
                <ContentsListItem/>
                <ContentsListItem/>
                <ContentsListItem/>
                <ContentsListItem/>
                <ContentsListItem/>
                <ContentsListItem/>
                <ContentsListItem/>
            </ContentsList>
        );
    }
}

const ContentsList = styled.div`
background-color: yellow;
display: flex;
flex-direction: column;
width: 70%;

flex-direction: column;
flex-wrap: nowrap;
overflow: auto;
`;
export default ContentsListContainer;