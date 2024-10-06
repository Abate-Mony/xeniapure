import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { AnimatedSlideText } from '../components/Animated/animated.js';
import { Button } from "../components/ui/button.js";
import Heading from "./ui/heading.js";
const contents = [
    {
        title: "Step 1: Register for the Event",
        description: "Sign up for the Kom meeting by submitting your details either online or in person.",
        options: [
            { text: "Online: Complete the registration form on the official website." },
            { text: "In Person: Register at the event location." }
        ],
    },
    {
        title: "Step 2: Choose Participation Level",
        description: "Decide how you want to participate, whether as a regular attendee or a volunteer.",
        options: [
            { text: "Attendee: Join the meeting to observe and participate in cultural discussions." },
            { text: "Volunteer: Assist with event preparations and activities." }
        ],
    },
    {
        title: "Step 3: Attend the Meeting",
        description: "Once registered, attend the Kom meeting or event and participate in the cultural activities.",
        options: [
            { text: "Follow the agenda: Engage in traditional dances, discussions, or rituals." },
            { text: "Connect: Network with other attendees and leaders from the Kom community." }
        ],
    }
];


const ProcessBecomeAMember = () => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
        // target: ref
        container: ref,
        offset: ["start start", "end start"],
    });
    const cardLength = contents.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log("lasted", latest)
        const cardsBreakpoints = contents.map((_, index) => index / cardLength);
        console.log("counted length", cardLength, cardsBreakpoints)
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                console.log("acc", acc)
                if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                    return index;
                }
                return acc;
            },
            0
        );
        console.log(closestBreakpointIndex, "close break point")
        setActiveCard(closestBreakpointIndex);
    });
    // const backgroundColors = [
    //     "var(--slate-900)",
    //     "var(--black)",
    //     "var(--neutral-900)",
    // ];
    // const linearGradients = [
    //     "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    //     "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    //     "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
    // ];

    return (
        <div
            className="bg-white py-20 "
        >
            <div>

                <div className='sticky-- top-4rem-- max-w-5xl mx-auto'>
                    <Heading className='text-2xl mb-4 font-black uppercase text-center lg:text-start text-blue-800 '>
                    we follow some steps to ensure you send your document correctly
                    </Heading>
            
             
                </div>
            </div>
            <motion.div className='grid grid-cols-1 relative ---h-[min(40rem,calc(100vh-4rem))] overflow-y-auto scrollto lg:grid-cols-12 max-w-5xl mx-auto px-4 items-start
            '
                // animate={{
                //     backgroundColor: backgroundColors[activeCard % backgroundColors.length],
                // }}
                ref={ref}
            >

                <div className='lg:col-span-8'>



                    <ol className="relative border-s border-gray-200 dark:border-gray-700 ">

                        {contents.map((arr, idx) => {
                            // if (idx+1 === contents.length) return
                            return (<motion.li
                                // initial={{
                                //     opacity: 0,
                                // }}
                                // animate={{
                                //     opacity: activeCard === idx ? 1 : 0.6,
                                // }}
                                className="mb-5 ms-6 divide-y-[1px]"
                                key={idx}
                            >
                                {
                                    contents.length - 1 == idx ? "" : <span className="absolute- text-white flex items-center top-4 justify-center size-6 shadow-sm rounded-full sticky -ml-[calc(1.5rem+0.75rem+0.5px)]  bg-blue-800 -start-3- ring-6 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                        {idx + 1}
                                    </span>
                                }
                                <Heading className="-translate-y-6 font-bold text-2xl ">{arr.title}</Heading>
                                <ol className="list-disc space-y-2 divide-y- pb-6 pl-4">
                                    {arr?.options?.map(opt => <li
                                        className=""
                                        key={opt.text}
                                    >{opt.text}</li>)}
                                </ol>
                                <p className="font-bold">{arr.description}</p>

                            </motion.li>)
                        })}
                    </ol>

                    {/* </TracingBeam> */}


                </div>

                <div className='hidden lg:block- hidden- px-4 sticky top-16 lg:col-span-4'>
                    <div
                        className=' bg-black- min-h-56 -skew-x-6 grayscale-'
                    >

                        <AnimatedSlideText text={contents[activeCard].title || ""} key={contents[activeCard].title} className='text-4xl'></AnimatedSlideText>
                        {/* <img
                            src={contents[activeCard].title}
                            className=''
                        /> */}
                    </div>
                </div>
            </motion.div>
            <Link to="/join-us">
            <Button
                className="block sticky btn- bg-colorPrimary
            w-[min(420px,calc(100%-1rem))] px-0 bg-primary-color
            mx-auto font-bold text-sm z-50 h-14 lg:ml-auto lg:mr-4
            bottom-0 rounded-none   left-0 uppercase  text-center ">
                Join Now <span className="size-6 ml-2 inline-flex justify-center items-center rounded-full ring-  place-items-center"><ArrowRight size={15} className='inline-block' /></span>
            </Button>
            </Link>
            

        </div>
    )
}

export default ProcessBecomeAMember