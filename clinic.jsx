import { Anchor, Button, Image, Form, Input } from "antd";
import { PlusCircleOutlined, ArrowRightOutlined, ArrowUpOutlined, ArrowLeftOutlined, CopyrightOutlined } from "@ant-design/icons"
import { Content } from "next/font/google";
import React from "react"
import styles from '../styles/clinic.module.css'
const onFinish = (data) => {
    console.log(data);
};
const onDone = (hearnicForm) => {
    console.log(hearnicForm);
};

const File = () => {
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
                    {/* <div
                        style={{
                            color: "white",
                            fontSize: 22
                        }}>
                        <Anchor
                            style={{
                                color: "white",
                                fontSize: 22
                            }}
                            direction="horizontal"

                            items={[
                                {
                                    key: 'Home',
                                    href: '#Home',
                                    title: 'Home',
                                },
                                {
                                    key: 'About us',
                                    href: 'About us',
                                    title: 'About us',
                                },
                                {
                                    key: 'Speacialist',
                                    href: 'Speacialist',
                                    title: 'Speacialist',
                                },
                                {
                                    key: 'Doctor',
                                    href: 'Doctor',
                                    title: 'Doctor',
                                },
                                {
                                    key: 'Contact',
                                    href: 'Contact',
                                    title: 'Contact',
                                },
                                {
                                    key: '91+8989765423',
                                    href: '91+8989765423',
                                    title: '91+8989765423',
                                },
                            ]}
                        />
                        <div
                            style={{
                                color: "white",
                                fontSize: 22,

                            }}>
                            <div
                                id="Home"
                                style={{
                                    color: "red",
                                    textAlign: 'center',
                                    background: '#F4EAD5'
                                }}
                            />
                            <div
                                id="About us"

                            />
                            <div
                                id="Speacialist"
                            />
                            <div
                                id="Doctor" />
                            <div
                                id="Contact"
                            />
                            <div
                                id="91+8989765423"
                            />
                        </div>
                    </div> */}
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
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                padding: 20,
            }}>
                <div>
                    <span style={{
                        fontSize: 20,
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

            <div className={styles.sectionGallery}>
                <div className={styles.gallery}>
                    <div>
                        <h1 className={styles.galleryHeading}>Gallery</h1>
                    </div>
                    <div className={styles.gallery_middle_part}>
                        <h1><b>Check out our clinic <br /> great gallery</b></h1>
                        <div className={styles.clinicGallery}>
                            <div>#clinic</div>
                            <div>#Audiology</div>
                            <div>#Therapy</div>

                        </div>
                        <div className={styles.clinicGallery}>
                            <div>#Truthfulness</div>
                            <div>#Trust</div>
                        </div>
                    </div>
                    <div className={styles.pngImage}>
                        <img src="./img/clinic/twitter.png" />
                        <img src="./img/clinic/facebook.webp" />
                        <img src="./img/clinic/telegram.webp" />
                        <img src="./img/clinic/whatsapp.png" />
                    </div>
                </div>

                <div className={styles.gallertImg}>
                    <div>
                        <img src="./img/clinic/therapy-collection.webp" alt="therapy" height="450" width="435" />
                        <p><b>01 / Collection of therapy</b></p>
                        <p1> The boy got a 50% discount</p1>
                    </div>
                    <div style={{ marginTop: 210, marginLeft: 30, marginRight: 30 }} className={styles.drag}>
                        <span >
                            Drag
                        </span>
                    </div>
                    <div>
                        <img src="./img/clinic/portrait.2jpeg.jpg" alt="portrait2" height="350" width="430" />
                        <p><b>02 / Therapy equipment</b></p>
                        <p>Best equipment for therapy</p>
                    </div>
                </div>
            </div>
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
                                name={["Full Name"]}
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


            <div className={styles.faq1}>
                <div>
                    <h1 className={styles.faqHeading}>FAQ</h1>
                </div>
                <div>
                    <div style={{ padding: 20, marginLeft: 30 }}>
                        <h1>Question from <br />our clients</h1>
                    </div>
                    <div className={styles.faqList}>
                        <div className={styles.f1}>
                            <h1>Is it possible to pay for clinic services at the expense of the organization?</h1>
                            <PlusCircleOutlined style={{ fontSize: '250%', margin: 10, color: "#c8c8c8" }} />
                        </div>
                        <hr className={styles.hr} />
                        <div className={styles.f1}>
                            <h1>Where can i find information about the licenses of the clinic</h1>
                            <PlusCircleOutlined style={{ fontSize: '250%', margin: 10, color: "#c8c8c8" }} />
                        </div>
                        <hr className={styles.hr} />
                        <div className={styles.f1}>
                            <h1>Are there any discount available?</h1>
                            <PlusCircleOutlined style={{ fontSize: '250%', margin: 10, color: "#c8c8c8" }} />
                        </div>
                        <hr className={styles.hr} />
                        <div className={styles.f1}>
                            <h1>Does"Hearnic"clinic provide treatment on credit?</h1>
                            <PlusCircleOutlined style={{ fontSize: '250%', margin: 10, color: "#c8c8c8" }} />
                        </div>
                        <hr className={styles.hr} />

                    </div>
                </div>
            </div>
            <div>
                <div className={styles.Partner}>
                    <div>
                        <h1 className={styles.partnerHeading}>Partners</h1>
                    </div>
                    <div className={styles.partnerQuotes}>
                        <h1>We work with <br />these partners</h1>
                    </div>
                </div>

                <div className={styles.pharmaCompany}>
                    <div>
                        <img className={styles.brandLogo} src="./img/clinic/sun_pharma.png" alt="sun" />
                    </div>
                    <div>
                        <img className={styles.brandLogo} src="./img/clinic/reddy.png" alt="reddy" />
                    </div>
                    <div>
                        <img className={styles.brandLogo} src="./img/clinic/alken_new.jpg" alt="alkem" />
                    </div>
                    <div>
                        <img className={styles.brandLogo} src="./img/clinic/cipla.png" alt="cipla" />
                    </div>
                    <div>
                        <img className={styles.brandLogo} src="./img/clinic/bicon.png" alt="biocon" />
                    </div>
                </div>
            </div>
            <div className={styles.blog}>
                <div>
                    <h1 className={styles.blogHeading}>Blog</h1>
                </div>
                <div className={styles.blogLines}>
                    <h1>You may be<br /> interested to know</h1>
                </div>
                <div className={styles.arrowImages}>
                    <ArrowRightOutlined style={{ padding: 30 }} className={styles.arrow} />
                    <ArrowLeftOutlined style={{ padding: 30 }} className={styles.arrow} />
                </div>
            </div>
            <div className={styles.blog2}>
                <div>
                    <div>
                        <img src="./img/clinic/ear-patient.jpeg" alt="ear" height="180" width="320" />
                    </div>
                    <div className={styles.blogItem}>
                        <div>therapy</div>
                        <div>Audiologist</div>

                    </div>
                    <div className={styles.blogEquipment}>Hearing aid</div>
                    <div className={styles.blogSentence}>
                        <h1>The modern benchmark for<br /> therapy in 2023</h1>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="./img/clinic/portrait.2jpeg.jpg" alt="equipment" height="180" width="490" />
                    </div>
                    <div className={styles.blogItem}>
                        <div>Equipment</div>
                        <div>speech therapy</div>

                    </div>
                    <div className={styles.blogEquipment}>What is asnd</div>
                    <div className={styles.blogSentence}>
                        <h1>What is better to choose in the<br /> opinion of a practitioner:Audiotherapy?</h1>
                    </div>
                </div>
            </div>
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
                                name={["name"]}
                                style={{
                                    width: 330,
                                }}>
                                <Input className={styles.lastInput} placeholder="Name" />
                            </Form.Item>
                            <Form.Item
                                name={["reason for call"]}
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
                                name={["number"]}
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
        </div >

    )
}
export default File;