import { useState } from "react";

export default function ToDoApp () {

    const [title, setTitle] = useState("Hola");
    const [toDoList, setToDoList] = useState([]);

    // function handleClick(e) {
    //     e.preventDefault();
    //     setTitle("Mundo");
    // }

    function handleChange(e) {
        const value = e.target.value;
        setTitle(value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newToDo = {
            id: crypto.randomUUID(),
            title: title,
            complete: false        
        }

        setToDoList([...toDoList, newToDo]);
        console.clear();
        console.log(toDoList, newToDo);
    }

    return (
    <div className="toDoContainer"> 
        <form className="toDoCreateForm" onSubmit={handleSubmit}>
            <input className="toDoInput" onChange={handleChange} value={ title }/>
            <input className="buttonNew" type="submit" onSubmit={handleSubmit} value="New" /> 
        </form>
        
    </div>
    );
}