import React, { useState} from 'react'
import ToDoItem from '../todoitem'
import './index.css'

function ToDo() {
    const [input, setInput] = useState('')

    const [check, setCheck] = useState(false)

    const [data, setData] = useState([])


function handleAll(){
    setCheck(!check)
    
    handleAllCheckbox()
}

    function handleAllCheckbox() {
      
        console.log("data1", data)
        if (check) {
            setData(data.map((item) => Object.assign({}, item, { checked: true })))
           
        }
        else {
            setData(data.map((item) => Object.assign({}, item, { checked: false })))
            
        }
      
    }

    function handleCheckbox(id) {
        data.map((item) => {
            if (item.id == id) {

                item.checked = !item.checked
            }
        })
        console.log(data)
    }

    function handleDelete(id) {
        data.map((item) => {
            if (item.id == id) {
                if (item.checked == true) {
                    setData(data.filter((item) => item.id != id))
                    console.log(data)
                }
            }
        })

    }


    function handlerButtonAdd(e) {
        e.preventDefault()
        const todo = {
            id: new Date().getTime(),
            task: input,
            checked: false,
        }
        setData([...data].concat(todo))
        setInput("")

    }


    return (<>

        <form className='form'>

            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className={input} />
            <button className='button_add' onClick={(e) => handlerButtonAdd(e)}>Add ToDo</button>


        </form>
        <ul>
            {data.map((item) => {

                return <ToDoItem key={item.id} item={item} handleDelete={handleDelete} handleCheckbox={handleCheckbox} />
            })}

        </ul>
        <div>
            Check all
            <input type='checkbox' onChange={() => handleAll()} />
        </div>

    </>
    )
}

export default ToDo