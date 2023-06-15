import React, { Component } from 'react';

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
        setInterval(() => {
           this.newTime()
        }, 1000);
    }

    componentDidUpdate = () => {
        console.log('componentsDidUpdate called');
    }

    componentWillUnmount = () => {
        
    }

    render() {
        return (
            <div>
                <h2>{this.state.time.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Clock;