import React, { Component } from 'react';
import FamousePlace from './famousePlace';

class Country extends Component {
    constructor(props) {
        super(props);

        this.state = {
            country_name: 'India'
        }
    }
    handleCountry = () => {
        if (this.state.country_name === 'India') {
            this.setState({
                country_name: 'Canada'
            })
        } else {
            this.setState({
                country_name: 'India'
            })
        }
    }
    render() {
        return (
            <div>
                <p>*Class based change country.</p>
                <button onClick={this.handleCountry}>Change Country</button>
                <FamousePlace country_name={this.state.country_name} />
            </div>
        );
    }
}

export default Country;