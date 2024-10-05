import React, { useState } from 'react'
// import Heading, { VariantHeading } from '../components/Heading'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { animateHeadingVariants, pageAnimationVariantsTransiton } from '@/utils/framervariants';
import Heading, { VariantHeading } from '@/components/ui/heading';
import { ArrowRight } from 'lucide-react';
// import { BusIcon, PlaneIcon, ShipIcon } from '../assets/images'
// import { animateHeadingVariants, pageAnimationVariantsTransiton }
export const contents = [
    {
        title: "Njang Dance Festival",
        description: "The Njang Dance is one of Kom's oldest traditional dances, performed during celebrations and important communal events. This festival features vibrant costumes, energetic drumming, and graceful dance movements, showcasing the rich cultural heritage of the Kom people.",
        Icon: "https://i.etsystatic.com/35094667/r/il/e632d0/4242903236/il_300x300.4242903236_50zr.jpg",
    },
    {
        title: "Fon’s Ancestral Feast",
        description: "This sacred event honors the Kom ancestors and is led by the Fon, the spiritual leader. It is marked by rituals, offerings, and special performances. This gathering strengthens the community's connection to its heritage, with participants paying respect to the spirits of their forebears.",
        Icon: "https://loispiration.com/wp-content/uploads/2023/09/toghu-4.jpg?w=829",
    },
    {
        title: "Laikom Palace Tour",
        description: "A special event where visitors can explore the sacred Laikom Palace, home of the Fon and the spiritual heart of the Kom people. This tour provides an in-depth look at the historical and cultural significance of the palace and the leadership of the Fon.",
        Icon: "https://www.africacentre.org.uk/images/757cef11-eeb1-4a5c-98c5-bdac96e639d8/cropped?width=600&height=338",
    },
    {
        title: "Kom Cultural Crafts Fair",
        description: "An exhibition and sale of traditional Kom crafts such as pottery, wood carvings, and beadwork. This fair is a platform for artisans to showcase their skills and for visitors to learn about Kom's artistic traditions. It also includes live demonstrations and cultural storytelling.",
        Icon: "https://loispiration.com/wp-content/uploads/2023/09/toghu-1776742398-e1693934791460.jpg",
    }
];

interface iService {
    hoveredIndex: number | null
    setHoveredIndex: React.Dispatch<React.SetStateAction<number | null>>,
    idx: number,
    content: typeof contents[number]

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


        className='flex flex-col space-y-6 px-4 py-4 relative my-4b group'>
        <AnimatePresence>
            {hoveredIndex === idx && (
                <motion.span
                    className="absolute inset-0 h-full w-full  block bg-yellow-600/10  rounded-none"
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
        <div className=' relative pt-10'>

            <motion.img
                initial="initial"
                whileInView="animate"
                variants={animateHeadingVariants}
                transition={{
                    ...pageAnimationVariantsTransiton,
                    delay: idx * 0.3

                }}
                className='  peer mx-auto w-full max-w-64 h-64'
                src={Icon}
            />
            <span
                className='bg-yellow-400/15 h-16 w-12 left-0 hover:left-5
        peer-hover:left-5
        transtion-all duration-300 
        top-0 block z-30 absolute'
            />
        </div>
        <Heading className='font-medium text-lg lg:text-xl text-center sm:text-start'>
            {title}
        </Heading>
        <div >
            <p className='tracking-tighter leading-relaxed text-sm text-muted-foreground '> {description}</p>
        </div>
        <Link to="#"
            className='group-hover:translate-x-[2rem] transition-all duration-1000'
        >
            <Button variant="link"
                className='text-lg hidden- font-poppins  btn rounded-none relative z-30 font-bold hover:text-orange-500'
            >
                Read More <ArrowRight size={20}/>
            </Button>

        </Link>

    </motion.div>)
}

const EventSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    return (
        <section className='bg-green-50 py-32'>
            <div className="max-w-6xl mx-auto">
            <VariantHeading className='text-center text-blue-950 py-6 gap-x-3 uppercase mb-6 flex items-center text-colorPrimary [font-family:var(--second-font)] font-black text-3xl lg:text-4xl max-w-fit mx-auto '>

                <span
                    className='w-10  h-[1px] bg-primary-color/70 '
                />  <span>          LATEST AND FUTURE EVENTS
                </span>
                <span
                    className='w-10  h-[1px] bg-primary-color '
                />

            </VariantHeading>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center'>
                    {contents.map((arr, idx) => <ServiceCard
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

export default EventSection