import React, { useState } from 'react';

function EmployeeFun(props) {

    const [name, setName] = useState('Dhruvin');
    const [age, setAge] = useState(22);
    const handleAge = () => {
        setAge(20)
    }
    return (
        <>
            <h1>I'm function besed components (Employee)</h1>
            <h3>{name}</h3>
            <h5>{age}</h5>
            <button onClick={handleAge}>Click me</button>
        </>
    );
}

export default EmployeeFun;