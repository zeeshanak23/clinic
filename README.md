<h1>Create a NextJs Project using ANTD design</h1>

![Screenshot (208)](https://github.com/zeeshanak23/clinic/assets/122259738/3c063986-1128-4b5d-a502-a447b1c33e0a)
![Screenshot (209)](https://github.com/zeeshanak23/clinic/assets/122259738/60c51b2f-68c0-4090-89fc-e4cef8d6e739)
![Screenshot (210)](https://github.com/zeeshanak23/clinic/assets/122259738/1a65082a-d81c-4149-8366-29d7ae6ecaec)
![Screenshot (211)](https://github.com/zeeshanak23/clinic/assets/122259738/f7d56288-2f3f-4df2-8df7-ac8204e8df5c)
![Screenshot (212)](https://github.com/zeeshanak23/clinic/assets/122259738/4250ea67-df0d-4f91-905c-38a15090f14d)
![Screenshot (213)](https://github.com/zeeshanak23/clinic/assets/122259738/65b03a8f-5940-4634-83bb-9ef8182a1525)
![Screenshot (214)](https://github.com/zeeshanak23/clinic/assets/122259738/1fa6cd91-8170-4dca-9648-e643a6ed80c0)
![Screenshot (215)](https://github.com/zeeshanak23/clinic/assets/122259738/fd9f3e26-b9d1-4eb3-a11b-c87fd14cf5c6)
![Screenshot (216)](https://github.com/zeeshanak23/clinic/assets/122259738/4b04e089-b401-465e-8ae5-5d7301170ea3)
![Screenshot (219)](https://github.com/zeeshanak23/clinic/assets/122259738/4ef6414f-20cd-448f-bdfb-6d4021cf0730)
![Screenshot (218)](https://github.com/zeeshanak23/clinic/assets/122259738/28c7f76f-e0bf-4380-bc3a-328bd6fdda0f)


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

## Installation ANTD design by using below commands:-
```bash
npm install antd
```
## Import in Browser
Add script and link tags in your browser and use the global variable antd.

## ✨ Features

- 📦 A set of high-quality React components out of the box.
- 🛡  Subtleties.
- 🌈 Enterprise-class UI designed for web applications.
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

We can also created a api file inside the API folder (ex-AppointmentForm.js)
Inside that file we can able to fetch the data and transfer into mysql database table 

## Created a API file
## 🔨 Usage
```jsx
import mysql from 'mysql2';
import 'antd/dist/reset.css';

const connection = mysql.createConnection({
    user: process.env.DB_HOST,
    password: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: "clinic"
});

connection.connect((err) => {
    if (err) {
        console.log(err)
    }
})
export default async function handler(req, res) {
    const { FullName, number, email, overveiw, Checkout, date, time } = await req.body
    const dataTrnsfer = `INSERT INTO doctordate(FullName,number,email,overveiw,Checkout,date,time)
    VALUES("${FullName}","${number}","${email}","${overveiw}","${Checkout}","${date}","${time}")`
    connection.query(dataTrnsfer, function (err, result) {
        if (err) console.log(err);
        return res.status(200).json(result)
    });
}
```
# Features of API
- [Home page](https://ant.design/)
APIs are mechanisms that enable two software components to communicate with each other using a set of definitions and protocols.

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
## 🌍 Internationalization
Dozens of languages are supported in `antd`, see [i18n](https://ant.design/docs/react/i18n).

  ## ⌨️ Development
```bash
npm start dev
```

## Open your browser and visit http://localhost:3000/ 
