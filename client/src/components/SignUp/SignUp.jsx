import React, {useState} from 'react'
import styles from './signUp.module.css'
import {Button, TextField}  from '@material-ui/core'
import axios from 'axios'

const SignUp = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password, confirmPassword)

        axios.post('http://localhost:3001/signUp', {
            name: name,
            email: email,
            password: password, 
            confirmPassword: confirmPassword
        })
        .then((res) => {
            console.log(res)
            if(res.data.message === 'Account Created succesfully....') {
                setErrorMessage('Account Created succesfully....');
            } else {
                setErrorMessage("Something went wrong....")
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
    

        <div className={styles.wrapper}>
            {
                errorMessage.length > 0 ? <h2>{ errorMessage }</h2> : ''
            }
        <div className={styles.container}>
            
           <h1>Signup</h1> 
           <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
                <TextField variant="outlined" label="Name" fullWidth onChange={(e) => setName(e.target.value)} required></TextField>
                <TextField variant="outlined" label="Email" fullWidth onChange={(e) => setEmail(e.target.value)} required></TextField>
                <TextField variant="outlined" label="Password" fullWidth onChange={(e) => setPassword(e.target.value)} required></TextField>
                <TextField variant="outlined" label="Confirm Password" fullWidth onChange={(e) => setConfirmPassword(e.target.value)} required></TextField>

                <Button variant="contained" type='submit' color="primary" >Signup</Button>
           </form>
           <a href="/">Already Have an account..? Login</a>
        </div>
        </div>
    )
}

export default SignUp