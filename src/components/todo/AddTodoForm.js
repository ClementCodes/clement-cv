import { useState } from "react";


//le addNewTodo et la props en destructuring emanant du comosnat todo  soit en anglait
const AddTodoForm = ({ addNewTodo }) => {

    const [addTodo, setAddTodo] = useState('')
    // E.preventDefault sert a ne pas recharger la page 


    const handleTodo = (e) => {
        e.preventDefault()
        addNewTodo(addTodo)
        setAddTodo("")


    }




    return (


        //on recupere les infos d un input et avec la fonction handleTodo c'est pour recuper avec la touche entré
        <form action="form-todo" onSubmit={handleTodo} >


            <label className="label-todo" >Ajouter Todo</label>
            <input className="input-todo-text" value={addTodo} type="text"
                onChange={(e) => setAddTodo(e.target.value)} />
            <input className="input-todo-submit" type="submit" />
        </form>
    );
};

export default AddTodoForm;