import React, { Component } from 'react';
import styled from "styled-components";

class ContentsListItem extends Component {
    render() {
        return (
            <Item>
                <p>장소</p>
                <p>사진</p>
                <p>별점</p>
            </Item>
        );
    }
}

const Item = styled.div`
    margin: 10px;
    padding: 20px;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    background: #4584b1;
`;

export default ContentsListItem;