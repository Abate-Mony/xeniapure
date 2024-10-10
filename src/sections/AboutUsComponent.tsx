// import { AnimatedSlideText } from "@/components/Animated/animated"
import { Button } from "@/components/ui/button"
import Heading, { VariantHeading } from "@/components/ui/heading"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
const AboutUsComponent = () => {
    return (
        <div
            className='bg-white py-20 space-y-4 bg-no-repeat bg-cover'
            style={{
                backgroundImage: "url(/statsbg.svg)"
                ,
                // clipPath: "polygon(19% 0, 99% 0, 100% 68%, 89% 100%, 1% 99%, 0 20%)"
            }}
        >
            <Heading
                className='text-center text-blue-800 font-black text-3xl max-w-fit mx-auto'>
                about us

            </Heading>
            <VariantHeading className='text-center text-blue-950 py-6 gap-x-3 uppercase mb-6 flex items-center text-colorPrimary [font-family:var(--second-font)] font-black text-3xl lg:text-4xl max-w-fit mx-auto '>

                <span
                    className='w-10  h-[1px] bg-primary-color/70 '
                />  <span>            OUR HISTORY AND CULTURE
                </span>
                <span
                    className='w-10  h-[1px] bg-primary-color '
                />

            </VariantHeading>
            <div className='grid grid-cols-1 lg:grid-cols-12 px-4 items-start  max-w-7xl mx-auto' >
                <div className='sticky top-[4rem] lg:block hidden lg:col-span-6'>
                    <motion.img
                        initial={
                            {
                                opacity: 0,
                                y: 50
                            }
                        }
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 1 }
                        }}
                        src={"/statue.jpg"}
                        className='w-full h-[20rem]  lg:h-[29rem] rounded-sm'
                        alt="" />
                </div>
                <div className='flex flex-col lg:col-span-6  space-y-4 px-2 pb-9 relative z-20 bg-white-'>


                    {/* <AnimatedSlideText text='The Fon ' inView className='text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-start text-blue-800'>

                    </AnimatedSlideText> */}
                    <p className="tracking-wide leading-relaxed pl-1
                    ">
                        Woinkom UK is a vibrant and active network of Kom people residing in the UK, deeply rooted in shared cultural values and traditions. We are united by a collective commitment to preserving our rich Kom heritage and passing it down to future generations. Through various community-driven events such as traditional ceremonies, cultural festivals, and educational programs, we aim to keep our traditions alive and relevant in a modern context.
Our network also places a strong emphasis on mentorship, fostering growth and development among younger members by connecting them with experienced Kom professionals across different sectors. We believe in creating a supportive environment where each member can thrive while staying connected to their roots. Beyond cultural preservation, Woinkom UK serves as a vital support system for its members, offering assistance in times of need, celebrating achievements, and building a sense of belonging among the diaspora.
Through our activities, we hope to maintain a strong connection between the Kom people in the UK and our homeland, ensuring that our customs, language, and stories are cherished and passed on.
                                                      </p>
                 <Link to={"/about-us"}>
                 <Button className='btn max-w-fit'>
                        Read More
                    </Button>
                 </Link>

                </div>

            </div>


        </div>
    )
}

export default AboutUsComponent