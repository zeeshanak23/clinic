
import styles from '../styles/clinic.module.css'

const Gallery = () => {
    return (
        <section>
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
        </section>
    )
}
export default Gallery;