import React, { Component } from 'react';

class FamousePlace extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.country_name}</h1>
                <h3>The famouse place of {this.props.country_name}: <em>{this.props.country_name === 'India' ? 'White Desert' : 'Niagara Falls'}  </em> </h3>
            </div>
        );
    }
}

export default FamousePlace;