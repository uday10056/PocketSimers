import { React, Component } from 'react';

class CounterControl extends Component {
    render() {
        return (
            <button onClick={this.props.clickHandler} >{this.props.name}</button>
        )
    }
}

export default CounterControl;