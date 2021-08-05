import React, { useEffect, useState } from 'react';

const FunctionDisplayKey = () => {

    const [keyCode, setKeyCode] = useState("")

    const handleKeycode = e => {

        setKeyCode(e.code)

    }
    useEffect(() => {
        document.addEventListener("keyup", handleKeycode);

        return () => {

            document.removeEventListener("keyup", handleKeycode)
        }

    }, [])
    return (
        <div>
            <div>
                <h1>{keyCode}</h1>
            </div>

        </div>
    );
};

export default FunctionDisplayKey;