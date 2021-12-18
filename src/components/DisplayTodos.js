import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodos, completeTodos, removeTodos, updateTodos } from '../redux/reducer'
import TodoItem from './TodoItem'


const mapStateToProps = (state) => {
    return {
        todos: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
        removeTodo: (obj) => dispatch(removeTodos(obj)),
        updateTodo: (obj) => dispatch(updateTodos(obj)),
        completeTodo: (obj) => dispatch(completeTodos(obj))
    }
}


function DisplayTodos(props) {
    const [sort, setSort] = useState("all")
    return (
        <div className="displaytodos">
            <div className="buttons">
                <button onClick={() => setSort("all")}>All</button>
                <button onClick={() => setSort("completed")}>Active</button>
                <button onClick={() => setSort("active")}>Completed</button>
            </div>
            <ul>
                {
                    props.todos.length > 0 && sort === "active"
                        ? props.todos.map(item => {
                            return (
                                item.completed === true &&
                                <TodoItem
                                    key={item.id}
                                    item={item}
                                    removeTodo={props.removeTodo}
                                    updateTodo={props.updateTodo}
                                    completeTodo={props.completeTodo}
                                />
                            )
                        })
                        : null
                }
                {
                    props.todos.length > 0 && sort === "completed"
                        ? props.todos.map(item => {
                            return (
                                item.completed === false &&
                                <TodoItem
                                    key={item.id}
                                    item={item}
                                    removeTodo={props.removeTodo}
                                    updateTodo={props.updateTodo}
                                    completeTodo={props.completeTodo}
                                />
                            )
                        })
                        : null
                }
                {
                    props.todos.length > 0 && sort === "all"
                        ? props.todos.map(item => {
                            return (
                                <TodoItem
                                    key={item.id}
                                    item={item}
                                    removeTodo={props.removeTodo}
                                    updateTodo={props.updateTodo}
                                    completeTodo={props.completeTodo}
                                />
                            )

                        })
                        : null
                }
            </ul>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos)
