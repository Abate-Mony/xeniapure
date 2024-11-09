import AnimatedHeadLessUi from '@/components/ui/AnimatedHeadlessUI';
import { Compare } from '@/components/ui/compare';
import Heading, { VariantHeading } from '@/components/ui/heading';
import { motion, useInView } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedNumber, AnimatedSlideText } from '../components/Animated/animated';
import { Button } from '../components/ui/button';
import { animateHeadingVariants } from '../utils/framervariants';

interface iStat {
    description: string,
    value: number,
    title: string,
    unit?: string
}

const stats: iStat[] = [
    {
        title: "Years of Service",
        unit: "+",
        description:
            "Years providing professional cleaning services to residential and commercial clients.",
        value: 10
    },
    {
        title: "Client Satisfaction Rate",
        unit: "%",
        description:
            "Percentage of clients who rate our services as excellent in terms of quality and reliability.",
        value: 95
    },
    {
        title: "Properties Cleaned",
        unit: "+",
        description:
            "Total number of properties we’ve professionally cleaned, including homes, offices, and commercial spaces.",
        value: 150
    },
    {
        title: "Waste Removal Capacity",
        unit: "kg",
        description:
            "Total waste removal and disposal capacity per month, helping maintain eco-friendly environments.",
        value: 500
    },
    {
        title: "Team Members",
        unit: "+",
        description:
            "Dedicated and trained cleaning professionals ready to serve your needs.",
        value: 25
    }
];


function SingleStat({ title, value, unit }: iStat) {
    const ref = React.useRef<any>(null)
    const isInView = useInView(ref, {})
    const timer = React.useRef<any>(null)
    const [progress, setProgress] = React.useState(value)
    React.useEffect(() => {
        if (isInView) {
            timer.current = setTimeout(() => setProgress(value), 500)
        }
        return () => clearTimeout(timer.current)
    }, [isInView])
    return (<motion.div
        variants={animateHeadingVariants}
        initial="initial"
        whileInView="animate"
        className='flex flex-col gap-y-6 mx-auto px-4 justify-center  items-center '>

        <div className='space-y-2'>
            <VariantHeading className='text-2xl lg:text-6xl font-medium text-center'>
                <AnimatedNumber className='font-black'
                    value={progress}
                />
                <span className='text-primary-color '>{unit}</span>
            </VariantHeading>
            <AnimatedSlideText
                inView
                // words={words}
                text={title}
                className='font-Marcellus+SC text-blue-950 text-xs lg:text-lg font-black  '>

            </AnimatedSlideText>
            {/* <p className='font-Marcellus+SC text-blue-950 text-lg font-black '>{title}</p> */}


        </div>

    </motion.div>)
}
const Stats = () => {
    const [hoveIndex, setHoverIndex] = useState<number>(0);
    const TIME_OUT_DURATION = 1000
    const SLIDES = 4
    const check = () => hoveIndex && hoveIndex >= SLIDES ? true : false
    const validate = () => hoveIndex == null || check() ? setHoverIndex(0) : setHoverIndex(hoveIndex + 1);
    const timer = React.useRef<any>(null)
    useEffect(() => {
        timer.current = setInterval(() => {
            validate()
        }, TIME_OUT_DURATION)
        return () => {
            clearInterval(timer.current)
        }
    }, [hoveIndex, timer])
    return (
        <section
            className='py-24  '
        >
            <div
                className='max-w-8xl w-full  mx-auto p-4'
            >


                <VariantHeading className='text-center gap-x-3 uppercase mb-6 flex items-center text-blue-950 [font-family:var(--second-font)] font-black text-3xl lg:text-4xl max-w-fit mx-auto'>

                    <span
                        className='w-10  h-[1px] bg-primary-color '
                    />  <div className='flex items-center'>OUR Stat<span className='md:hidden'>s</span><span className='hidden md:block'>istics</span></div>
                    <span
                        className='w-10  h-[1px] bg-primary-color '
                    />

                </VariantHeading>




                <div className="md:grid grid-cols-[1fr,1fr] max-w-7xl mx-auto gap-x-6 mb-10">
                    <div className=' left-0 [perspective:800px] [transform-style:preserve-3d]'>

                        <div

                            className=" h-[min(400px,calc(100vh-3.5rem))] rounded-0 dark:bg-neutral-900  dark:border-neutral-800 mx-auto  "
                        >
                            <Compare
                                firstImage="https://livewp.site/wp/md/clengo/wp-content/uploads/sites/61/2019/04/project_03-400x400.jpg"
                                secondImage="https://livewp.site/wp/md/clengo/wp-content/uploads/sites/61/2019/04/Stainless-Steel-Cleaning.jpg"
                                firstImageClassName="object-cover object-left-top w-full  rounded-none"
                                secondImageClassname="object-cover object-left-top w-full  rounded-none"
                                className="w-full h-full !rounded-none px-0 border-0"
                                slideMode="hover"
                                autoplay={true}
                            />
                        </div>
                    </div>
                    {/* right side div */}
                    <div>
                        <VariantHeading
                            className='text-4xl font-semibold !text-bg-primary-color text-center- md:text-start mb-6 capitalize'
                        >
                            <span className='text-primary-color'>
                                15 Years
                            </span> Experience
                        </VariantHeading>
                        <Heading className='mb-6'>As quas equidem noluisse et, ex pro semper fierent oporteat. Te epic urei ullamcorper usu, eos et voluptaria rationibus. Usu cu eligendi ad ipisci, sed ex altera dictas incorrupte. Idque option ius ut, id molestiae philosophia his. Qui euismod fabellas reformidans ea, inermis ration ibus necessitatibus eu eum.</Heading>
                        <p className='mb-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi voluptatibus eos quidem eligendi odio molestias. Aliquid, maiores! Recusandae tempore deleniti aspernatur nisi enim esse corporis?</p>

                       <Link to={"/contact-us?rd_from=hero"}>
                       <Button

className="block-  sticky z-[100]  
w-[min(420px,calc(100%-1rem))] px-0
mx-auto font-bold text-sm h-14 lg:ml-auto lg:mr-4
bottom-0 rounded-none   left-0 uppercase  text-center bg-secondary-color ">

contact us
</Button>
                       </Link>
                        {/* <Link to={"/about-us"}>
                            <Button className='px-8  shadow-sm top-auto bg-secondary-color right-2'>Learn More </Button>

                        </Link> */}
                        <Link to={"/contact-us?rd_from=hero"}>

                        </Link>
                    </div>
                </div>
                {/* stats */}
                <div className='mt-4 grid gap-y-6 [perspective:800px] [transform-style:preserve-3d]  grid-cols-[repeat(auto-fit,minmax(min(10rem,calc(100%-60px)),_1fr))] justify-center gap-x-4  mx-auto max-w-6xl'>
                    {stats.map((arr, idx) => (
                        <AnimatedHeadLessUi
                            layoutId="thecoderandthecodearethesamehere"
                            key={idx}
                            index={idx}
                            hoverIndex={hoveIndex}
                            setHoverIndex={setHoverIndex}
                            className='mx-auto py-4 [transform:rotateX(20deg)_translateZ(20px)_translateY(0px)] bg-red-50-'
                            animatedClassName={"bg-secondary-color/10   top-auto   transform-3d"}
                        >

                            <SingleStat key={idx}
                                {...arr}
                            />

                        </AnimatedHeadLessUi>
                    )
                    )}
                </div>

            </div>

        </section>
    )
}

export default Stats