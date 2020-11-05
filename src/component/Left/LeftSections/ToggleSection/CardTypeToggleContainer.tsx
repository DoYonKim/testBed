import React, { Component } from 'react';
import styled from "styled-components";

class SelectorContainer extends Component {
    render() {
        return (
            <SelectorList>
                <button>버튼1</button>
                <button>버튼1</button>
                <button>버튼1</button>
                <button>버튼1</button>
                <button>버튼1</button>
            </SelectorList>
        );
    }
}

const SelectorList = styled.div`
background-color: red;
display: flex;
flex-direction: column;
width: 30%;
`;
export default SelectorContainer;