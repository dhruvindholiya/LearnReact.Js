import React from 'react';

const person = {
    students: [
        {
            name: "amit",
            age: 19,
            course: {
                c1: "c",
                c2: "html"
            }
        },
        {
            name: "mayur",
            age: 20,
            course: {
                c1: "c",
                c2: "html"
            }
        }
    ]
};

function studentFun(props) {
    return (
        <div>
            <h1>Hello, I'm function-based component</h1>
            {
                person.students.map((obj) => {
                    return (
                        <React.Fragment key={obj.name}>
                            <p>{obj.name}</p>
                            <p>{obj.age}</p>
                            <p>{obj.course.c1}</p>
                            <p>{obj.course.c2}</p>
                        </React.Fragment>
                    )
                })
            }
        </div>
    );
}

export default studentFun;
