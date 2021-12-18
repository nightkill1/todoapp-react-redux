import React, { useState } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
            isComplete: false
        })

        setInput('')
    }



    return (
        <div>
            <form className='todo-form' onSubmit={handleSubmit}>
                <input type="text"
                    placeholder='add todo'
                    value={input} name='text'
                    className='todo-input'
                    onChange={handleChange}
                />
                <button className='todo-button'>Add</button>
            </form>
            <div>

            </div>
        </div>




    )
}

export default TodoForm
