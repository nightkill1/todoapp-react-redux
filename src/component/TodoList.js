import React, { useState, useEffect } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'


function TodoList() {
    const [todos, setTodos] = useState([])
    const [datas, setDatas] = useState(todos)
    // const [types, setTypes] = useState('ALL')

    console.log(todos)

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
    }

    const completeTodo = id => {

        const testdata = [...todos]

        const index = testdata.findIndex((item) => item.id === id)

        testdata[index].isComplete = !testdata[index].isComplete

        setTodos(testdata)
    }

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
    }


    const filter = complete => {
        const removeArr = [...todos].filter(todo => todo.isComplete !== complete)
        setTodos(removeArr)
    }


    useEffect(() => {
        setDatas(todos)

    }, [todos])


    let removeArr = [""]
    const handleChangeSelect = (e) => {

        // setTypes(e.target.value)
        if (e.target.value === "ALL") {
            setDatas(todos)
        } else if (e.target.value === "isComplete") {
            removeArr = [...todos].filter(todo => todo.isComplete === true)
            setDatas(removeArr)
        } else if (e.target.value === "notComplete") {
            removeArr = [...todos].filter(todo => todo.isComplete === false)
            setDatas(removeArr)
        }
    }

    return (
        <div className='todo-list'>
            <h1>What's the plan for Today?</h1>
            <span>Choose the style to display: </span>
            <select id="selected" onChange={handleChangeSelect} style={{ marginBottom: "10px" }}>
                <option value="ALL">All</option>
                <option value="isComplete">is Complete</option>
                <option value="notComplete">not Complete</option>
            </select>
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={datas}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
                filter={filter}
                types={removeArr}
            />
        </div>
    )
}

export default TodoList
