import React from 'react';
import styled from "styled-components";

interface itemProps {
    
    locaton: string,
    pics: string,
    comments: string,
}

interface itemState {}


class ContentsListItem extends React.Component<itemProps, itemState> {

    render() {

        const location = this.props.locaton;
        const pics = this.props.pics;
        const comments = this.props.comments;

        return (
            <Item>
                <p>{location}</p>
                <p>{pics}</p>
                <p>{comments}</p>
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