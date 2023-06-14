import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    countPlus = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    countMinus = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <>
                <h2>Class based counter:</h2>
                <p>*This counter is with disabled.</p>
                <button onClick={this.countPlus} disabled={this.state.count > 4}>+</button>
                <span>{this.state.count}</span>
                <button onClick={this.countMinus} disabled={this.state.count === 0}>-</button>
            </>
        );
    }
}

export default Counter;