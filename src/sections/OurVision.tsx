import React, { useState } from 'react'
// import Heading, { VariantHeading } from '../components/Heading'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '../components/ui/button'

import { useMediaQuery } from 'react-responsive'
// import { BlackKeyBoard, CartoonKeyBoard, ManTyping, WomanTyping } from '../assets/images'
import Heading, { VariantHeading } from '@/components/ui/heading'
// import { AnimatedSlideText } from '../components/Animated/animated'
import { Badge } from '@/components/ui/badge'
export const contents = [
    {
        title: " Bringing Kom People Together",
        description: "Woinkom UK fosters unity among the Kom diaspora, creating a strong network of individuals who support one another. Through gatherings and shared experiences, we build lasting connections and ensure that our cultural values are celebrated collectively.",
        Icon: "https://loispiration.com/wp-content/uploads/2023/09/toghu-4.jpg?w=829",
        coreValues: ["Unity"]
    },
    {
        title: " Celebrating and Preserving Heritage",
        description: "At Woinkom UK, we take pride in preserving the rich traditions of the Kom people. Through cultural events, festivals, and storytelling, we ensure that our heritage is passed down to future generations, celebrating the vibrancy of Kom customs.",
        Icon: "/food-01.jpg",
        coreValues: ["Culture"]
    },
    {
        title: "Passing Down Traditions",
        description: "Our mission is to educate the younger generation about the importance of Kom traditions. Through workshops, mentorship programs, and cultural immersion experiences, Woinkom UK helps preserve the knowledge and wisdom that has shaped the Kom people for centuries.",
        Icon: "/fon-01.jpg",
        coreValues: ["Education"]
    },
    {
        title: " Supporting Growth and Success",
        description: "Woinkom UK is dedicated to empowering its members by offering mentorship, professional development, and personal growth opportunities. By nurturing the talents and ambitions of individuals within the community, we ensure the continued success of Kom people both at home and abroad.",
        Icon: "https://i0.wp.com/www.fepcig.org/wp-content/uploads/2017/07/Tourism-Kom-culture-and-tradition-36.jpeg?fit=1080%2C607&ssl=1",
        coreValues: ["Empowerment"]
    }
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
    // setSelectedId
}: iService) => {
    const isDesktop = useMediaQuery({ query: "(min-width: 768px)" })

    const { Icon, description, title, coreValues } = content
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
        className='flex flex-col border   rounded-md shadow-lg  w-full
        space-y-2   relative my-4b group mx-auto flex-none pb-5 bg-white '>
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
        <div className=' relative   overflow-hidden h-[20rem] sm:h-80 '>

            <motion.img

                className='group-hover:scale-125- hidden lg:block transition-all duration-500 peer size-full object-fill '
                src={Icon}
            />
            <img
                className='group-hover:scale-125- lg:hidden transition-all duration-500 peer size-full object-cover '
                src={Icon}
            />
            <Badge className='absolute bottom-0 px-3 py-2 rounded-e-none bg-black text-white italic right-0'>
                {coreValues.map(x => x)}
            </Badge>
        </div>
        <div className='pl-1.5 px-2'>

            <VariantHeading className='font-black text-blue-950 text-2xl mb-2'>
                {title}:
            </VariantHeading>
            <p className='leading-6 tracking-wider'>
                {description}

            </p>
           
        </div>

        {/* <Button
            onClick={() => {
                setSelectedId(content)
            }}
            className='block mx-auto relative z-50 my-4 hover:bg-colorPrimary hover:text-white transition-colors duration-300 shadow rounded-none bg-transparent text-colorPrimary border w-[min(20rem,calc(100%-1rem))] border-colorPrimary'>Read More</Button>
 */}

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
        <section className='bg-primary-color/10 py-32 overflow-hidden'
            id='ourservices'
        >
            <div className="max-w-7xl mx-auto px-4">
            <Heading className='text-center text-blue-800 font-black text-3xl max-w-fit mx-auto'>
                  who are we

                </Heading>
                <VariantHeading className='text-center text-blue-950 py-6 gap-x-3 uppercase mb-6 flex items-center text-colorPrimary [font-family:var(--second-font)] font-black text-3xl lg:text-4xl max-w-fit mx-auto '>

                    <span
                        className='w-10  h-[1px] bg-primary-color/70 '
                    />  <span>          OUR VALUES
                    </span>
                    <span
                        className='w-10  h-[1px] bg-primary-color '
                    />

                </VariantHeading>
                {/* <AnimatedSlideText inView
                    text="Your one Stop Printing solution - Explore our services"
                    className='text-center text-blue-950 font-black mb-6 text-xl lg:text-2xl max-w-3xl mx-auto '>

                </AnimatedSlideText> */}
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
                                        {Array.from({ length: 20 }, (_arr, idx) => <li
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
                <div className='grid grid-cols-1- items-start- grid-cols-[repeat(auto-fit,minmax(min(18rem,calc(100%-60px)),_1fr))] justify-items-center justify-center  gap-x-2 gap-y-4 sm:grid-cols-2- lg:grid-cols-4- '>
                    {contents.map((arr, idx) => <ServiceCard
                        hoveredIndex={hoveredIndex}
                        setHoveredIndex={setHoveredIndex}
                        key={idx}
                        idx={idx}
                        content={arr}
                        setSelectedId={setSelectedId}


                    />)}
                </div>
                <Button className='block- hidden mx-auto my-4 hover:bg-colorPrimary hover:text-white transition-colors duration-300 shadow rounded-none bg-transparent text-colorPrimary border w-[min(20rem,calc(100%-1rem))] border-colorPrimary'>Load More</Button>
            </div>
        </section>
    )
}

export default OurVision