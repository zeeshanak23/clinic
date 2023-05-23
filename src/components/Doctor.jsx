import React from "react"
import styles from '../styles/clinic.module.css'

const Doctor = () => {
    return (

        <section>
            <div className={styles.doctorSection}>
                <div className={styles.doctorHeading}>
                    <div>
                        <h1 className={styles.doctorh1}>Doctor</h1>
                    </div>
                    <div>
                        <h1>Aid Speacialist and <br /> audiologist</h1>
                        <p>Our Clinic employs only Professional Speacialist <br /> and audiologist.we
                            selected the <br /> best doctor
                            on a regular basis.</p>
                    </div>
                    <div className={styles.d2}>
                        <div>
                            <b>All Doctors →</b>
                        </div>
                    </div>
                </div>
                <div className={styles.doctorPhoto}>
                    <div className={styles.doctorImage}>
                        <div>
                            <img src="img/clinic/doctor-4.jpeg" alt="doctor" height="280px" width="290px" />
                            <h1>Dr.Shayam Khurana</h1>
                            <p>Work experience-8 years</p>

                            <div className={styles.skill}>
                                <div>Therapist</div>
                                <div>Ankylologist</div>
                            </div>
                            <div className={styles.newSkill2}>head of the department</div>
                        </div>
                        <div>
                            <img src="img/clinic/doctor-1.webp" height="280px" width="290px" />
                            <h1>Dr. Arti Sukhla</h1>
                            <p>Work experience-8 years</p>

                            <div className={styles.skill}>
                                <div>Therapist</div>
                                <div>Otolaryngologist</div>

                            </div>
                            <div className={styles.newSkill2}>cheif doctor</div>
                        </div>
                    </div>
                    <div className={styles.doctorImage}>
                        <div>
                            <img src="img/clinic/doctor-5.jpg" height="280px" width="290px" />
                            <h1>Dr.Rani kohli</h1>
                            <p>Work experience-2 years</p>

                            <div className={styles.skill}>
                                <div>Therapist</div>
                                <div>Ankylologist</div>
                            </div>
                            <div className={styles.newSkill}>Intern</div>
                        </div>
                        <div>
                            <img src="img/clinic/doctor-5.jpg" height="280px" width="290px" />
                            <h1>Dr.Nikhil Nanda</h1>
                            <p>Work experience-2 years</p>

                            <div className={styles.skill}>
                                <div>Therapist</div>
                                <div>Otolaryngologist</div>

                            </div>
                            <div className={styles.newSkill2}>Head of the department</div>
                        </div>
                    </div>
                    <div className={styles.doctorImage}>
                        <div>
                            <img src="img/clinic/doctor-6.jpg" height="280px" width="290px" />
                            <h1>Dr.Rahul Sharma</h1>
                            <p>Work experience-3 years</p>

                            <div className={styles.skill}>
                                <div>therapist</div>
                                <div>Audiologist</div>

                            </div>
                            <div className={styles.newSkill}>Intern</div>
                        </div>
                        <div>
                            <img src="img/clinic/doctor-1.webp" height="280px" width="290px" />
                            <h1>Dr.Kulkarni Thakur</h1>
                            <p>Work experience-3 years</p>

                            <div className={styles.skill}>
                                <div>therapist</div>
                                <div>children's Audiologist</div>

                            </div>
                            <div className={styles.newSkill}>Intern</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Doctor;