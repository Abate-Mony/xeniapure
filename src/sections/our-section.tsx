/* eslint-disable padded-blocks */
/* eslint-disable  @typescript-eslint/no-explicit-any */
import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'
// import { ourskills } from '../assets/images.js'
import { AnimatedNumber } from '../components/Animated/animated'
// import Heading, { VariantHeading } from '../components/Heading'
// import { Progress } from "../components/ui/progress.js"
import Heading, { VariantHeading } from '@/components/ui/heading.js';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
interface iSkill {
    title: string;
    percentage: number
}
const skillsContent: iSkill[] = [
    {
        title: "Employee Qualification",
        percentage: 59
    },
    {
        title: "Customer Reviews",
        percentage: 93
    },
    {
        title: "Professional Equipment",
        percentage: 90
    },
    {
        title: "Satisfied Customers",
        percentage: 80
    },

]

const Skill = ({ title, percentage }: iSkill) => {
    const ref = useRef<any>(null)
    const isInView = useInView(ref, {})
    const timer = useRef<any>(null)
    const [progress, setProgress] = React.useState<number>(13)
    React.useEffect(() => {
        if (isInView) {
            timer.current = setTimeout(() => setProgress(percentage), 500)
        }
        return () => clearTimeout(timer.current)
    }, [isInView])
    return (<div className='flex flex-col gap-y-4  px-4'>
        <div
            className='flex justify-between w-full'
        >
            <Heading className='font-bold text-capitalize'>{title} </Heading>
            <Heading className='text-sm'>
                <AnimatedNumber value={percentage}></AnimatedNumber>%
            </Heading>

        </div>
        <div ref={ref}>
            <Progress value={progress}
                indicatorClassName={"bg-secondary-color duration-500 rounded-e-md"}
                className='rounded-none h-1.5  '
            />
        </div>
    </div>)
}
const OurSkills = () => {
    return (
        <section className='min-h-44 py-24  '>
            <div className=' grid grid-cols-1  md:grid-cols-2   justify-center items-center'>
                <div className='sticky top-[4rem] lg:order-last'>
                    <motion.img
                        initial={{ x: -100, opacity: 0.6 }}
                        whileInView={{
                            x: 0, opacity: 1
                        }}
                        viewport={{ amount: 0.4 }}
                        onViewportEnter={() => {
                            // alert("enter")
                        }}
                        src={"https://livewp.site/wp/md/clengo/wp-content/uploads/sites/61/2019/04/team_img_01.jpg"}
                        className='w-full h-[25rem] lg:h-[35rem] rounded-sm'
                        alt="" />
                </div>
                <div className='relative z-10 '
                >


                    <VariantHeading className='text-center py-5 lg:text-start font-black lg:text-5xl text-2xl '>
                        Our <span className='text-secondary-color'>Professional</span> Experience &  <span className='text-secondary-color'>Skills</span>
                    </VariantHeading>
                    <Heading className="text-start max-w-4xl  text-muted-foreground mb-6">
                        From our local owners, installers, and outreach and enrollment specialists, to everyone on our corporate team, we are dedicated to bringing the best quality service to every customer.
                    </Heading>
                    <div className='flex flex-col gap-y-6'>
                        {skillsContent.map((skill, idx) => <Skill
                            {...skill}
                            key={idx} />)}

                    </div>
                    <Button

                        className="block mt-4 bg-colorPrimary
            w-[min(420px,calc(100%-1rem))] px-0
            mx-auto font-bold text-sm z-50 h-14 lg:mx-auto 
            bottom-0 rounded-none   left-0 uppercase  text-center bg-primary-color ">

                  Contact Us
                    </Button>
                </div>

            </div>

        </section>
    )
}

export default OurSkills