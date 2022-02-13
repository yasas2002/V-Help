import React from 'react'
import Nav from '../NavBar/Nav'
import styles from './updates.module.css'

const Updates = () => {
    return (
        <div>
            <Nav />
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.box1}>
                        <a href="https://vtop1.vitap.ac.in/MTechWithdrawal/"><h2>M. tech integrated 2021 withdrawal Link</h2></a>
                        <p>M.Tech Integrated 2021 withdrawal Link</p>
                        <a href="https://vitap.ac.in/sched_announcement/m-tech-2021-withdrawal/" target="_blank"><button>Read More</button></a>
                    </div>
                    <div className={styles.box1}>
                        <a href="https://vtop1.vitap.ac.in/Withdrawal/"><h2>B. tech 2021 withdrawal Link</h2></a>
                        <p>B.Tech 2021 withdrawal</p>
                        <a href="https://vitap.ac.in/sched_announcement/b-tech-2021-withdrawal/" target="_blank"><button>Read More</button></a>
                    </div>
                    <div className={styles.box1}>
                        <a href="http://info.vit.ac.in/phd-ap-dec-2021/index.asp"><h2>VITEE 2022 Application Launched</h2></a>
                        <p>VITEEE-22 Application Launched Research Admissions Dec 2021 Results VIT-AP Instructions</p>
                        <a href="https://vitap.ac.in/sched_announcement/ap-eapcet-2021-freshers-orientation/" target="_blank"><button>Read More</button></a>
                    </div>
                    <div className={styles.box1}>
                        <a href="https://vitap.ac.in/wp-content/uploads/2021/12/Brochuer_3-Days-Workshop-AAMCM.pdf"><h2>3-Day Online Workshop </h2></a>
                        <p>3-Day Online Workshop on Advances in Applied Mathematics and Computational Methods - AAMCM</p>
                        <a href="https://vitap.ac.in/sched_announcement/3-day-online-workshop-on-advances-in-applied-mathematics-and-computational-methods-aamcm/" target="_blank"><button>Read More</button></a>
                    </div>
                </div>
            </div>

            <a href="" className={styles.callBtn}><i class="fas fa-phone"></i></a>
        </div>
    )
}

export default Updates
