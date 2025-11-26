
import { AnimatedSlideText, ScrollSection } from "@/components/Animated/animated";
// import { Button } from "@/components/ui/button";
import { VariantHeading } from "@/components/ui/heading";
import { cn } from "@/lib/utils";
import {
    motion,
    useMotionValueEvent,
    useScroll
} from "framer-motion";
// import { MoveRight } from "lucide-react";
import { useRef, useState } from "react";
// import { Link } from "react-router-dom";
import AnimatedHeadLessUi from "@/components/ui/AnimatedHeadlessUI";
import { Swiper as SwiperType } from "swiper";
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import ScrollSection from "./TestPage";
type iWebsiteStep = {
    stepNumber: number;
    stepName: string;
    description: string;
    imgUrl?: string
};
const popUpVariant = {
    "initial": {
        scale: 0.9,
        opacity: 0.6,
        transition: {
            duration: 1
        }
    },
    "animate": {
        scale: 1,
        opacity: 1,

    },
}

const cleaningProcess: iWebsiteStep[] = [
    {
        stepNumber: 1,
        stepName: "Initial Assessment & Space Evaluation",
        description: `We begin every project with a thorough evaluation of the space, whether it's a home, office, Airbnb, retail shop, or commercial area. During this stage, we walk through the environment to understand its layout, identify high-traffic zones, and note any areas that require deep cleaning or special care. We take the time to understand your cleaning goals, specific instructions, and any concerns you may have.

This assessment allows us to plan a tailored cleaning strategy that fits the unique needs of your space. By identifying the right tools, products, and cleaning methods from the start, we ensure every corner receives the attention it deserves. This careful preparation is the foundation of a smooth, detailed, and highly effective cleaning process.`,
        imgUrl: "https://img.freepik.com/free-photo/woman-making-cleaning-house_23-2148214491.jpg"
    },
    {
        stepNumber: 2,
        stepName: "Decluttering & Preparation",
        description: `Before the actual cleaning begins, we start by preparing the space for maximum efficiency. This includes gently organising and rearranging items, removing clutter from surfaces, folding loose materials, and ensuring floors and furniture are accessible. Whether it's a messy living room, a desk full of papers, or a shop counter covered in products, we ensure everything is organised in a respectful and systematic way.

Decluttering helps us reach hidden areas and allows cleaning to be more thorough and effective. This stage also prevents damage to items and ensures the cleaning process moves smoothly without interruptions. By creating order first, we set the stage for a deeper and more satisfying clean.`,
        imgUrl: "https://img.freepik.com/free-photo/woman-cleaning-house_23-2148174177.jpg"
    },
    {
        stepNumber: 3,
        stepName: "Dusting & High-Level Cleaning",
        description: `We begin the cleaning process from the top down, following a structured approach to remove dust and dirt in the most effective way. We clean high-level and often-overlooked areas such as shelves, light fittings, curtain rails, vents, skirting boards, cabinets, picture frames, window ledges, and electronics. This helps prevent dust from falling onto freshly cleaned surfaces later.

Whether the space is residential or commercial, this step is crucial for improving air quality, reducing allergens, and giving the entire area a fresher, cleaner feel. Our technique ensures that nothing is missed and that every part of the space, even the usually forgotten areas, receives proper attention.`,
        imgUrl: "https://img.freepik.com/free-photo/woman-dusting-furniture-home_23-2148174170.jpg"
    },
    {
        stepNumber: 4,
        stepName: "Surface Cleaning & Disinfection",
        description: `Next, we focus on thoroughly cleaning and disinfecting all flat surfaces and touchpoints. This includes tables, countertops, desks, cabinets, appliances, doors, handles, and any other surfaces that accumulate dirt, fingerprints, or bacteria. We carefully choose cleaning products that are safe, effective, and suitable for the material—whether wood, glass, marble, metal, or plastic.

We remove stains, marks, spills, and grease while ensuring the space is safe, hygienic, and visually appealing. This stage is especially important in offices, stores, and homes with children or pets, where cleanliness plays a vital role in health and comfort. Our aim is to leave every surface spotless and fully refreshed.`,
        imgUrl: "https://img.freepik.com/free-photo/cleaning-supplies-assortment_23-2148174152.jpg"
    },
    {
        stepNumber: 5,
        stepName: "Specialised Area Cleaning",
        description: `Every space has unique areas that require specialised cleaning, and this stage is fully customised based on your environment. For homes, we clean living rooms, bedrooms, kitchens, and bathrooms with precision. For offices, we focus on workstations, meeting rooms, shared spaces, and reception areas. For commercial spaces such as shops or studios, we pay careful attention to customer-facing areas, display units, and storage sections.

We adapt our tools, techniques, and cleaning products to the specific type of area we are working in, ensuring that each space receives the ideal level of care. This tailored approach guarantees that the cleaning results are not only thorough but also perfectly suited to the needs and purpose of the environment.`,
        imgUrl: "https://img.freepik.com/free-photo/cleaning-crew-working-office_23-2148174135.jpg"
    },
    {
        stepNumber: 6,
        stepName: "Sanitisation of High-Touch Points",
        description: `High-touch areas are the primary source of bacteria and dirt buildup in any space, and we take extra care to disinfect them properly. We clean door handles, handrails, light switches, taps, appliance handles, toilet flushes, remote controls, keyboards, and other frequently used surfaces.

Using industry-approved disinfectants, we eliminate germs effectively without damaging surfaces. This stage is essential for ensuring a hygienic and healthy environment, especially in workplaces, rental properties, and homes with children. Proper sanitisation helps prevent the spread of illness and gives you peace of mind knowing your space is truly clean—not just visually, but hygienically.`,
        imgUrl: "https://img.freepik.com/free-photo/woman-cleaning-bathroom_23-2148174165.jpg"
    },
    {
        stepNumber: 7,
        stepName: "Vacuuming & Floor Care",
        description: `We finish the main cleaning process by giving full attention to the floors, one of the most important areas in any space. We vacuum rugs, carpets, and upholstery to remove dust, crumbs, and deep-seated dirt. For hard floors such as tile, wood, laminate, vinyl, or concrete, we sweep and mop using the appropriate cleaning solutions.

Our floor-cleaning techniques are chosen based on the specific material to avoid damage and ensure a spotless finish. Whether it's a home living room floor, an office hallway, or a shop front area, we make sure the flooring is fresh, clean, and visually appealing. Clean floors significantly enhance the overall feel of the environment.`,
        imgUrl: "https://img.freepik.com/free-photo/woman-vacuuming-carpet_23-2148174158.jpg"
    },
    {
        stepNumber: 8,
        stepName: "Final Details & Freshening",
        description: `Once the main cleaning is complete, we focus on the final touches that transform a clean space into a polished and refreshing environment. We empty all bins, tidy arrangements, restore decor placements, polish glass and mirrors, remove smudges, and make sure everything looks neat and presentable.

We also add air-freshening elements to give the space a clean, pleasant, and welcoming scent without being overpowering. These small but important details help elevate the entire atmosphere and provide a finishing touch that makes the space feel professionally cleaned and well cared for.`,
        imgUrl: "https://img.freepik.com/free-photo/woman-cleaning-house_23-2148174155.jpg"
    },
    {
        stepNumber: 9,
        stepName: "Quality Check & Client Confirmation",
        description: `To ensure exceptional results, we end the cleaning process with a detailed final inspection. We carefully review every room, corner, and surface to confirm that all standards have been met. If anything needs touch-ups or refinement, we address it immediately.

We then present the finished space to you—either through a walkthrough or by sending photos—so you can confirm everything meets your expectations. Your satisfaction is our priority, and we are committed to delivering results that make you feel confident, comfortable, and delighted with your clean space. This final step ensures transparency, trust, and consistent quality every time we clean.`,
        imgUrl: "https://img.freepik.com/free-photo/cleaning-experts-discussing-results_23-2148174148.jpg"
    }
];


// const gradients = [
//     "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500",
//     "bg-gradient-to-r from-green-400 to-blue-500",
//     "bg-gradient-to-br from-pink-400 to-yellow-500",
//     "bg-gradient-to-tr from-orange-400 to-red-500",
//     "bg-gradient-to-bl from-teal-400 to-lime-500",
//     "bg-gradient-to-r from-indigo-500 to-cyan-400",
//     "bg-gradient-to-br from-amber-400 via-lime-500 to-green-500",
//     "bg-gradient-to-r from-gray-500 via-cool-gray-500 to-gray-800",
//     "bg-gradient-to-r from-red-400 via-pink-500 to-purple-500"
//   ];
  

const WorkingProccess = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });
    const cardLength = cleaningProcess.length
    const [activeSlideCard, setActiveCard] = useState(0);

    const [swiper, setSwiper] = useState<SwiperType | null>(null);

    useMotionValueEvent(scrollYProgress, "change", event => {
        const cardsBreakpoints = cleaningProcess.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(event - breakpoint);
                if (distance < Math.abs(event - cardsBreakpoints[acc])) {
                    return index;
                }
                return acc;
            },
            0
        );
        if (swiper) {
            swiper.slideToLoop(closestBreakpointIndex)
        }
        setActiveCard(closestBreakpointIndex || 0)
    })
    // const words: {
    //     text: string,
    //     className?: string
    // }[] = [

    //         { "text": "WORKING" },
    //         { "text": "PROCESS", className: "text-primary-color" },

    //     ];

    return (
        <div
            className="bg-white py-20 "
        >
            <div
                className="relative w-full"
            >
                <h1 className="text-6xl text-center my-10 italic
                                              absolute- -z-1
                                              w-full 
                                              font-black text-gray-300/55 lg:text-9xl
                                              bg-white/10-- uppercase  ">
                    BUILDING
                </h1>

             
                <VariantHeading className='text-center  !absolute !top-1/2 w-fit  !left-1/2  !-translate-x-1/2 !m-0 !-translate-y-1/2 !text-secondary-color py-6 gap-x-3 uppercase mb-6 flex items-center text-colorPrimary [font-family:var(--second-font)] font-black text-3xl lg:text-5xl max-w-fit mx-auto '>

                    <span
                        className='w-10  h-[1px] bg-primary-color/70 '
                    />  <span>
                        DESIGN <span className='text-primary-color'>PROCESS</span>
                    </span>
                    <span
                        className='w-10  h-[1px] bg-primary-color '
                    />

                </VariantHeading>
            </div>

          
            <ScrollSection>
               <VariantHeading
  viewport={{ once: true }}
  className="whitespace-nowrap !text-shadow-xl px-4 italic text-5xl lg:text-8xl font-black font-poppins text-secondary-color py-6"
>
  How We Clean Any Space With Precision, Care, and Complete Client Trust
</VariantHeading>


                </ScrollSection>
            <div className='grid bg-white grid-cols-1 lg:grid-cols-12 max-w-7xl mx-auto px-4 items-start
            '>

                <div className=' order-last bg-white lg:col-span-7 bg-white- relative z-20'
                    ref={containerRef}

                >


                    {/* <Heading className='text-xl sm:text-3xl lg:text-4xl mb-4 font-black uppercase text-center lg:text-start'>
                        How to design a website              </Heading> */}


                    <ol
                        className={
                            cn(" border-s- relative overflow-hidden-- bg-orange-700- bg-opacity-10 border-gray-200 dark:border-gray-700",
                                // gradients[activeSlideCard]
                            )
                        }>
                        {/* <motion.div
                            style={{
                                height: _heightTransform
                            }}
                            className="left-10 lg:left-12 w-[0.4px] absolute bg-gradient-to-r from-cyan-500 to-blue-500 top-0 bg-orange-400"
                        /> */}
                        {cleaningProcess.map(({

                            description, stepName, stepNumber
                        }, idx) => (<li className={
                            cn("mb-2 ms-4 flex flex-row gap-1 ",
                                activeSlideCard == idx ? "opacity-100" : "opacity-60"
                            )
                        }
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

                                className={cn("sticky !top-0 border size-fit flex-none mr-3 text-black  flex items-center justify-center  rounded-full text-sm lg:text-xl shadow-none !p-0 -start-3 ring-0 ring-primary-color dark:ring-gray-900 dark:bg-blue-900",
                                    activeSlideCard == idx ? "text-white" : ""
                                )}>
                                <AnimatedHeadLessUi
                                    transition={{
                                        duration: 0.5
                                    }}
                                    layoutId="thecoderandthecodfjojearethesame"
                                    key={idx}
                                    index={idx}
                                    hoverIndex={activeSlideCard}
                                    setHoverIndex={() => 4}
                                    animatedClassName="bg-primary-color rounded-xl"
                                    className="w-full flex items-center justify-center size-8 rounded-full"
                                >
                                    <span className="relative z-10">
                                        0{stepNumber}
                                    </span>

                                </AnimatedHeadLessUi>
                            </motion.span>
                            <div className='space-y-0.5 '>

                                <VariantHeading viewport={{
                                    once: true
                                }} >
                                    <AnimatedSlideText text={stepName} inView className=
                                        {
                                            cn(
                                                'font-semibold text-sm text-start mb-0.5 uppercase text-primary-color font-Marcellus+SC',
                                                activeSlideCard == idx ? "lg:text-xl text-sm transition-all duration-150" : ""


                                            )
                                        }
                                    />
                                </VariantHeading>
                                <p className={
                                    cn("mb-4 text-xs lg:text-lg font-normal text-muted-foreground dark:text-gray-400",
                                        activeSlideCard == idx ? " transition-all duration-150" : ""

                                    )
                                }>{description}</p>

                            </div>
                        </li>))}
                    </ol>

                </div>



                <div className='px-4 sticky top-14 hidden- sm:block- lg:col-span-5'

                >
                    <div

                        className=' lg:h-[34rem] h-[15rem] py-[1rem]  relative  overflow-hidden '
                    >
                        <img src={cleaningProcess[activeSlideCard].imgUrl || ""} className="size-full lg:hidden" alt={"step.description"} />

                        <div className="absolute inset-0   !pointer-events-none size-full"
                        >

                        </div>
                        <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            speed={200}
                            modules={[EffectCards]}
                            onSwiper={setSwiper}
                            cardsEffect={{
                                slideShadows: true, // Disable shadows for better visibility
                                perSlideRotate: 15,
                                rotate: true,
                            }}

                            className="!h-[calc(100%-2rem)] lg:block hidden relative  bg-transparent !w-[calc(100%-10rem)]"
                        >
                            {
                                cleaningProcess.map((step, idx) => {

                                    return (
                                        <SwiperSlide
                                            key={idx}
                                            className="h-full relative w-full "

                                        >
                                            <VariantHeading className='absolute top-1/2 font-black  bg-white/15 text-center text-secondary-color w-full'>
                                                <AnimatedSlideText text={cleaningProcess[activeSlideCard].stepName || ""} className='!font-poppins text-sm lg:text-lg !capitalize' />
                                            </VariantHeading>
                                            <img src={step.imgUrl || ""} className="size-full" alt={step.description} />
                                        </SwiperSlide>

                                    )
                                })
                            }
                        </Swiper>




                    </div>
                </div>
            </div>
            {/* <Link to={"/contact-us?rd_from=hero"}>
                <Button
                    className="block !sticky bottom-2 bg-colorPrimary overflow-hidden
               w-[min(220px,calc(100%-1rem))] px-0
               mx-auto font-bold text-sm z-50 h-14 lg:ml-auto lg:mr-4
               rounded-full uppercase text-center bg-secondary-color">
                    GET IN TOUCH <MoveRight className='inline-block ml-0.5 animate-move' />
                </Button>
            </Link> */}
        </div>
    )
}

export default WorkingProccess
