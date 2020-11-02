import React, { Component } from 'react';
import styled from "styled-components";

class DayScrollItem extends Component {
    render() {
        return (
            <Item>
                <p>Day 1</p>
                <p>10월 31일</p>
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

export default DayScrollItem;