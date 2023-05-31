import AboutUs from '@/components/AboutUs'
import AppointmentForm from '@/components/AppointmentForm'
import Blog from '@/components/Blog'
import ContactForm from '@/components/ContactForm'
import Doctor from '@/components/Doctor'
import Faq from '@/components/Faq'
import Gallery from '@/components/Gallery'
import Hero from '@/components/Hero'
import Partner from '@/components/Partner'
import Reveiw from '@/components/Review'
import Service from '@/components/Service'
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