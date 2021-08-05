import React, { useState } from 'react';
import FunctionDisplayKey from '../FunctionDisplayKey';

const FunctionErase = () => {


    const [show, setShow] = useState(true);

    // si c'est show tu ecris cacher sionon tu ecris afficher 
    const btnDisplay = show ? 'cacher' : 'afficher';





    return (
        <div>
            <button onClick={() => setShow(!show)} >{btnDisplay}</button>
            {
                show && <FunctionDisplayKey />

            }
        </div>
    );
};

export default FunctionErase;