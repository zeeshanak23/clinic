
import styles from '../styles/clinic.module.css'
import React from 'react';
const Partner = () => {
    return (
        <section>
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
        </section>
    )
}

export default Partner;