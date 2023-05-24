import { Button, Image } from "antd";
import styles from '../styles/clinic.module.css'
import React from "react";

const Hero = () => {
    return (
        <div>
            <div className={styles.hearnicFirstSection}>

                <img className={styles.hearnicImg}
                    src='./img/hearnic-background.jpeg' alt="logo" />
                <nav style={{
                    padding: 10,
                    width: 1200,
                    display: "flex",
                    placeItems: "center",
                    justifyContent: "space-between"
                }}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",

                    }}>
                        <img style={{
                            height: 45,
                            marginLeft: 10
                        }} src="./img/clinic/white-ear-logo.webp" alt="" />
                        <h2 style={{
                            color: "white",
                            padding: 15,
                            marginLeft: -10,
                        }}>HEARNIC</h2>
                    </div>
                    <div className={styles.navLinks}>
                        <a className={styles.selected} style={{
                            color: "black",
                            padding: 4
                        }}>Home</a>
                        <a href="#section-about-us">About us</a>
                        <a href="#section-specialist">Speacialist</a>
                        <a href="#section-doctor">Doctor</a>
                        <a href="#section-contact">Contact</a>
                        <a className={styles.contactNumber} href="tel:8908765678">91+8989765423</a>
                    </div>

                </nav>
                <div className={styles.quotes}>
                    <p>Over past decade, we have</p>
                    <p>provide hundreds of hearing</p>
                    <p>aids and speech therapy</p>
                    <p>provide hundreds of hearing</p>
                </div>
                <div className={styles.facts}>
                    <div>
                        <h1>Facts</h1>
                        <p>Premium equipment that meets state-of-the-art in <br /> the hearing industry</p>
                        <hr />
                        <p>Profeesional in their field,who can be trusted and <br /> get the best results</p>
                    </div>
                    <div className={styles.hearnicAppoint} >
                        <Image style={{
                            height: 40,
                            borderRadius: 100
                        }} src="./img/clinic/old-man-1.jpeg" alt="1" />
                        <Image style={{
                            height: 40,
                            borderRadius: 100,
                            marginLeft: -5
                        }} src="./img/clinic/old-man-2.jpeg" alt="2" />
                        <Image style={{
                            height: 40,
                            borderRadius: 100,
                            marginLeft: -5
                        }} src="img/clinic/old-man-3.jpeg" alt="3" />
                        <Image style={{
                            height: 40,
                            borderRadius: 100,
                            marginLeft: -6
                        }} src="img/clinic/old-man-4.jpeg" alt="4" /> <br />
                        <span><b>1000+</b></span><br />
                        <span>Satisfied patient</span>


                        <div className={styles.lastSentence}>Take the discount for the first
                            visit of an audiologist
                        </div>

                        <div className={styles.hearnicLast}>
                            <span >20%</span>
                            <Button type="primary" style={{
                                backgroundColor: "white",
                                color: "black"
                            }}>Make an appointment</Button>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Hero;