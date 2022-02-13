import React, {useState, useEffect} from 'react'
import Nav from '../NavBar/Nav'
import axios from 'axios'
import styles from './home.module.css'
// import {TextField} from '@material-ui/core'
import { TextField, Button } from '@material-ui/core'


const Home = () => {

    const [questions, setQuestions] = useState([]);
    const [questionId, setQuestionId] = useState(0);
    const [showReply, setShowReply] = useState(false);
    const [answer, setAnswer] = useState('')
    const [fetchedAnswers, setFetchedAnswers] = useState([])

    const getQuestion = () => {
        axios.get('http://localhost:3001/askAQuestion/')
        .then((res) => {
            // console.log(res.data.result)
            setQuestions(res.data.result);
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleReply = (questionId) => {
        setShowReply(true);
        setQuestionId(questionId);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.reload();


        const whoIsReplying = localStorage.getItem('name')
        const forWhichQuestion = questionId

        const formValues = new FormData();
        formValues.append('whoIsReplying', whoIsReplying)
        formValues.append('forWhichQuestion', forWhichQuestion);
        formValues.append('answer', answer)

        console.log(whoIsReplying, forWhichQuestion, answer);

        axios.post('http://localhost:3001/answeringQuestion', formValues)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const fetchingAnswers = () => {
        axios.get('http://localhost:3001/answeringQuestion')
            .then(res => {
                setFetchedAnswers(res.data.answers)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
        })
    }

    useEffect(() => {
        getQuestion()
        fetchingAnswers();
    }, [])

    return (
        <div>
            <Nav />
            <div className={styles.wrapper}>
                {
                    questions.map((question) => (
                        <div className={styles.container} key={question.id}>
                            <h1>{question.name}</h1>
                            <div className={styles.image}>
                                <img src={'uploads/' + question.imageUrl} alt={question.imageUrl} />
                            </div>
                            <h3>{question.question}</h3>
                            <h3>{question.body}</h3>
                            <h4>{question.tags}</h4>

                            <Button variant="contained" color="primary" style={{marginBottom: '10px'}} onClick={() => handleReply(question.id)}>Reply</Button>
                            {
                                showReply && question.id === questionId ? <form className={styles.replyForm} onSubmit={(e) => handleSubmit(e)}>
                                    <TextField
                                variant="outlined" label="Reply..."
                                multiline
                                minRows={3}
                                maxRows={4}
                                className={styles.reply}
                                onChange={(e) => setAnswer(e.target.value)}
                            /> <br />
                            <Button type="submit" variant="contained" color="secondary" style={{marginTop: '10px'}}>Submit</Button>
                                </form> : ''
                            }

                        <h1 className={styles.title}>Answers</h1>
                            {
                                fetchedAnswers.map((answer) => (
                                    answer.forWhichQuestion === question.id ? <div className={styles.replyAnswers}>
                                        <div>
                                            <h3 className={styles.whoIsReplying}>{answer.whoIsReplying}</h3>
                                        </div>
                                        <h2>{answer.answer}</h2>
                                    </div> : ''
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home
