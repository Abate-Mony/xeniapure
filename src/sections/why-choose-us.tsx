import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
// import { BusIcon, PlaneIcon, ShipIcon } from '../assets/images'
import Heading, { VariantHeading } from '@/components/ui/heading'
import { animateHeadingVariants, pageAnimationVariantsTransiton } from '@/utils/framervariants'
import { Award, Clock, EclipseIcon, PillBottle, ShieldCheck, Smile } from "lucide-react"
export const whyChooseUs = [
    {
        title: "Trusted & Insured",
        description: "Your home is safe with us. Our team is insured, giving you peace of mind as we care for your space.",
        Icon: ShieldCheck,
    },
    {
        title: "Top-Quality Equipment",
        description: "We use premium, professional-grade cleaning tools and supplies to ensure a spotless job every time.",
        Icon: PillBottle,
    },
    {
        title: "On-Time, Every Time",
        description: "Our team values your time. We are committed to punctuality and efficient service without compromising quality.",
        Icon: Clock,
    },
    {
        title: "Customer-Centered Service",
        description: "Your satisfaction is our priority. We go above and beyond to deliver a cleaning experience tailored to your needs.",
        Icon: Smile,
    },
    {
        title: "Eco-Friendly Solutions",
        description: "We prioritize the environment by using eco-friendly products that are safe for you and the planet.",
        Icon: EclipseIcon,
    },
    {
        title: "Award-Winning Quality",
        description: "Recognized for excellence, our cleaning services have been awarded for outstanding performance and dedication.",
        Icon: Award,
    }
];
interface iService {
    hoveredIndex: number | null
    setHoveredIndex: React.Dispatch<React.SetStateAction<number | null>>,
    idx: number,
    content: typeof whyChooseUs[number]

}
const ServiceCard = ({
    setHoveredIndex,
    hoveredIndex,
    idx, content
}: iService) => {
    const { Icon, description, title } = content
    return (<motion.div
        onMouseEnter={() => setHoveredIndex(idx)}
        onMouseLeave={() => setHoveredIndex(null)}
        viewport={{ amount: 0.8 }}


        className='flex flex-col space-y-6 px-4 py-4 relative my-4b group bg-white shadow'>
        <AnimatePresence>
            {hoveredIndex === idx && (
                <motion.span
                    className="absolute inset-0 h-full w-full  block bg-primary-color/10  rounded-none"
                    // layoutId="hoverBackgroundhh" // required for the background to follow
                    initial={{ opacity: 0 }}
                    // layoutId
                    layoutId="hoverBackground"
                    // layout
                    animate={{
                        opacity: 1,
                        transition: { duration: 0.15 },
                    }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.15, delay: 0.2 },
                    }}
                />
            )}
        </AnimatePresence>
        <div className=' relative'>

            <motion.span
                initial="initial"
                whileInView="animate"
                variants={animateHeadingVariants}
                transition={{
                    ...pageAnimationVariantsTransiton,
                    delay: idx * 0.1

                }}
                className='  peer w-fit block lg:mx-0 mx-auto'

            >
                <Icon size={75} className='text-primary-color font-light' />

            </motion.span>
            {/* <span
                className='bg-yellow-400/85 h-16 w-12 left-0 hover:left-5
        peer-hover:left-5
        transtion-all duration-300 
        top-0 block z-30 absolute'
            /> */}
        </div>
        <Heading className='font-Marcellus+SC font-light text-lg lg:text-xl text-center sm:text-start'>
            {title}
        </Heading>
        <div >
            <p className='tracking-tighter line-clamp-4 leading-relaxed text-lg text-muted-foreground '> {description}</p>
        </div>
        <Link to="#"
            className='group-hover:translate-x-[2rem] transition-all duration-1000'
        >
            <Button variant="link"
                className='text-xl hidden  btn rounded-none relative z-30 font-bold hover:text-orange-500'
            >
                Read More
            </Button>

        </Link>

    </motion.div>)
}

const WhyChooseUs = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    return (
        <section className=' py-32 px-2'>
            <div className="max-w-6xl mx-auto">
                <VariantHeading className='text-center text-blue-950 py-6 gap-x-3 uppercase mb-6 flex items-center text-colorPrimary [font-family:var(--second-font)] font-black text-3xl lg:text-4xl max-w-fit mx-auto '>

                    <span
                        className='w-10  h-[1px] bg-primary-color/70 '
                    />  <span>         
                        WHY <span className='text-primary-color'>CHOOSE</span> US
                    </span>
                    <span
                        className='w-10  h-[1px] bg-primary-color '
                    />

                </VariantHeading>
                <div className='grid grid-cols-1 gap-x-3.5 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-3 items-center'>
                    {whyChooseUs.map((arr, idx) => <ServiceCard
                        hoveredIndex={hoveredIndex}
                        setHoveredIndex={setHoveredIndex}
                        key={idx}
                        idx={idx}
                        content={arr}

                    />)}
                </div>

            </div>
        </section>
    )
}

export default WhyChooseUs