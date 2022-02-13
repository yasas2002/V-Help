import React, {useState} from 'react'
import Nav from '../NavBar/Nav'
import { TextField, Button } from '@material-ui/core'
import styles from './addQuestion.module.css'
import { useNavigate } from 'react-router-dom';

import axios from "axios"
const AddQuestion = () => {
    const navigate = useNavigate();
    
    const [question, setQuestion] = useState('')
    const [body, setBody] = useState('')
    const [image, setImage] = useState('');
    const [tags, setTags] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(name)
        // console.log(question, body, image, tags);

        const name = localStorage.getItem('name')
        const formValues = new FormData();
        formValues.append('name', name)
        formValues.append('question', question)
        formValues.append('body', body)
        formValues.append('image', image)
        formValues.append('tags', tags)

        try {
            const res = await axios.post('http://localhost:3001/askAQuestion', formValues, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(res.data)
            navigate('/home');

        } catch(err) {
            console.log(err)
        }
    }

    // http://localhost:3001/askAQuestion

    return (
        <div>
            <Nav />
            <div>
                <form className={styles.form} onSubmit={(e) => handleSubmit(e)} encType="multipart/form-data">
                    <h1>Ask a Question</h1>
                    <TextField variant="outlined" label="Question" onChange={(e) => setQuestion(e.target.value)} /><br />
                    <TextField
                        variant="outlined" label="Body"
                        multiline
                        minRows={3}
                        maxRows={4}
                        onChange={(e) => setBody(e.target.value)}
                    /><br />
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} /><br />
                    <TextField variant="outlined" label="Tags" onChange={(e) => setTags(e.target.value)} /><br />
                    <Button type="submit" variant="contained" color="primary">Ask</Button>
                </form>
            </div>
        </div>
    )
}

export default AddQuestion

// https://www.npmjs.com/package/material-ui-chip-input
