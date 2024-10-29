import { AnimatedSlideText } from "@/components/Animated/animated";
import Heading, { VariantHeading } from "@/components/ui/heading";
import {
    motion,
    useMotionValueEvent,
    useScroll,
    useTransform
} from "framer-motion";
import { useEffect, useRef, useState } from "react";


type CleaningStep = {
    stepNumber: number;
    stepName: string;
    description: string;
};
const popUpVariant = {
    "initial": {
        scale: 0.2,
        opacity: 0,
        rotate: -45,
        transition: {
            duration: 1
        }
    },
    "animate": {
        scale: 1,
        opacity: 1,
        rotate: 0

    },
}

const cleaningProcess: CleaningStep[] = [
    {
        stepNumber: 1,
        stepName: "Initial Consultation and Booking",
        description: "The client reaches out to schedule a cleaning service, providing details such as property type, preferred date and time, and any specific cleaning requirements. This step ensures we gather all necessary information to tailor our cleaning approach."
    },
    {
        stepNumber: 2,
        stepName: "Service Confirmation and Planning",
        description: "Our team reviews the client’s request to confirm all details and then contacts the client to finalize the booking. During this stage, we answer any additional questions, discuss special needs, and ensure a clear understanding of the client’s expectations."
    },
    {
        stepNumber: 3,
        stepName: "Pre-Cleaning Inspection",
        description: "Upon arrival, our cleaning team performs an initial walkthrough of the property, noting any high-traffic areas, special items, or challenging spots. This inspection allows us to focus on specific areas that may require extra attention during cleaning."
    },
    {
        stepNumber: 4,
        stepName: "Supplies and Equipment Preparation",
        description: "Based on the inspection, we prepare all necessary cleaning products and equipment, ensuring we have eco-friendly and effective solutions ready for each surface and area. Our team is equipped with safe, non-toxic products suitable for the client’s environment."
    },
    {
        stepNumber: 5,
        stepName: "Deep Cleaning of Key Areas",
        description: "The cleaning process begins with a deep clean of high-priority areas such as bathrooms, kitchens, and floors. Our team uses specialized tools and products to ensure these areas are thoroughly sanitized and spotless."
    },
    {
        stepNumber: 6,
        stepName: "General Cleaning and Dusting",
        description: "Following the deep clean, we focus on general cleaning tasks, including dusting surfaces, wiping down furniture, cleaning windows, and tidying up common areas. This step creates a fresh, organized, and inviting atmosphere throughout the space."
    },
    {
        stepNumber: 7,
        stepName: "Post-Cleaning Inspection",
        description: "Our team conducts a final inspection to ensure all areas meet our quality standards. Any remaining spots are touched up, and we ensure all requested services are completed to the client’s satisfaction."
    },
    {
        stepNumber: 8,
        stepName: "Client Walkthrough and Feedback",
        description: "After the cleaning, we invite the client to review the work with us, addressing any concerns or adjustments they may have. We encourage feedback to continuously improve our service and guarantee client satisfaction."
    }
];




const WorkingProccess = () => {
    // const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLOListElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [containerRef]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 90%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
    const opacity_Transform = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
    useMotionValueEvent(scrollYProgress, "change", (current) => {
        console.log("currnet ", current)

    })
    const words: {
        text: string,
        className?: string
    }[] = [

            { "text": "WORKING" },
            { "text": "PROCESS", className: "text-primary-color" },

        ];

    return (
        <div
            className="bg-[var(--color-light)] py-20 "
        >
            <div className='grid grid-cols-1 lg:grid-cols-12 max-w-7xl mx-auto px-4 items-start
            '>

                <div className=' order-last lg:col-span-7 bg-white relative z-20'>
                    {/* <Heading className='text-2xl mb-4 font-black uppercase text-center '>
                        Working Process
                    </Heading> */}
                    <AnimatedSlideText
                        inView
                        once={false}
                        words={words}
                        text="Your one Stop Printing solution - Explore our services"
                        className='text-2xl mb-4 font-black uppercase text-center'>

                    </AnimatedSlideText>
                    <VariantHeading
                        className='text-xl sm:text-3xl lg:text-4xl mb-4 font-black uppercase text-center lg:text-start'>
                        We are your <span className="text-primary-color">reliable</span>, <span className="text-primary-color">professional</span> cleaning experts, delivering <span className="text-primary-color">quality</span> service with <span className="text-primary-color">attention to detail</span> for <span className="text-primary-color">homes</span>, <span className="text-primary-color">offices</span>, and more!
                        {/* We are your reliable and professional cleaning experts, dedicated to quality service with exceptional attention to detail in every job, for homes, offices, and more! */}
                    </VariantHeading>

                    <ol
                        ref={containerRef}
                        className=" border-s- relative bg-orange-700- border-gray-200 dark:border-gray-700">
                        <div
                            style={{
                                height: height + "px",
                            }}
                            className="absolute md:left-0- -left-[calc(calc(1rem/2)-2px)] top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
                        >
                            <motion.div
                                style={{
                                    height: heightTransform,
                                    opacity: opacityTransform,
                                }}
                                className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                            />
                        </div>

                        {cleaningProcess.map(({

                            description, stepName, stepNumber
                        }, idx) => (<li className="mb-2 ms-4"
                            key={idx}
                        >
                            <motion.span
                                transition={{
                                    duration: 1.5,
                                    mass: 10
                                }}
                                variants={popUpVariant}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: false }}

                                className="absolute text-white flex items-center justify-center size-4 rounded-full text-xs shadow-sm bg-orange-800 -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                {stepNumber}
                            </motion.span>
                            <div className='space-y-0.5 '>

                                <Heading className='font-medium text-sm mb-0.5 uppercase'>{stepName}</Heading>
                                <p className="mb-4 text-xs lg:text-sm font-normal text-gray-500 dark:text-gray-400">{description}</p>

                            </div>
                        </li>))}
                    </ol>

                </div>



                <div className='px-4 sticky top-16 hidden- sm:block lg:col-span-5'>
                    <div
                        className='min-h-16 lg:h-[34rem] h-[15rem] - relative  overflow-hidden '
                    >
                        <motion.img
                            // style={{
                            //     translateX: heightTransform
                            // }}
                            src="https://livewp.site/wp/md/clengo/wp-content/uploads/sites/61/2019/04/project_img_4.jpg"
                            className='size-full   relative '
                            alt="" />
                        {/* <motion.img
                            style={{
                                opacity: opacityTransform
                            }}
                            src="https://livewp.site/wp/md/clengo/wp-content/uploads/sites/61/2019/04/project_img_02.jpg"
                            className='size-full   absolute inset-0 -z-0'
                            alt="" /> */}
                        <motion.img
                            style={{
                                translateX: heightTransform,
                                opacity: opacity_Transform

                            }}
                            src="https://livewp.site/wp/md/clengo/wp-content/uploads/sites/61/2019/04/project_img_02.jpg"
                            className='size-full   absolute inset-0 -z-0'
                            alt="" />
                        <motion.img
                            style={{
                                translateX: useTransform(heightTransform, (value) => -value),
                                opacity: opacity_Transform

                            }}
                            src="https://livewp.site/wp/md/clengo/wp-content/uploads/sites/61/2019/04/project_img_03.jpg"
                            className='size-full   absolute inset-0 -z-0'
                            alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WorkingProccess