import { motion, useInView } from 'framer-motion';
import { Link } from 'lucide-react';
import React, { useState } from 'react';
import { AnimatedNumber, AnimatedSlideText } from '../components/Animated/animated';
import { Button } from '../components/ui/button';
import { animateHeadingVariants } from '../utils/framervariants';
import Heading, { VariantHeading } from '@/components/ui/heading';
import { Compare } from '@/components/ui/compare';
import AnimatedHeadLessUi from '@/components/ui/AnimatedHeadlessUI';

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
            "A web app that allows users to practice for front-end and UI interviews.",
        value: 6

    },
    {
        title: "Satifaction rate",
        unit: "%",
        description:
            "A web app that allows users to practice for front-end and UI interviews.",
        value: 98
    },

    {
        title: "Divise Product",
        unit: "+",
        description:
            "A web app that allows users to practice for front-end and UI interviews.",
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
            <VariantHeading className='text-6xl font-medium text-center'>
                <AnimatedNumber className='font-black'
                    value={progress}
                />
                <span className='text-primary-color'>{unit}</span>
                {/* <sup className='text-blue-400'>+</sup> */}
            </VariantHeading>
            <p className='font-Marcellus+SC text-blue-950 text-lg font-black '>{title}</p>


        </div>

    </motion.div>)
}
const Stats = () => {
    const [hoveIndex, setHoverIndex] = useState<number | null>(null);

    return (
        <section
            className='py-24 '
        // style={{ clipPath: "polygon(19% 0, 99% 0, 100% 68%, 89% 100%, 1% 99%, 0 20%)" }}
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
                <AnimatedSlideText inView
                    text="Your one Stop Printing solution - Explore our services"
                    className='text-center text-blue-950 font-black mb-6 text-xl lg:text-2xl max-w-3xl mx-auto '>

                </AnimatedSlideText>
                <div className="md:grid grid-cols-[1fr,1fr] max-w-7xl mx-auto gap-x-6 mb-10">
                    <div className='sticky sm:static top-[3.5rem] left-0 [perspective:800px] [transform-style:preserve-3d]'>

                        <div
                            style={{
                                // transform: "rotateX(15deg) translateZ(80px)",
                            }}
                            className=" h-[min(400px,calc(100vh-3.5rem))] rounded-0 dark:bg-neutral-900  dark:border-neutral-800 mx-auto  "
                        >
                            <Compare
                                firstImage="https://livewp.site/wp/md/clengo/wp-content/uploads/sites/61/2019/04/project_03-400x400.jpg"
                                secondImage="https://livewp.site/wp/md/clengo/wp-content/uploads/sites/61/2019/04/Stainless-Steel-Cleaning.jpg"
                                firstImageClassName="object-cover object-left-top w-full"
                                secondImageClassname="object-cover object-left-top w-full"
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

                        <Button className='px-8 bg-[#fb5711] m shadow-sm top-auto right-2'>Learn More <Link size={15} className='ml-2' /></Button>

                    </div>
                </div>
                {/* stats */}
                <div className='mt-4 grid gap-y-6 grid-cols-[repeat(auto-fit,minmax(min(10rem,calc(100%-60px)),_1fr))] justify-center gap-x-4  mx-auto max-w-6xl'>
                    {stats.map((arr, idx) => (
                        <AnimatedHeadLessUi
                            layoutId="thecoderandthecodearethesamehere"
                            key={idx}
                            index={idx}
                            hoverIndex={hoveIndex}
                            setHoverIndex={setHoverIndex}
                            animatedClassName={"bg-secondary-color/10 bottom-0 h-2- top-auto"}
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