import React, { useEffect, useState } from 'react';

function Clock(props) {
    
    const [time, setTime] = useState(new Date());

    const handleTime = () => {
        setTime(new Date());
    }
    useEffect(() => {
        let timeData = setInterval(handleTime, 1000);

        return () => {
            clearInterval(timeData);
        }
    }, [time]);
    return (
        <div>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    );
}

export default Clock;