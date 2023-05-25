import AboutUs from '@/components/AboutUs'
import AppointmentForm from '@/components/appointmentForm'
import Blog from '@/components/blog'
import ContactForm from '@/components/contactForm'
import Doctor from '@/components/doctor'
import Faq from '@/components/faq'
import Gallery from '@/components/gallery'
import Hero from '@/components/hero'
import Partner from '@/components/partner'
import Reveiw from '@/components/review'
import Service from '@/components/service'
import 'antd/dist/reset.css';
const Hearnic = () => {
    return (
        <div>
            <Hero />
            <AboutUs />
            <Gallery />
            <Service />
            <Doctor />
            <Reveiw />
            <AppointmentForm />
            <Faq />
            <Partner />
            <Blog />
            <ContactForm />
        </div>
    )
}
export default Hearnic;