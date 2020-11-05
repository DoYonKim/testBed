import React, { Component } from 'react';
import styled from "styled-components";

import Counter from './Counter'
import LeftMenuBar from './LeftMenuBar'
import Map from './Map'

import CenterMainContainer from './Center/CenterMainContainer'
import LeftMainContainer from './Left/LeftMainContainer'

class Main extends Component {
    render() {
        return (
            <WholeContainer>
                {/* <LeftMenuBar/>
                <h1>메인화면입니다.</h1>
                <h2>카운터 프로그램</h2>
                <Counter name="Wine알못" />
                <h3>카운터 프로그램 종료</h3>
                <Map/>
                <h3>지도</h3> */}
                <LeftMainContainer/>
                <CenterMainContainer/>
            </WholeContainer>
        );
    }
}

const WholeContainer = styled.div`
display: flex;
flex-direction: row;
height: 100vh;
`;


export default Main;