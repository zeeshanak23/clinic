import { Button, Form, Input, Modal } from "antd";
import styles from '../styles/clinic.module.css'
import React, { useEffect, useState } from "react"
import 'antd/dist/reset.css';


const AppointmentForm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const okButtom = () => {
        setIsModalOpen(false);
    };

    const onFinish = (data) => {
        console.log(data)
        fetch('/api/doctorAppointment', {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        })
    };

    useEffect(() => {
        fetch('/api/doctorAppointment').then(res => {
        })
    }, [])

    return (
        <>
            <section className={styles.appointmentSection}>
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
                                    name={["name"]}
                                    style={{ width: 300 }}>
                                    <Input placeholder="Full Name" className={styles.lastInput} />
                                </Form.Item>
                                <Form.Item
                                    name={["phoneNumber"]}
                                    style={{ width: 300, marginLeft: 100 }}>
                                    <Input className={styles.lastInput} type="number" placeholder="+91" />
                                </Form.Item>
                            </div>
                            {/* <Form.Item
                                name={["email"]}
                                style={{ width: 300, }}>
                                <Input className={styles.lastInput} placeholder="Enter your mail" />
                            </Form.Item> */}
                            <h1 style={{ color: "white" }}>Admission Date</h1>
                            <div style={{ display: "flex" }}>

                                {/* <Form.Item
                                    name={["overveiw"]}
                                    style={{ width: 300 }}>
                                    <Input className={styles.lastInput} type="text" placeholder="Overveiw of specialization" />
                                </Form.Item> */}
                                {/* <Form.Item
                                    name={["Checkout"]}
                                    style={{ width: 300, marginLeft: 100 }}>
                                    <Input className={styles.lastInput} type="text" placeholder="Checkout the expert" />
                                </Form.Item> */}
                            </div>
                            <div>
                                <Form.Item
                                    name={["date"]}
                                    style={{ width: 300 }}>
                                    <Input className={styles.lastInput} type="date" placeholder="date" />
                                </Form.Item>
                                <Form.Item
                                    name={["location"]}
                                    style={{ width: 300 }}>
                                    <Input className={styles.lastInput} type="text" placeholder="location" />
                                </Form.Item>
                            </div>
                            <Form.Item>
                                <Button style={{ backgroundColor: "darkblue", borderRadius: 20 }} type="primary" htmlType="submit" onClick={showModal}>Submit</Button>
                            </Form.Item>
                            <Modal title="Successfully register" cancelButtonProps={{ style: { display: 'none' } }} open={isModalOpen} onOk={okButtom}>
                                <p>We will call you back</p>
                            </Modal>
                        </Form>
                    </div>

                </div >
            </section >
        </>
    )
}

export default AppointmentForm;