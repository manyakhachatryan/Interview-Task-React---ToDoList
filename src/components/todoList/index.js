import React from 'react'
import ToDoItem from '../todoitem'
function ToDoList(props) {
    return (
        <div>
            {
                props.item.map(item => <ToDoItem key={item.id}
                    toggleToDo={props.toggleToDo}
                    removeToDo={props.removeToDo}
                    toggleEditSave={props.toggleEditSave}
                    {...item} />)
            }
        </div>
    )
}


export default ToDoList