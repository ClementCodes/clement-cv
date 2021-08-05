import React, { useState, useEffect } from "react";
import axios from "axios"
import Card from "./Card";
// pour les (((usestate)))) il faut importer {useState}  pareil pour le useeffect

const Pays = () => {
    // pour le use state : la premeire valeur =la valeur du state
    //seconde valeur = foction qui peut mettre a jour le state et qui peut etre initialiser a zero
    const [data, setData] = useState([]);
    // le use effect est un hook qui permet de la performance et qui permet de contenir
    //le tout dans un useeffect avec les crochet[] a la  fin qui signifie qui dit que tu joues 
    //tout le temps que si il y a des changements dans le call back crochet



    const [sortedData, setSortedData] = useState([]);
    // cette fonction va servir pour mettre dans l ordre les pays  du plus peuplé au moins peuplé  const [sortedData, setSortedData] = useState([]);

    const [playOnce, setPlayOnce] = useState(true);
    const [rangeValue, setRangeValue] = useState(3);

    const [selectedRadio, setSelectedRadio] = useState("");
    const radios = ["Africa", "America", "Asia", "Europe", "Oceania"]
    useEffect(() => {


        if (playOnce) {
            axios
                .get(
                    "https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag"
                )
                .then((res) => {
                    setData(res.data);
                    setPlayOnce(false);
                });
        }

        const sortedCountry = () => {
            // sur la const countryObjet on vient de transformer notre array en objet
            const countryObj = Object.keys(data).map((i) => data[i]);
            // const sortedArray grace a la methode moderne de javascript on fait un tri avec return b.population - a.population;
            const sortedArray = countryObj.sort((a, b) => {
                return b.population - a.population;
            });
            sortedArray.length = rangeValue;
            setSortedData(sortedArray)
        };
        sortedCountry();
    }, [data, rangeValue, playOnce]);
    // call back  tableau[]
    return (
        <div>
            <div className="pays">
                <div className="sort-countainer">

                    <input type="range" min="1" max="250" value={rangeValue} onChange={(e) => setRangeValue(e.target.value)} />

                    <ul>
                        {radios.map((radio) => {
                            return (
                                <li key={radio}>
                                    <input type="radio" value={radio} id={radio}
                                        checked={radio === selectedRadio}
                                        onChange={(e) => setSelectedRadio(e.target.value)} />
                                    <label htmlFor={radio}>{radio}</label>
                                </li>
                            )
                        })}
                    </ul>

                </div>
                <div className="cancel">
                    {selectedRadio && <h5 onClick={() => setSelectedRadio("")}>

                        Annuler recherche</h5>}
                </div>
                <ul className="pays_liste">
                    {sortedData
                        .filter((country => country.region.includes(selectedRadio)))
                        .map((country) => (

                            <Card country={country} key={country.name} />
                        ))}



                </ul>
            </div>
        </div>
    );

};

// country est une props     exemple du dessus    <Card country={country} key={country.name} />
export default Pays;