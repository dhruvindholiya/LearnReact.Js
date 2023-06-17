import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: new Date()
        }
    }

    newTime = () => {
        this.setState({
            time: new Date()
        })
    }

    componentDidMount = () => {
        this.intervalId = setInterval(() => {
           this.newTime()
        }, 1000);
    }

    componentDidUpdate = () => {
        console.log('componentDidUpdate called');
    }

    componentWillUnmount = () => {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <div>
                <h2>{this.state.time.toLocaleTimeString()}</h2>
                <Button color="danger">Danger!</Button>
            </div>
        );
    }
}

export default Clock;
