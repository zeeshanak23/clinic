import { Button, Form, Input } from "antd";
import { ArrowUpOutlined, CopyrightOutlined } from "@ant-design/icons"
import styles from '../styles/clinic.module.css'
import React, { useEffect } from "react"

const ContactForm = () => {

    const onDone = (hearnicForm) => {
        console.log(hearnicForm);
        fetch('/api/appointment', {
            method: "POST",
            body: JSON.stringify(hearnicForm),
            headers: { "Content-Type": "application/json" },
        })
    };

    useEffect(() => {
        fetch('/api/appointment').then(res => {
        })
    }, [])
    return (
        <section>
            <div className={styles.terms}>
                <div className={styles.top}>
                    <div className={styles.twoLast}>
                        <div>
                            <img src="./img/clinic/white-ear-logo.webp" height="55px" width="auto" />
                        </div>
                        <div>
                            <h1>Hearnic</h1>
                            <p>Medical clinic</p>
                        </div>
                    </div>
                    <div>
                        <ArrowUpOutlined style={{ padding: 20 }} className={styles.upArrow} />
                    </div>

                </div>
                <div>
                    <Form
                        name="hearnicForm"
                        onFinish={onDone}>
                        <h1 style={{ padding: 20, color: "white" }}>We'll call you back</h1>
                        <div style={{ display: "flex", justifyContent: "space-between", marginLeft: 20 }}>
                            <Form.Item
                                name={["fullName"]}
                                style={{
                                    width: 330,
                                }}>
                                <Input className={styles.lastInput} lassName={styles.lastInput} placeholder="Name" />
                            </Form.Item>
                            <Form.Item
                                name={["reasonForcall"]}
                                style={{
                                    width: 330,
                                }}
                            >
                                <Input className={styles.lastInput} placeholder="What do you want to call"></Input>
                            </Form.Item>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", color: "white", marginLeft: 20 }}>
                            <Form.Item
                                name={["topic"]}
                                style={{
                                    width: 330,
                                }}>
                                <Input className={styles.lastInput} placeholder="Cover the topic of the article" />
                            </Form.Item>
                            <Form.Item
                                name={["contact"]}
                                style={{
                                    width: 330,
                                }}>
                                <Input type="number" className={styles.lastInput} placeholder="+91"></Input>
                            </Form.Item>
                        </div>
                        <Form.Item>
                            <Button style={{ borderRadius: 20, marginLeft: 20, backgroundColor: "darkblue" }} type="primary" htmlType="submit">Submit</Button>
                        </Form.Item>
                    </Form>
                </div>
                <div className={styles.socailMedia}>
                    <div>
                        <div className={styles.sitemap}>
                            <h1>Site Map</h1>
                            <span>
                                <p>Home</p>
                                <p>Service</p>
                                <p>Contact</p>
                                <p>Gallery</p></span>
                            <span>
                                <p>Home</p>
                                <p>Service</p>
                                <p>Contact</p>
                                <p>Gallery</p></span>
                            <div style={{ display: "flex", marginLeft: 15, }}>
                                <CopyrightOutlined />
                                <p style={{ marginLeft: 10 }}>Hearnic:All right reserved</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.lastPageQuotes}>
                            <h1>We Are On Social Media</h1>
                        </div>
                        <div style={{ marginLeft: 50, marginTop: 10, marginBottom: 20 }} className={styles.roundImage}>
                            <img src="./img/clinic/twitter.png" alt="social-media" />
                            <img src="./img/clinic/whatsapp.png" alt="social-media" />
                            <img src="./img/clinic/link.png" alt="link" />
                            <img src="./img/clinic/telegram.webp" alt="social-media" />
                        </div>
                        <div >
                            <span style={{ marginRight: 30, }}>Privacy policy</span>

                            <span>Terms & Conditions</span>
                        </div>
                    </div>
                </div>
            </div >
        </section>
    )
}

export default ContactForm;