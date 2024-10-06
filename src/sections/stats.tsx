import { motion, useInView } from 'framer-motion';
import { Link } from 'lucide-react';
import React from 'react';
import { AnimatedNumber } from '../components/Animated/animated.tsx';
import { Button } from '../components/ui/button';
import Heading, { VariantHeading } from '@/components/ui/heading.tsx';
import { animateHeadingVariants } from '@/components/utils/framervariants.ts';

interface iStat {
    description: string,
    value: number,
    title: string,
    unit?: string

}
const stats: iStat[] = [
    {
        title: "Years of Experience",
        unit: "+",
        description:
            "Six decades of championing the cause for Africa and its diaspora. We'll be celebrating our 60th anniversary in 2024.",
        value: 6

    },
    {
        title: "Satifaction rate",
        unit: "%",
        description:
            "The total amount of funding from our latest successful application to the Wolfson Foundation.",
        value: 98
    },

    {
        title: "Divise Product",
        unit: "+",
        description:
            "The number of people who attended our last free summer festival in Southwark, London in 2018.",
        value: 50
    },
    {
        title: "Printing Capacity",
        unit: "K",
        description:
            "A web app that allows users to practice for front-end and UI interviews.",
        value: 10
    },

];

function SingleStat({ title, value, unit, description }: iStat) {
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
        className='flex flex-col gap-y-6 px-4 justify-center  items-center '>

        <div className='space-y-2'>
            <VariantHeading className='text-6xl font-medium text-center'>
                <AnimatedNumber className='font-black lg:text-8xl'
                    value={progress}
                />
                <span>{unit}</span>
                {/* <sup className='text-blue-400'>+</sup> */}
            </VariantHeading>
            <Heading className='font-pacifico text-center !text-primary-color  text-gray-600- text-lg font-black '>{title}</Heading>

            <p className='text-lg text-center sm:text-xl tracking-tighter '>
                {description}

            </p>
        </div>

    </motion.div>)
}
const Stats = () => {
    return (
        <section

            className='py-8 bg-no-repeat bg-cover'
            style={{
                backgroundImage: "url(/statsbg.svg)"
                ,
                // clipPath: "polygon(19% 0, 99% 0, 100% 68%, 89% 100%, 1% 99%, 0 20%)"
            }}
        >
            <div
                className='max-w-6xl mx-auto p-4'
            >
                <VariantHeading className='text-center gap-x-3 uppercase mb-6 flex items-center text-primary-color [font-family:var(--second-font)] font-black text-3xl lg:text-4xl max-w-fit mx-auto'>

                    <span
                        className='w-10  h-[1px] bg-colorPrimary '
                    />  <div className='flex items-center text-4xl'>OUR IMPACT<span className='md:hidden-'>s</span><span className='hidden md:block'></span></div>
                    <span
                        className='w-10  h-[1px] bg-colorPrimary '
                    />

                </VariantHeading>
                {/* <AnimatedSlideText inView
                    text="Your one Stop Printing solution - Explore our services"
                    className='text-center text-blue-950 font-black mb-6 text-xl lg:text-2xl max-w-3xl mx-auto '>

                </AnimatedSlideText> */}
                <div className="md:grid grid-cols-[auto,1fr] max-w-5xl mx-auto gap-x-6 mb-10">
                    <div>
                        <VariantHeading
                            className='text-4xl !text-bg-colorPrimary text-center- md:text-start mb-6 capitalize'
                        >
                            Printing in numbers
                        </VariantHeading>

                    </div>
                    <div>
                        <p className='mb-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi voluptatibus eos quidem eligendi odio molestias. Aliquid, maiores! Recusandae tempore deleniti aspernatur nisi enim esse corporis?</p>

                        <Button className='px-8 bg-primary-color m shadow-sm top-auto right-2'>Learn More <Link size={15} className='ml-2' /></Button>

                    </div>
                </div>
                {/* stats */}
                <div className='mt-4 grid gap-y-6 grid-cols-1 gap-x-4 sm:grid-cols-2 lg:grid-cols-4 mx-auto max-w-6xl'>
                    {stats.map((arr, idx) => <SingleStat key={idx}
                        {...arr}
                    />)}
                </div>
            </div>
        </section>
    )
}

export default Stats