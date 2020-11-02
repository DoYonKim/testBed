import React, { Component } from 'react';
import styled from "styled-components";

class ContentsListContainer extends Component {
    render() {
        return (
            <ContentsList>
                <button>버튼1</button>
                <button>버튼1</button>
                <button>버튼1</button>
                <button>버튼1</button>
                <button>버튼1</button>
            </ContentsList>
        );
    }
}

const ContentsList = styled.div`
background-color: yellow;
display: flex;
flex-direction: column;
width: 70%;
`;
export default ContentsListContainer;