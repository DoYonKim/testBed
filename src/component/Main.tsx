import React, { Component } from 'react';
import Counter from './Counter'
import LeftMenuBar from './LeftMenuBar'
class Main extends Component {
    render() {
        return (
            <div>
                <LeftMenuBar/>
                <h1>메인화면입니다.</h1>
                <h2>카운터 프로그램</h2>
                <Counter name="Wine알못" />
                <h3>카운터 프로그램 종료</h3>
            </div>
        );
    }
}

export default Main;