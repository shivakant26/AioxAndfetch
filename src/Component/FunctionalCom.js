import { useState } from "react";
import React from "react";


function FunctionalCom() {
    const [count, setCount] = useState(0);  
    return(
        <div>
            <h4>FunctionalCom</h4>
            <div className="Counter-div">
            <strong>{count}</strong>
            </div>
            <button onClick={() => setCount(count + 1)}>Count</button>
        </div>
    )
}

export default FunctionalCom;