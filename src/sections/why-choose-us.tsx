import { motion } from 'framer-motion'
import React, { useState } from 'react'
// import { BusIcon, PlaneIcon, ShipIcon } from '../assets/images'
import AnimatedHeadLessUi from '@/components/ui/AnimatedHeadlessUI'
import Heading, { VariantHeading } from '@/components/ui/heading'
import { animateHeadingVariants, pageAnimationVariantsTransiton } from '@/utils/framervariants'
import { Award, Clock, EclipseIcon, PillBottle, ShieldCheck, Smile } from "lucide-react"
import { cn } from '@/lib/utils'
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
    return (
        <AnimatedHeadLessUi
            layoutId="thecoderandthecodearethesamedd"
            key={idx}
            index={idx}
            hoverIndex={hoveredIndex}
            setHoverIndex={setHoveredIndex}
            animatedClassName="bg-primary-color/5"
            className=
            {cn("bg-white  gap-y-4 gap-x-3 px-4 py-4 relative my-4b group  shadow")}

        >

            <div className='flex flex-col gap-y-3'>

                <motion.span
                    initial="initial"
                    whileInView="animate"
                    variants={animateHeadingVariants}
                    transition={{
                        ...pageAnimationVariantsTransiton,
                        delay: idx * 0.01

                    }}
                    className='lg:group-hover:!translate-x-1/2 peer  w-fit block g:mx-0 mx-auto'
                
                >
                    <Icon size={75} className='text-primary-color font-light' />

                </motion.span>
                <Heading className='font-Marcellus+SC font-light text-lg lg:text-xl text-center sm:text-start'>
                    {title}
                </Heading>
                <div >
                    <p className='tracking-tighter line-clamp-4 leading-relaxed text-lg text-muted-foreground '> {description}</p>
                </div>
            </div>


        </AnimatedHeadLessUi>



    )
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