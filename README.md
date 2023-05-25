<h1>Create a NextJs Project using ANTD design</h1>

<p>First of all we have to setup nextjs app</p>
<p>By using this below steps you easily setup nextjs project</p>

## 📦 Install

```bash
npx create-next-app@latest
```

Run the development server

```bash
npm run dev
```

<h1>ANTD DESIGN</h1>
<p align="center">
  <a href="https://ant.design">
    <img width="200" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg">
  </a>
</p>
<p>Ant Design React is dedicated to providing a good development experience for programmers</p>
<p>An enterprise-class UI design language</p>

Installation ANTD design by using below commands:-
```bash
npm install antd
```
## Import in Browser
Add script and link tags in your browser and use the global variable antd.

## ✨ Features

- 🌈 Enterprise-class UI designed for web applications.
- 📦 A set of high-quality React components out of the box.
- 🛡 Written in TypeScript with predictable static types.
- ⚙️ Whole package of design resources and development tools.
- 🌍 Internationalization support for dozens of languages.
- 🎨 Powerful theme customization based on CSS-in-JS.

# create a JSX file for each components
## 🔨 Usage

```jsx
import { Button, Form, Input } from "antd";
import styles from '../styles/clinic.module.css'
import React, { useEffect } from "react"


const AppointmentForm = () => {

    const onFinish = (data) => {
        console.log(data);
        fetch('/api/AppointmentForm', {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        })
    };

    useEffect(() => {
        fetch('/api/AppointmentForm').then(res => {
        })
    }, [])

    return (
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
                    </Form>

                </div>
            </div>
        </section>
    )
}

export default AppointmentForm;
```
# Above is the example of AppointmentForm and based on the UI Design created the components and add antd design and css rule for designing the UI part.

## 🔨 Render it in index.js
```jsx
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta />
        <meta />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <"FileName" />
      </main>
    </>
  )
  ```

  ## ⌨️ Development
```bash
npm start dev
```

## Open your browser and visit http://localhost:3000/ 