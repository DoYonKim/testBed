import React, { Component } from 'react';
import styled from "styled-components";
import ContentsListItem from './ContentsListItem'

const h1Style = {
    margin: "0 auto",
}

interface ListProps {
}
interface ListState {
    username: string
}


class ContentsListContainer extends Component<ListProps, ListState> {

    constructor(props: ListProps){
        super(props);

        this.state = {
            username: ""
        }
    }

    componentDidMount() {

        fetch('api/group')
            .then(res=>res.json())
            .then(data=>this.setState({username:data.username}));
    }

    render() {
        return (
            <ContentsList>
                <h1 style ={h1Style}>{this.state.username ? `Hello ${this.state.username}` : 'Hello World'}</h1>
                <ContentsListItem locaton = "dd" pics= "dd" comments= "dd"/>
                <ContentsListItem locaton = "d2323" pics= "3213" comments= "31231"/>
                <ContentsListItem locaton = "dd" pics= "123123" comments= "d3123d"/>
                <ContentsListItem locaton = "dd11" pics= "d3222d" comments= "32323dd"/>

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