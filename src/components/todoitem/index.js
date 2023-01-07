import React from 'react'
import './index.css'
function ToDoItem({item, handleDelete,handleCheckbox }){
 


    return(
        <div className='task'>

    
      
        <input type = 'checkbox' onChange={()=>handleCheckbox(item.id)}/>
        <p>  {item.task}</p>
        <button onClick={()=>handleDelete(item.id)}>Delete</button>
    


  </div>
    )
}

export default ToDoItem