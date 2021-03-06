import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import './styles.css'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];

    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }]
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)


    useEffect( () => {
        localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos]);

    const handleAddTodo = (newTodo) => {
        const action = {
            type:'add',
            payload: newTodo
        }
        
        dispatch(action);
    }



    const handleDelete = (id) => {

        const action = {
            type:'delete',
            payload: id
        }

        dispatch(action)
    }

    const handleToggle = (id) => {

        dispatch({
            type: 'toggle',
            payload: id
        })

    }
    
    

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />

            
            <div className='row'>
                <div className='col-7'>
                    {/* TodoList, todos, handleDelete, handleToggle */}
                    <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />
                </div>

                <div className='col-5'>
                    <TodoAdd handleAddTodo={handleAddTodo} />

                </div>
            </div>

        </div>
    )
}
