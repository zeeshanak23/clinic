
import styles from '../styles/clinic.module.css'

const Reveiw = () => {
    return (
        <section>
            <div className={styles.sectionReveiw}>
                <div className={styles.reveiw}>
                    <div>
                        <h1 className={styles.reviewHeading}>Reveiw</h1>
                    </div>
                    <div>
                        <h1>Feedback from our <br /> favorite customers</h1>
                        <p>we treat our customers better than any <br /> other clinic.Thank
                            you
                            for being
                            with us!</p>
                    </div>
                    <div className={styles.r1}>
                        <span>All reveiws →</span>
                    </div>
                </div>
                <div className={styles.reveiw2}>
                    <div className={styles.round}>
                        <img src="./img/clinic/reveiw-icon.jpeg" height="120" width="120" />
                    </div>
                    <div>
                        <div className={styles.r1}>
                            <img src="./img/clinic/quote.png" height="20" width="auto" />
                        </div>
                        <div className={styles.doctorReveiw}> " I had a therapy consulation on <br /> october 24th and
                            was pleasantly <br />
                            surprised that i did not have <br /> astigmatism,which had been <br /> diagnosed for 8 years by
                            luxury <br /> opticians.I really enjoyed the <br /> attitude of the clients,everyone is <br />
                            smiling,the staff is young and <br /> humorous,they are helpful,drunk <br /> and reassuring."
                        </div>
                        <h1 className={styles.doctorReviewName}>Tannu Jha</h1>
                        <span style={{ color: "#c8c8c8" }}>5 days old</span>

                    </div>

                </div>
            </div>
        </section>
    )
}
export default Reveiw;