import React, { useReducer } from 'react';

const initialState = 1;

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reinitialiser':
            return initialState

        default: return state
    }

}

const CountReducer = () => {

    const [count, dispatch] = useReducer(reducer, initialState)
    console.log(typeof count);
    console.log(typeof useReducer);
    console.log(useReducer);
    // console.log(useReducer);
    return (
        <div>
            <h1>counteducer</h1>
            <h1>{count}</h1>
            <button onClick={() => dispatch('increment')} >+   plus </button>
            <hr /><br />
            <hr /><br />
            <button onClick={() => dispatch('decrement')} >  -   moins</button>
            <hr /><br />
            <hr /><br />
            <button onClick={() => dispatch('reinitialiser')} >  Reinitialiser</button>


        </div>
    );
};

export default CountReducer;