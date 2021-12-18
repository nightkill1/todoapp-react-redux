import React, { useRef } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { AiOutlineCheckCircle, AiFillDelete, AiFillCheckCircle } from 'react-icons/ai'
function TodoItem(props) {
    const inputRef = useRef(true)
    const changeFocus = () => {
        console.log(inputRef.current)
        inputRef.current.disabled = false;
        inputRef.current.focus()
    }

    const update = (id, value, e) => {

        if (e.which === 13) {
            // if key code == enter key
            console.log("13")
            updateTodo({ id, item: value })
            inputRef.current.disabled = true
        }
    }

    const completedTodos = (id, completed) => {
        console.log(id)
        completeTodo({ id, completed: completed })

    }
    const { item, updateTodo, removeTodo, completeTodo } = props
    return (
        <li key={item.id} className='card'>
            <textarea ref={inputRef} style={item.completed ? { textDecoration: "line-through" } : { textDecoration: "none" }} disabled={inputRef} defaultValue={item.item} onKeyPress={(e) => update(item.id, inputRef.current.value, e)} />
            <div className="btns">
                <button onClick={() => completedTodos(item.id, item.completed)}  >{item.completed ? < AiFillCheckCircle style={{ color: "green" }} /> : <AiOutlineCheckCircle style={{ color: "green" }} />}</button>
                <button style={{ color: "blue" }} onClick={() => changeFocus()}><AiFillEdit /></button>
                <button style={{ color: "red" }} onClick={() => removeTodo(item.id)}><AiFillDelete /></button>{" "}
            </div>
            {item.completed && <span className='completed'>done</span>}
        </li >
    )
}

export default TodoItem
