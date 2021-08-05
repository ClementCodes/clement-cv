import React from 'react';
import ProfilData from '../components/useContext/ProfilData';
import Count from '../components/useEffect/counter/count';
import FunctionErase from '../components/useEffect/counter/FunctionErase';
import FunctionDisplayKey from '../components/useEffect/FunctionDisplayKey';
import UseRef from '../components/UseRef/UseRef';
import CountReducer from '../components/useReducer/CountReducer';

import ImportDestruct from '../components/destructuring/ImportDestruct';



// import Todo from '../components/todo/Todo';

const PageTest = () => {
    return (
        <div>
            {/* <Todo /> */}


            <Count />
            <ImportDestruct />
            <ProfilData />
            <CountReducer />
            <div><br /><br /><br /><br /></div>
            <FunctionErase />
            <FunctionDisplayKey />
            <UseRef />


        </div>
    );
};

export default PageTest;