import React, {useState}  from 'react'
import styles from './nav.module.css'
import {Link} from 'react-router-dom'
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import {Button} from '@material-ui/core'

const Nav = () => {
    const navigate = useNavigate();


    // const [show, setShow] = useState(false);
    // const handleBurger = () => {
    //     setShow(!show);
    // }

    const handleLogout = () => {
        navigate('/');
    }

    // {show ? `${styles.navLinks} ${styles.show}` : `${styles.navLinks}`}

    return (
        <div>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <h3 className={styles.title}>V-HELP</h3>
                    {/* <button className={show ? `${styles.hamburger} ${styles.show}` : `${styles.hamburger}`} onClick={handleBurger}><i class="fas fa-bars"></i></button> */}
                    <div className={styles.navLinks}>
                    <li><Link to='/home'>Home</Link></li>
                            <li><Link to="/addQuestion">Add Question</Link></li>
                            <li><Link to='/Library'>Library</Link></li>
                            <li><Link to='/updates'>Updates</Link></li>
                            <li><Link to='/todo'>Todos</Link></li>
                            <li><Link to="/examRecommodation">Exam Recommendation</Link></li>
                            <li><a href="http://vigneshm.com/timetable-generator" target="_blank">Time Table</a></li>
                            <li><input type="text" placeholder="Search..." /><i className="fa fa-search"></i></li>
                            {/* <li className={styles.profile}>B</li> */}
                            {/* <button onClick={handleLogout} className={styles.logout}>Logout</button> */}
                            <Button onClick={handleLogout} variant="contained" color="primary">Logout</Button>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
