import React, {useState} from 'react'
import Nav from '../NavBar/Nav'
import {TextField, Button} from '@material-ui/core'
import styles from './library.module.css'
import axios from 'axios'

const Library = () => {

    const [input, setInput] = useState('')
    const [books, setBooks] = useState([])
    const [showMsg, setShowMsg] = useState('search for a book')
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.get('http://localhost:3001/library', { params: { input: input } })
            .then(res => {
                setBooks(res.data.books)
                console.log(res.data)
                setShowMsg("Not Found");
            })
            .catch(err => {
                console.log(err)
        })
    }

    return (
        <div>
            <Nav />
            <form className={styles.container} onSubmit={(e) => handleSubmit(e)}>
                <TextField variant="outlined" label="Question" style={{width: '100%'}} onChange={(e) => setInput(e.target.value)} /><br />
                <Button type="submit" variant="contained" color="primary" style={{marginTop: '10px'}}>Search</Button>
            </form>

            {
                books.length > 0 ? 
                books.map(data => (
                <div>
                    <h3>{data.bookName}</h3>
                    <hr />
                </div>
                ))
                : showMsg
            }
        </div>
    )
}

export default Library
