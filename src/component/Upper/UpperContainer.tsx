import React, { Component } from 'react';
import styled from "styled-components";

class UpperContainer extends Component {
    render() {
        return (
            <UpperMainContainer>
                <button>버튼1</button>
                <button>버튼1</button>
                <button>버튼1</button>
                <button>버튼1</button>
                <button>버튼1</button>
            </UpperMainContainer>
        );
    }
}

const UpperMainContainer = styled.div`
background-color: green;
display: flex;
flex-direction: row;
height: 20%;
`;

export default UpperContainer;