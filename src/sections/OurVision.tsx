import React, { useState } from 'react'
// import Heading, { VariantHeading } from '../components/Heading'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '../components/ui/button'

import { useMediaQuery } from 'react-responsive'
// import { BlackKeyBoard, CartoonKeyBoard, ManTyping, WomanTyping } from '../assets/images'
import { VariantHeading } from '@/components/ui/heading'
import { AnimatedSlideText } from '../components/Animated/animated'
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

];
interface iService {
    hoveredIndex: number | null
    setHoveredIndex: React.Dispatch<React.SetStateAction<number | null>>,
    idx: number,
    content: typeof contents[number],
    setSelectedId: any

}
const ServiceCard = ({
    setHoveredIndex,
    hoveredIndex,
    idx, content,
    setSelectedId
}: iService) => {
    const isDesktop = useMediaQuery({ query: "(min-width: 768px)" })

    const { Icon, description, title } = content
    return (<motion.div
        layoutId={title}
        onMouseEnter={() => setHoveredIndex(idx)}
        onMouseLeave={() => setHoveredIndex(null)}
        viewport={{ amount: 0.3, once: true }}
        // whileInView="animate"
        // variants={
        //   isDesktop ?
        //     animateHeadingVariants : animateHeadingVariants2(idx)}
        // initial="initial"
        initial={{
            //defines the initial animation
            opacity: 0.6,
            x: !isDesktop ? (idx % 2) ? -100 : 100 : 0,
            y: isDesktop ? 50 + idx * 40 : 0

        }}
        whileInView={{
            opacity: 1,
            x: 0,
            y: 0
        }}
        transition={{
            delay: isDesktop ? idx * 0.1 : 0,
            duration: 0.5
        }}
        className='flex flex-col border px-0  rounded-md shadow-lg  w-full
        space-y-2   relative my-4b group mx-auto flex-none pb-10 bg-white '>
        <AnimatePresence>
            {hoveredIndex === idx && (
                <motion.span
                    className="absolute inset-0 rounded-md    bg-primary-color/10 "
                    // layoutId="hoverBackgroundhh" // required for the background to follow
                    initial={{ opacity: 0 }}
                    // layoutId
                    layoutId="hoverBackground222222"
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
        <div className=' relative   overflow-hidden h-[20rem] sm:h-72 '>

            <motion.img

                className='group-hover:scale-125- hidden lg:block transition-all duration-500 peer size-full object-fit '
                src={Icon}
            />
            <img
                className='group-hover:scale-125- lg:hidden transition-all duration-500 peer size-full object-cover '
                src={Icon}
            />

        </div>
     <div className='pl-1.5 px-2'>

     <VariantHeading className='font-black text-blue-950 text-2xl mb-2'>
            {title}:
        </VariantHeading>
        <p>
            {description}

        </p>
        <ol className='list-disc pl-6 '>
            {Array.from({ length: 2 }, (_arr, idx) => <li
                className='text-sm'
                key={idx}>
                Lorem ipsum dolor sit amet consectetur.
            </li>)}
        </ol>
     </div>

        <Button
            onClick={() => {
                setSelectedId(content)
            }}
            className='block mx-auto relative z-50 my-4 hover:bg-colorPrimary hover:text-white transition-colors duration-300 shadow rounded-none bg-transparent text-colorPrimary border w-[min(20rem,calc(100%-1rem))] border-colorPrimary'>Learn More</Button>


    </motion.div>)
}

const OurVision = () => {

    const [selectedId, setSelectedId] = useState<typeof contents[number] | null>(null)
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    React.useEffect(() => {
        if (selectedId) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"

        }
    }, [selectedId])
    return (
        <section className='bg-white- py-32 overflow-hidden'
            id='ourservices'
        >
            <div className="max-w-7xl mx-auto px-4">
                <VariantHeading className='text-center gap-x-3 uppercase mb-6 flex items-center text-colorPrimary [font-family:var(--second-font)] font-black text-3xl lg:text-4xl max-w-fit mx-auto'>

                    <span
                        className='w-10  h-[1px] bg-colorPrimary/70 '
                    />  <span>OUR Tradition</span>
                    <span
                        className='w-10  h-[1px] bg-colorPrimary '
                    />

                </VariantHeading>
                <AnimatedSlideText inView
                    text="Your one Stop Printing solution - Explore our services"
                    className='text-center text-blue-950 font-black mb-6 text-xl lg:text-2xl max-w-3xl mx-auto '>

                </AnimatedSlideText>
                {/* {JSON.stringify(selectedId)} */}
                <AnimatePresence>
                    {selectedId && (
                        <div
                            onClick={() => setSelectedId(null)}
                            className='fixed inset-0 z-[100] bg-slate-900/20 backdrop-blur flex justify-center items-center'>
                            <div className='relative  mx-auto max-w-[40rem] w-[calc(100%-1rem)]'>

                                <motion.div
                                    onClick={(e) => {
                                        e.stopPropagation()
                                    }}

                                    layoutId={selectedId.title}
                                    className=' overflow-hidden- relative w-full scrollto  rounded-lg  text-black  bg-white py-10 px-6 h-[min(40rem,calc(100vh-2rem))] lg:h-[min(30rem,calc(100vh-2rem))] overflow-y-auto'>




                                    <div className=' relative  overflow-hidden- h-56 sm:h-60 lg:h-64   rounded-xl'>

                                        <img
                                            className='group-hover:scale-125 sticky top-0 hidden lg:block transition-all duration-500 peer size-full object-fit rounded-xl'
                                            src={selectedId.Icon}
                                        />
                                        <img
                                            className='group-hover:scale-125 sticky top-0 lg:hidden transition-all duration-500 peer size-full object-fit rounded-xl'
                                            src={selectedId.Icon}
                                        />
                                    </div>
                                    <VariantHeading className='font-black text-blue-950 text-2xl'>
                                        {selectedId.title}:
                                    </VariantHeading>
                                    <p>{selectedId.description}</p>
                                    <ol className='list-disc pl-6'>
                                        {Array.from({ length: 20 }, (arr, idx) => <li
                                            className='text-sm'
                                            key={idx}>
                                            Lorem ipsum dolor sit amet consectetur.
                                        </li>)}
                                    </ol>




                                </motion.div>

                            </div>

                        </div>

                    )}
                </AnimatePresence>
                <div className='grid grid-cols-1- items-start grid-cols-[repeat(auto-fit,minmax(min(20rem,calc(100%-60px)),_1fr))] justify-items-center justify-center  gap-x-2 gap-y-4 sm:grid-cols-2- lg:grid-cols-4- '>
                    {contents.map((arr, idx) => <ServiceCard
                        hoveredIndex={hoveredIndex}
                        setHoveredIndex={setHoveredIndex}
                        key={idx}
                        idx={idx}
                        content={arr}
                        setSelectedId={setSelectedId}


                    />)}
                </div>
                <Button className='block mx-auto my-4 hover:bg-colorPrimary hover:text-white transition-colors duration-300 shadow rounded-none bg-transparent text-colorPrimary border w-[min(20rem,calc(100%-1rem))] border-colorPrimary'>Load More</Button>
            </div>
        </section>
    )
}

export default OurVision