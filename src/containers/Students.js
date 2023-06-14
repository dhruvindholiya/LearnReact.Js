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
                    person.map((Obj, i) => {
                        return (
                            <React.Fragment key={Obj.Name}>
                                <h3>{Obj.Name}</h3>
                                <h5>{Obj.Age}</h5>
                            </React.Fragment>
                        )
                    })
                }
            </div>
        );
    }
}

export default Students;