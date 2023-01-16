import { useState  } from "react";

export default function ToDoList ({item}) { 
    
    const [isEdit, setIsEdit] = useState(false);
    

    return (
            <li className="toDoElement">
                {isEdit ? (
                            <div>
                                Estas en modo Editar
                            </div> 
                        ) : (
                            <div>
                                {item.title} 
                                <button onClick={() => setIsEdit(true) }>Edit</button> 
                                <button>Delete</button> 
                            </div>
                )}
                                 
            </li>
            );
    
}