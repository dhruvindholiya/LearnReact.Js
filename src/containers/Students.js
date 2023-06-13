import React, { Component } from "react";

const person = [
    {
        Name: 'Dhruvin',
        Age: 22
    },
    {
        Name: 'Janki',
        Age: 50
    }
];

class Students extends Component {
    render() {
        return (
            <div>
                <h1>Hello, I'm class base components</h1>
                {
                    person.map((v, i) => {
                        return (
                            <>
                                <h3>{v.Name}</h3>
                                <h5>{v.Age}</h5>
                            </>
                        )
                    })
                }
            </div>
        );
    }
}

export default Students;