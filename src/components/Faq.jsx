import { PlusCircleOutlined } from "@ant-design/icons"
import styles from '../styles/clinic.module.css'

const Faq = () => {
    return (
        <section>
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
        </section>
    )
}
export default Faq;