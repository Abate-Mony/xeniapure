import Hero from "@/components/hero";
// import MiniService from "@/components/mini-service";
// import SliceThrough from "@/components/ui/slice-through";
// import { FrequentAskQuestion } from "@/sections/FAQs";
import OurProjectExample from "@/sections/our-project-section";
import ServiceSection from "@/sections/our-service-section";
// import { FrequentAskQuestion } from "@/sections/FAQs";
import RequestService from "@/sections/RequestToJoin";
import Stats from "@/sections/stats";
import Testimonial from "@/sections/Testimonials";
import WhyChooseUs from "@/sections/why-choose-us";
import WorkingProccess from "@/sections/WorkingProcess";
// import Stats from "@/sections/stats";

const Home = () => {
    return (
        <div
            className="min-h-screen"
        >

                 <Hero />
            {/* <MiniService /> */}
            <WhyChooseUs/>  
            <RequestService/>
            <Stats/>
            <ServiceSection/>
            <OurProjectExample/>
            <Testimonial />
            <WorkingProccess/>
         
        </div>
    )
}

export default Home
