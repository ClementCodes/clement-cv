import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import { v4 as uuidv4 } from 'uuid';



//uuid est un package qui peme de creer des id a la volée
const Todo = () => {
    const [todos, setTodos] = useState
        ([
            { id: 1, todo: 'achetez du lait' },
            { id: 2, todo: 'achetez du pain' },
            { id: 3, todo: 'achetez du fromage' }
        ])
    const [warning, setWarning] = useState(false)

    const myTodos = todos.map((todo) => {
        return (
            // la key c'est pour react car react a besoin d'un id pour maper ensuite todo<;todo ba c'est c'est l'objet de todo
            <li className="list-group-item" key={todo.id}>{todo.todo} ></li>
        )

    })
    ///avec le spread operator je recupere la partie todo 
    const addNewTodo = (newTodo) => {

        // if (newTodo!=="") si todo n'est pas une chaine de caractere
        if (newTodo !== "") {

            setTodos([...todos, {
                id: uuidv4(),
                todo: newTodo

            }])
        } else {

            setWarning(true)
        }


    }

    //--------return--------on passe en props addnewtodo pour le recuper sur le composant addTodoForm
    return (
        <div>
            <h1>TODO list</h1>
            <h1>{todos.length}  to-do </h1>

            <ul className="" >
                {myTodos}
            </ul>


            <AddTodoForm addNewTodo={addNewTodo} />
        </div>
    );
};

export default Todo;

