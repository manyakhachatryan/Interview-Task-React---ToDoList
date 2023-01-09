import React from 'react'
import { useState } from 'react'

function ToDoItem(props) {
    const { id, task, complete, removeToDo, toggleToDo, edit, toggleEditSave } = props
    console.log(edit)
    const [inputEdit, setInputEdit] = useState(task)

    function handleEdit(e) {
        setInputEdit(e.target.value)
    }

    return (
        <>
            {edit ? <div>
                <input type='checkbox' checked={complete} onChange={() => toggleToDo(id)} />
                {task}
                <button onClick={() => toggleEditSave(id)}> Edit</button>
                <button onClick={() => removeToDo(id)}>x</button>
            </div> : <div>
                <input value={inputEdit} onChange={(e) => { handleEdit(e) }} /> <button onClick={() => toggleEditSave(id, inputEdit)}>Save</button>
            </div>}
        </>
    )
}

export default ToDoItem