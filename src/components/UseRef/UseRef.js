//useref est dals l idee de se sevir du dom

import React, { useRef, useState } from 'react';

const UseRef = () => {



    const [name, setName] = useState(null)
    const userNameRef = useRef(null)

    const handleSubmit = () => {

        setName(userNameRef.current.value)

    }
    return (
        <div>
            <h3>  {name}</h3>

            <input ref={userNameRef} type="text" />
            <button onClick={handleSubmit} >focusses</button>

        </div>
    );
};

export default UseRef;