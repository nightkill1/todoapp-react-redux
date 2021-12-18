import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import { AiOutlineCheckSquare } from 'react-icons/ai'

function Todo({ todos, completeTodo, removeTodo, updateTodo, filter }) {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
        type: "ALL"
    })

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: '',

        })
    }


    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return todos.map((todo, index) => (
        < div
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}
        >
            <div
                key={todo.id}
                onClick={() => completeTodo(todo.id)}
            >

                <input type="text" defaultValue={todo.text} style={todo.isComplete ? { textDecoration: "line-through" } : { textDecoration: "" }} />
            </div>
            <div className='icons'>
                <AiOutlineCheckSquare onClick={() => completeTodo(todo.id)} />
                <RiCloseCircleLine
                    onClick={() => removeTodo(todo.id)}
                    className='delete-icon'
                />
                <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })}
                    className='edit-icon' />
            </div>
        </div >
    ))
}

export default Todo
