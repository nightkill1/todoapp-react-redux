import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import { addTodos, completeTodos, removeTodos, updateTodos } from '../redux/reducer'
import { GoPlus } from "react-icons/go"

const mapStateToProps = (state) => {
    return {
        todos: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
        removeTodo: (obj) => dispatch(removeTodos(obj)),
        updateTodos: (obj) => dispatch(updateTodos(obj)),
        completeTodos: (obj) => dispatch(completeTodos(obj))
    }
}

function Todos(props) {
    const [todo, setTodo] = useState('')

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault(); props.addTodo({
            // write object/todo
            id: Math.floor(Math.random() * 1000),
            item: todo,
            completed: false,
        })
        setTodo('')
    }

    // console.log("prop from store", props)
    return (
        <div className='addTodos'>
            <form action="" onSubmit={handleSubmit} className='addTodos'>
                <input type="text" onChange={(e) => handleChange(e)} className='todo-input' />
                <button className='add-btn' onClick={handleSubmit}>
                    <GoPlus />
                </button>
            </form>
            <br />
        </div>
    )
}

// user connect method to connect this component this component with redux st
export default connect(mapStateToProps, mapDispatchToProps)(Todos)
