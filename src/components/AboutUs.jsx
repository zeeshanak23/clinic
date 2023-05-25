import { Button, Image, } from "antd";
import styles from '../styles/clinic.module.css'

const AboutUs = () => {
    return (
        <section className={styles.aboutSection}>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                padding: 20,
            }}>
                <div>
                    <span style={{
                        fontSize: 15,
                        padding: 20,
                    }}><b>About us</b></span>
                </div>
                <div style={{
                    padding: 10
                }}>
                    <h1>Audiologist Hearing
                    </h1><h1> Clinic Dhanbad</h1>
                    <span>The Modern Hearnic Clinic is one of <br /></span>
                    <span>the best Modern hearing aid and speech <br /></span>
                    <span>therapy Clinic in
                        Dhanbad</span> <br />
                    <Button type="primary" shape="round"
                        style={{
                            backgroundColor: "black",
                            marginTop: 10
                        }}>
                        Learn More
                    </Button>

                </div>
                <Image style={{
                    height: 200,
                    width: 400, marginTop: 10
                }} src="./img/clinic/aboutus.jpg" alt="" />
            </div>
            <div style={{ display: "flex" }}>
                <div style={{
                    display: "flex",
                    padding: 30,
                    marginTop: 160,
                    width: 800,
                }}>
                    <div className={styles.arrowImg}>
                        <Image className={styles.arrow}
                            height={50} src="img/clinic/arror-nobg-right.png" alt="img" />
                    </div>
                    <div className={styles.aboutusLine}>
                        <h1>Hearing problem resolving <br /> of any complexity at a <br />
                            fixed price
                        </h1>
                    </div>
                </div>
                <div className={styles.arrowQuotes}>
                    <div className={styles.aboutList}>
                        <div>
                            <h1>01</h1>
                            <hr />
                            <p>we use modern <br></br> equipment</p>
                        </div>
                        <div>
                            <h1>02</h1>
                            <hr />
                            <p>The result meets all expectations</p>
                        </div>
                    </div>
                    <div className={styles.aboutList}>
                        <div>
                            <h1>03</h1>
                            <hr />
                            <p>we have the best  Profeesional  working</p>
                        </div>
                        <div>
                            <h1>04</h1>
                            <hr />
                            <p>we train our own  Speacialist</p>
                        </div>
                    </div>
                    <div className={styles.aboutList}>
                        <div>
                            <h1>05</h1>
                            <hr />
                            <p>Individual contract  with the client</p>
                        </div>
                        <div>
                            <h1>06</h1>
                            <hr />
                            <p>we have indian  certificate</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutUs;