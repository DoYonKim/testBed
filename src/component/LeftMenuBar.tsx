import React, { Component } from 'react';
import LeftMenuBar_item from './LeftMenuBar_item';
class LeftMenuBar extends Component {
    render() {
        return (
            <div>
                <LeftMenuBar_item menuName ="메뉴1"/>
                <LeftMenuBar_item menuName ="메뉴2"/>
                <LeftMenuBar_item menuName ="메뉴3"/>
                <LeftMenuBar_item menuName ="메뉴4"/>
            </div>
        );
    }
}

export default LeftMenuBar;