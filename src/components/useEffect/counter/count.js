//======= Partie------ use state------- use effect ==========//


//======      Les HOOKS      ====== voir site donkey geek/




import React, { useState, useEffect } from 'react';


// ce comosant est un compteur de clique qui s 'indique surle titre 
const Count = () => {


    const [count, SetCount] = useState(0)



    const [name, SetName] = useState(0)

    //le use effect ca a faite nterargir un element avec le dom et non directement via un use state
    useEffect(() => {
        // console.log("mise a jour du titre");

        document.title = `Vous avez clique ${count} fois`




    }, [count])

    // si on souhaite que le titre bouge en meme temps qu el ebvement onclick alors on met le count dans le tableau et siono  on met un tableau vide comme ca on pemret que ca s'active qu'une seule  fois un peu coimme le didmount



    //le tableau au dessus sert a defnir le fait d'arreter de matre a jour le state du use effect alors qu'il n y a pas de changemetn integré

    return (

        <div>
            <h1>Use effect</h1>
            <h1>{count}</h1>
            <button onClick={() => SetCount(count + 1)} >clique</button>


            <input type="text" value={name} onChange={e => SetName(e.target.value)} />

            <div>





            </div>



        </div >

    );
};

export default Count;