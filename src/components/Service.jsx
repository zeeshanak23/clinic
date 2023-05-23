import { PlusCircleOutlined } from "@ant-design/icons"
import styles from '../styles/clinic.module.css'

const Service = () => {
    return (
        <section>
            <div className={styles.serviceSection}>
                <div className={styles.service1}>
                    <h1>Service</h1>
                </div>
                <div>
                    <div className={styles.serviceHeading}>
                        <h1>Excellent services <br /> of our clinic</h1>
                    </div>
                    <div className={styles.service2}>
                        <div
                        >All
                        </div>
                        <div>
                            For adult</div>
                        <div>
                            For children
                        </div>
                    </div>
                    <div className={styles.list}>
                        <div>
                            <h1>Diagnostic examination with consulation of an audiologist</h1>
                            <PlusCircleOutlined style={{ fontSize: '250%', margin: 10, color: "#c8c8c8" }} />
                        </div>
                        <hr className={styles.hr1} />
                        <div>
                            <h1>children's audiologist</h1>
                            <PlusCircleOutlined style={{ fontSize: '250%', margin: 10, color: "#c8c8c8" }} />

                        </div>
                        <hr className={styles.hr1} />
                        <div>
                            <h1>Consultation with a specialized therapist</h1>
                            <PlusCircleOutlined style={{ fontSize: '250%', margin: 10, color: "#c8c8c8" }} />
                        </div>
                        <hr className={styles.hr1} />
                        <div>
                            <h1>Consultation with a audiologist therapist</h1>
                            <PlusCircleOutlined style={{ fontSize: '250%', margin: 10, color: "#c8c8c8" }} />
                        </div>
                        <hr className={styles.hr1} />
                        <div>
                            <h1>Therapy for speech and hearing problem</h1>
                            <PlusCircleOutlined style={{ fontSize: '250%', margin: 10, color: "#c8c8c8" }} />
                        </div>
                        <hr className={styles.hr1} />
                        <div>
                            <h1>Hearing problem solution</h1>
                            <PlusCircleOutlined style={{ fontSize: '250%', margin: 10, color: "#c8c8c8" }} />
                        </div>
                        <hr className={styles.hr1} />
                        <div>
                            <h1>Treatment of Presbyterians</h1>
                            <PlusCircleOutlined style={{ fontSize: '250%', margin: 10, color: "#c8c8c8" }} />
                        </div>
                        <hr className={styles.hr1} />
                        <div>
                            <h1>Therapy Treatment of dysarthria</h1>
                            <PlusCircleOutlined style={{ fontSize: '250%', margin: 10, color: "#c8c8c8" }} />
                        </div>
                        <hr className={styles.hr1} />
                        <div>
                            <h1>Therapy treatment of high level of Amyotrophic lateral sclerosis</h1>
                            <PlusCircleOutlined style={{ fontSize: '250%', margin: 10, color: "#c8c8c8" }} />
                        </div>
                        <hr className={styles.hr1} />
                        <div>
                            <h1>Treatment for sensorineural</h1>
                            <PlusCircleOutlined style={{ fontSize: '250%', margin: 10, color: "#c8c8c8" }} />
                        </div>
                        <hr className={styles.hr1} />
                        <div>
                            <h1>Outpatient course of conservation treatment</h1>
                            <PlusCircleOutlined style={{ fontSize: '250%', margin: 10, color: "#c8c8c8" }} />
                        </div>
                        <hr className={styles.hr1} />
                        <div>
                            <h1>Hardware treatment(stuttering,apraxia,ASND,sensorineural)</h1>
                            <PlusCircleOutlined style={{ fontSize: '250%', margin: 10, color: "#c8c8c8" }} />
                        </div>
                        <hr className={styles.hr1} />
                        <div>
                            <h1>Therapy and Aid</h1>
                            <PlusCircleOutlined style={{ fontSize: '250%', margin: 10, color: "#c8c8c8" }} />
                        </div>
                        <hr className={styles.hr1} />
                    </div>
                </div>
            </div>
            <div className={styles.callDoctor}>
                <div className={styles.call1}>
                    <div>
                        <p>Take a discount for a child under 5 years of age,for the fist examination</p>
                    </div>

                    <div className={styles.call}>
                        <div>
                            <p style={
                                {
                                    marginTop: 40
                                }
                            }>50%</p>
                        </div>
                        <div>
                            <img className={styles.callImg} src="./img/clinic/call_removebg.png"
                                alt="/" height="45" width="auto" />
                        </div>
                    </div>
                </div>
                <div className={styles.call2}>
                    <div>
                        <img src="./img/clinic/no_bg_doctor.png" height="230" width="200" />
                    </div>
                    <div>
                        <div className={styles.doctorQuotes}>
                            <img src="./img/clinic/quote.png" alt="/"
                                height="20" width="auto" />
                            <h1>"Stand up to the sick s you world have them stand
                                up to you in the hour of illness</h1>
                        </div>
                        <span className={styles.dr}>Dr.Arti Sukhla</span>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Service;