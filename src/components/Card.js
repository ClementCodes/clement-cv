import React from 'react';

const Card = (props) => {


    // const { country } = props;  cela equivaut à ecrire(((( const country = props.country ))))))
    //(cest ce que l on appelle du deconstruring)
    const { country } = props;


    // console.log(props);
    const numberFormat = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };
    // la regex pour separer et mettre un espace tout les 3 chiffres  ^
    return (

        <li className="card">

            <img src={country.flag} alt="flag" />
            <div className="data-container">
                <ul>
                    <li>{country.name}</li>
                    <li>{country.capital}</li>
                    <li>Pop:{numberFormat(country.population)}</li>
                </ul>
            </div>




        </li>

    );
};

export default Card;