import React from 'react';

interface LeftMenuBar_item_Props {
    menuName: string
}

interface LeftMenuBar_item_State {
    count: number
}

class LeftMenuBar_item extends React.Component<LeftMenuBar_item_Props, LeftMenuBar_item_State> {

    constructor(props: LeftMenuBar_item_Props) {
        super(props)
        this.state = {
            count: 0,
        }
    }

    render() {

        const { menuName } = this.props;

        return (
            <div>
                <p>{menuName}</p>
            </div>
        );
    }
}

export default LeftMenuBar_item;