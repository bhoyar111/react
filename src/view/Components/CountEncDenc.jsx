import React, { useState } from 'react';

function CountEncDenc(props) {
    const [counts, setCounts] = useState(1);

    const encFun = () => {
        setCounts(preCount => preCount + 1)
    }
    const deCreFun = () => {
        setCounts(preCount => preCount - 1)
    }
    return (
        <div>
            <h1>My Count is {counts}</h1>
            <button onClick={encFun}>Click +</button>
            <button onClick={deCreFun}>Click -</button>
            
        </div>
    );
}

export default CountEncDenc;