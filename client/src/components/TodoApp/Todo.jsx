import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './todo.module.css'
import Nav from '../NavBar/Nav'

const Todo = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [todos, setTodos] = useState([])

    const handleSearchTerm = (e) => {
        setSearchTerm(e.target.value);
    }

    const getInput = (e) => {
        e.preventDefault();
        console.log(searchTerm);
        insertIntoDb(searchTerm);
    }

    const insertIntoDb = (message) => {
            axios.post('http://localhost:3001/todo', {
            message: message
        }).then(() => {
            // console.log("inserted....")
            fetchTodos()
        })
        .catch(err => {
            console.log(err)
        })
    }

    const fetchTodos = () => {
        axios.get('http://localhost:3001/todo')
        .then(res => {
            setTodos(res.data.todos)
            // console.log(res.data.todos)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchTodos()
    }, [])

    return (
        <div className={styles.container}>
            <Nav />
            <form onSubmit={getInput}>
                <h1>Todo App</h1>
                <input type="text" placeholder='todo...' onChange={handleSearchTerm}/>
                <button type="submit">Add</button>
            </form>

            <div className={styles.todosContainer}>
            {
                todos.length > 0 ? 
                todos.map(todo => (
                    <div className={styles.todos} key={todo.id}>
                        <h1>{todo.message}</h1>
                    </div>
                ))
                : <h1>No todos Bro</h1>
            }
            </div>
        </div>
    )
}

export default Todo
