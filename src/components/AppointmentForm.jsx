import { Button, Form, Input } from "antd";
import styles from '../styles/clinic.module.css'
import React, { useEffect } from "react"


const AppointmentForm = () => {

    const onFinish = (data) => {
        console.log(data);
        fetch('/api/doctordate', {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        })
    };

    useEffect(() => {
        fetch('/api/doctordate').then(res => {
        })
    }, [])

    return (
        <section>
            <div className={styles.appointment}>
                <div className={styles.app1}>
                    <div className={styles.apointmentImg}>
                        <img src="./img/clinic/appointment.jpg" alt="logo" height="55" width="auto" />
                    </div>
                    <div>
                        <h1 style={{ margin: 50 }}>Make an appointment<br /> with a doctor</h1>
                    </div>
                </div>
                <div className={styles.app2}>
                    <h1>About yourself</h1>
                    <Form
                        name="data"
                        onFinish={onFinish}>
                        <div style={{ display: "flex" }}>
                            <Form.Item
                                name={["FullName"]}
                                style={{ width: 300 }}>
                                <Input className={styles.lastInput} />
                            </Form.Item>
                            <Form.Item
                                name={["number"]}
                                style={{ width: 300, marginLeft: 100 }}>
                                <Input className={styles.lastInput} type="number" placeholder="+91" />
                            </Form.Item>
                        </div>
                        <Form.Item
                            name={["email"]}
                            style={{ width: 300, }}>
                            <Input className={styles.lastInput} placeholder="Enter your mail" />
                        </Form.Item>
                        <h1 style={{ color: "white" }}>Admission Date</h1>
                        <div style={{ display: "flex" }}>

                            <Form.Item
                                name={["overveiw"]}
                                style={{ width: 300 }}>
                                <Input className={styles.lastInput} type="text" placeholder="Overveiw of specialization" />
                            </Form.Item>
                            <Form.Item
                                name={["Checkout"]}
                                style={{ width: 300, marginLeft: 100 }}>
                                <Input className={styles.lastInput} type="text" placeholder="Checkout the expert" />
                            </Form.Item>
                        </div>
                        <div>
                            <Form.Item
                                name={["date"]}
                                style={{ width: 300 }}>
                                <Input className={styles.lastInput} type="date" placeholder="date" />
                            </Form.Item>
                            <Form.Item
                                name={["time"]}
                                style={{ width: 300 }}>
                                <Input className={styles.lastInput} type="time" placeholder="time" />
                            </Form.Item>
                        </div>
                        <Form.Item>
                            <Button style={{ backgroundColor: "darkblue", borderRadius: 20 }} type="primary" htmlType="submit">Submit</Button>
                        </Form.Item>
                    </Form>

                </div>
            </div>
        </section>
    )
}

export default AppointmentForm;