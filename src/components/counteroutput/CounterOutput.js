import { React, Component } from 'react';

class CounterOutput extends Component {
    render() {
        return (
            <h2>Counter {this.props.counter}</h2>
        );

    }
}

export default CounterOutput;