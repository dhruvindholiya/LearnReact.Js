import React, { Component } from 'react';

class Employee extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            id: 1,
            age: 22,
            name: 'Dhruvin'
        }
    }
    handleId = () => {
        this.setState({
            id: 100
        })
    }
    render() {
        return (
            <>
                <h1>I'm class based components(Employee)</h1>
                <p>{this.state.name}</p>
                <p>{this.state.age}</p>
                <p>{this.state.id}</p>
                <button onClick={this.handleId}>Change id</button>
            </>
        );
    }
}

export default Employee;