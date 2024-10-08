import { AnimatedSlideText } from "@/components/Animated/animated"
import { Button } from "@/components/ui/button"
import Heading, { VariantHeading } from "@/components/ui/heading"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
const AboutUsComponent = () => {
    return (
        <div
            className='bg-white py-20 space-y-4'
        >
            <Heading
                className='text-center text-blue-800 font-black text-3xl max-w-fit mx-auto'>
                history

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
                <div className='sticky top-[4rem] lg:col-span-5'>
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
                        src={"/fon-01.jpg"}
                        className='w-full h-[20rem]  lg:h-[29rem] rounded-sm'
                        alt="" />
                </div>
                <div className='flex flex-col lg:col-span-7  space-y-4 px-2 pb-9 relative z-20 bg-white'>


                    <AnimatedSlideText text='The Fon ' inView className='text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-start text-blue-800'>

                    </AnimatedSlideText>
                    <p className="tracking-wide leading-8 pl-1
                    ">
                        The Kom tradition is deeply rooted in the reverence of the Fon, the ruler and spiritual leader of the Kom people, and the veneration of ancestral customs. The Fon holds a dual role in the community, not only as the political head but also as a spiritual intermediary between the people and their ancestors. This connection to the ancestors plays a crucial role in Kom society, where rituals, ceremonies, and communal gatherings are often organized to honor the spirits of those who came before.                    </p>
                    <Button className='btn max-w-fit'>
                        Read More
                    </Button>
                 
                </div>

            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 px-4 items-start  max-w-7xl mx-auto' >
                <div className='sticky top-[4rem]  lg:order-last'>
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
                        src={"https://loispiration.com/wp-content/uploads/2023/09/toghu-1776742398-e1693934791460.jpg"}
                        className='w-full h-[20rem]  lg:h-[29rem]  rounded-sm'
                        alt="" />
                </div>
                <div className='flex flex-col  space-y-4 px-2 pb-9 relative z-20 bg-white'>


                    <AnimatedSlideText text='The Kom tradition honors the Fon and ancestral customs.' inView className='text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-start'>

                    </AnimatedSlideText>
                    <p className="tracking-wide leading-8 pl-1
                    ">
                        The Kom tradition is deeply rooted in the reverence of the Fon, the ruler and spiritual leader of the Kom people, and the veneration of ancestral customs. The Fon holds a dual role in the community, not only as the political head but also as a spiritual intermediary between the people and their ancestors. This connection to the ancestors plays a crucial role in Kom society, where rituals, ceremonies, and communal gatherings are often organized to honor the spirits of those who came before.                    </p>
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