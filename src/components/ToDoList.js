import { useState  } from "react";

export default function ToDoList ({item, onUpdateToDo, onDeleteToDo}) { 
    
    const [isEdit, setIsEdit] = useState(false);
    
    
    /**
     * Esta function crea un sub-componente llamado ToDoElementEdit dentro del componente ToDoList. 
     */
    function ToDoElementEdit () {
        
        const [updateToDo, setUpdateToDo] = useState(item.title); 
        
        const elementEdit = <form className="toDoEditForm" onSubmit={handleSubmit}>
                                <input className="toDoInputEdit" onChange={handleChange} value={updateToDo}/>
                                <input className="buttonUpdate" type="submit" onClick={handleClick} value="Update" /> 
                            </form>;
                            
        function handleSubmit(e) {
            e.preventDefault();
            
        }
        
        function handleChange(e){
            const updateValue = e.target.value;
            setUpdateToDo(updateValue);
        }
        
        function handleClick(){
            onUpdateToDo(item.id, updateToDo);
            setIsEdit(false);
        }
        
        return elementEdit;
    }
    
    /**
     * Esta function crea un sub-componente llamado ToDoElement dentro del componente ToDoList. 
     */
    
    function ToDoElement() {
        const element = <div className="toDoInfo">
                            {item.title} 
                            <button onClick={() => setIsEdit(true) }>Edit</button> 
                            <button onClick={() => onDeleteToDo(item.id)}>Delete</button> 
                        </div>
        return element;
    }
    
    

    return <li className="listElements">{isEdit ? <ToDoElementEdit /> : <ToDoElement />}</li>;
    
}