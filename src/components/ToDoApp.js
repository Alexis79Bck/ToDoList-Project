import { useState } from "react";

export default function ToDoApp () {

    const [title, setTitle] = useState("Hola");

    function handleClick(e) {
        e.preventDefault();
        setTitle("Mundo");
    }

    function handleChange(e) {
        const value = e.target.value;
        setTitle(value);
    }

    return (
    <div className="toDoContainer"> 
        <form className="toDoCreateForm">
            <input className="toDoInput" onChange={handleChange} value={ title }/>
            <input className="buttonNew" type="submit" onClick={ handleClick } value="New" />
        </form>

        { title }
    </div>
    );
}