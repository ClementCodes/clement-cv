import React from 'react';

// deux facons de fiare du setructuring
const Destructuring = (props) => {
    // console.log(props);

    //premiere la mieux car moins de code et plus clair
    const { name, age } = props;


    return (
        <div>
            <h1>destructuring</h1>
            <p>Chanteur :{name} </p>


            <p>age {props.age}: </p>
            <p>age {age}: </p>
        </div>
    );
};
//deuximee eu dessus
export default Destructuring;