import React from 'react'
import { useState, useEffect } from 'react'
import ToDoList from '../todoList'

function ToDo() {
    const [input, setInput] = useState('')
    const [data, setData] = useState([])
    const [checkedAll, setCheckedAll] = useState(false)

    useEffect(() => {
        if (data.every(item => item.complete == true) && data.length != 0) {
            setCheckedAll(true)
        } else {
            setCheckedAll(false)
        }
    })

    function toggleEditSave(id, inputEdit) {
        setData(
            data.map(item => {
                if (item.id == id) {
                    console.log(item.edit)
                    return {
                        ...item,
                        task: inputEdit,
                        edit: !item.edit
                    }
                } else return item
            })
        )
    }

    function handleChange(e) {
        setInput(e.target.value)
    }

    function removeToDo(id) {

        setData(data.filter(item => item.id !== id))
    }


    function checkChecked(id) {
        data.forEach(item => {
            if (item.id == id && item.complete == true) {
                removeToDo(id)
            }
        })

    }

    function deleteAll() {
        setData([])
    }

    function toggleAllChecked() {
        if (checkedAll) {
            setData(data.map(item => {
                return {
                    ...item,
                    complete: false,
                }
            }))
        }
        else {
            setData(data.map(item => {
                return {
                    ...item,
                    complete: true,
                }
            }))
        }
        setCheckedAll(!checkedAll)

    }


    function toggleToDo(id) {
        setData(data.map(item => {
            if (item.id !== id) {
                return item;
            }
            return {
                ...item,
                complete: !item.complete
            }
        }))
    }


    function addToDo() {
        if (input) {
            setData([...data, {
                id: Date.now(),
                task: input,
                complete: false,
                edit: true,
            }])
            setInput('')
        }

    }

    return (
        <>
            <div>
                <input value={input} onChange={(e) => handleChange(e)} />
                <button onClick={addToDo}>Add ToDo</button>
            </div>
            <ToDoList item={data} removeToDo={checkChecked} toggleToDo={toggleToDo} toggleEditSave={toggleEditSave} />
            {data.length ? <div>   You have a {data.length} tasks ---  Check All
                <input type='checkbox' checked={checkedAll} onChange={toggleAllChecked} />

            </div> : <div>Write your first task</div>}
            {checkedAll ? <button onClick={deleteAll}>Delete All</button> : ''}

        </>
    )
}

export default ToDo