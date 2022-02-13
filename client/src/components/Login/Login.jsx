import React, {useState} from 'react'
import styles from './login.module.css'
import {Button, TextField}  from '@material-ui/core'
import axios from 'axios';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3001/signin', {
            name: name,
            password: password
        })
        .then(res => {
            console.log(res)
            if(res.data.message === 'Login successful...') {
                localStorage.setItem('name', name);
                setErrMsg('Login Successfull....')
                navigate('/home');
            } else {
                setErrMsg('Invalid Credentials....')
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
    
        <div className={styles.wrapper}>
            <img src="https://cdn.freelogovectors.net/wp-content/uploads/2021/02/vit-logo.png" alt="" />

        <div className={styles.container}>

            {
                errMsg.length > 0 ? <h1>{errMsg}</h1> : ''
            }
           <h1>Login System</h1> 
           <form onSubmit={(e) => handleSubmit(e)} className={styles.loginForm}>
                <TextField variant="outlined" label="Name" fullWidth onChange={(e) => setName(e.target.value)} required></TextField>
                <TextField variant="outlined" label="Password" fullWidth onChange={(e) => setPassword(e.target.value)} required></TextField>
                <Button variant="contained" color="primary" type='submit' >Login</Button>
           </form>
           <a href="/signUp">Don't have an account? signUP</a>
           <a href="/forgotPassword">Forgot Password...?</a>
        </div>
        </div>
    )
}

export default Login