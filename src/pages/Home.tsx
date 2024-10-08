import ShiftingCountdown from "@/components/count-down";
import Hero from "@/components/hero";
import AboutUsComponent from "@/sections/AboutUsComponent";
import OurCulturalExample from "@/sections/CulturalExample";
import EventSection from "@/sections/Events";
import { FrequentAskQuestion } from "@/sections/FAQs";
import OurVision from "@/sections/OurVision";
import RequestService from "@/sections/RequestToJoin";
import Stats from "@/sections/stats";

const Home = () => {
    return (
        <div
            className="min-h-screen"
        >
            <Hero />

            {/* <div className="mb-4" /> */}
          
            <ShiftingCountdown/>
            <OurVision />
            <Stats />
            <AboutUsComponent />
            <RequestService/>
            {/* <DisplayCulturalImage /> */}
            <OurCulturalExample />
            <FrequentAskQuestion/>
            <EventSection/>
        </div>
    )
}

export default Home
