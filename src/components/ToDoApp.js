import { useState } from "react";
import ToDoList from "./ToDoList";

export default function ToDoApp () {
    /**
    * Se crea variable para almacenar los estados: 
    *    los estados se componente por un getter y un setter y ellos deben ser arreglos.
    *    - el getter es el primer atributo ("title") y el setter es el segundo atributo
    *      ("setTitle"). Por lo general y por convencion, el getter se escribe en minuscula camelCase y
    *      el nombre sera la representacion de lo que almacenara, por ejemplo: nombre, sexo, fechaNac, etc.
    *      y el setter se escribe en minuscula camelCase y usando como prefijo set delante del nombre del getter
    *      por ejemplo: setNombre, setSexo, setFechaNac, etc. Se recomienda mantener los nombres en ingles.
    *      tal como name, setName, firstName, setFirstName, password, setPassword, etc.
    */
    const [title, setTitle] = useState("");
    const [todolist, setTodolist] = useState([]);
    /**
    * Cuando hacemos llamadas a funciones por algun eventos, se recomienda utilizar la palabra handle como prefijo en el
    * nombre de la funcion que representa al evento al cual nos referimos, ejemplo 
    *   - handleClick() -> para el evento onClick
    *   - handleChange() -> para el evento onChange
    *   - handleMouseOver() -> para el evento onMouseOver
    * puede usarser la variable "e" como parametro para el evento que este en escucha.
    */
    
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
        /**
         * En este ejemplo se crea una constante newToDo como objeto, el cual tiene los atributos:
         * id, title, completed
         */    
        const newToDo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false        
        }
        
        /**
         * para la legibilidad se uso este codigo
         */
        const temp = [...todolist];
        temp.push(newToDo);
        setTodolist(temp);
     
    }

    return (
    <div className="toDoContainer"> 
        <form className="toDoCreateForm" onSubmit={handleSubmit}>
            <input className="toDoInput" onChange={handleChange} value={ title }/>
            <input className="buttonNew" type="submit" onClick={handleSubmit} value="New" /> 
        </form>
        
        <div className="toDoListContainer">
            <ul>
            {
                /**
                 Esta nota es importante
                 El uso del metodo o funcion .map() en un arreglo. Permite manejar rapidamente los elementos del
                 arreglo como parte de una funcion el cual se puede renderizar.
                 */
                todolist.map(item => (
                    //<li key={item.id}> {item.title} </li>
                    <ToDoList item={item} key={item.id}/> //Se creo un componente llamado ToDoList el cual recibira como prop -item-, en su propiedad item
                ))
            }
            </ul>
        </div>
        
    </div>
    );
}