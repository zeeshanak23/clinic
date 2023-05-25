
import { ArrowRightOutlined, ArrowLeftOutlined, } from "@ant-design/icons"
import styles from '../styles/clinic.module.css'

const Blog = () => {
    return (
        <section className={styles.blogSection}>
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
        </section>
    )
}

export default Blog;