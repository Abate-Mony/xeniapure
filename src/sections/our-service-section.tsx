// import { cards } from "@/assets/data";
import { ScrollSection } from "@/components/Animated/animated";
import AnimatedHeadLessUi from "@/components/ui/AnimatedHeadlessUI";
import Heading, { VariantHeading } from "@/components/ui/heading";
import { heroBanner } from "@/constants/constants";
import React, { useRef } from "react";
// import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
    const target = useRef<HTMLDivElement>(null);
    const [hoveIndex, setHoverIndex] = React.useState<number | null>(null);
    // const isDesktop = useMediaQuery({ query: "(min-width: 768px)" })

const cards=[
    ...heroBanner.map((item=>item.image)),
    ...heroBanner.map((item=>item.image)),
]
    return (
        <div className="py-24" ref={target}>
            <div
                            className="relative w-full"
                        >
                            <h1 className="text-6xl text-center my-10 italic
                                                          absolute- -z-1
                                                          w-full 
                                                          font-black text-gray-300/55 lg:text-9xl
                                                          bg-white/10-- uppercase  ">
                            OUR SERVICES
                            </h1>
            
            
                            <VariantHeading className='text-center  !absolute !top-1/2 w-fit  !left-1/2  !-translate-x-1/2 !m-0 !-translate-y-1/2 !text-secondary-color py-6 gap-x-3 uppercase mb-6 flex items-center text-colorPrimary [font-family:var(--second-font)] font-black text-3xl lg:text-5xl max-w-fit mx-auto '>
            
                                <span
                                    className='w-10  h-[1px] bg-primary-color/70 '
                                />  <span>
                                    AWARD<span className='text-primary-color'> WORKS</span>
                                </span>
                                <span
                                    className='w-10  h-[1px] bg-primary-color '
                                />
            
                            </VariantHeading>
                        </div>
            {/* <ScrollSection>
                <Heading
                    className="whitespace-nowrap !text-shadow-xl px-4 italic text-5xl lg:text-7xl font-black font-Marcellus+SC- ![--color-shadow:hsl(var(--color-secondary,white))] text-primary-color"
                >
                    Our Latest Awards Winning Projects .
                </Heading>
            </ScrollSection> */}


       

        
            <div className="mb-10" />
            <ScrollSection transition={{ delay: 10 }} className="my-10">
                {cards.map((_proj, idx) => (
                    <AnimatedHeadLessUi
                        layoutId="thecoderandthecodearethesameherethendsdfsfab"
                        key={idx}
                        index={idx}
                        hoverIndex={hoveIndex}
                        setHoverIndex={setHoverIndex}
                        className='mx-auto max-w-sm p-2 py-2.5'
                        animatedClassName={"bg-secondary-color/5 !rounded-2xl bottom-0 h-2- top-auto z-[1]"}

                    >
                        <Link to={"/#home"}  className="relative z-10">
                            <div key={idx} className="h-60 flex-none  w-full">
                            <img src={_proj} className="size-full object-fill" alt={`Project ${idx + 1}`} />
                        </div>
                      <div className="px-2">
                          <Heading className="font-medium mb-2 mt-1 text-primary-color">Industrial Cleaning</Heading>
                        <p className="text-sm font-poppins lowercase">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error atque laudantium soluta distinctio fugit blanditiis porro a quo illo, eligendi id at nihil temporibus ut dolor dignissimos eos odit ipsum cumque in? Voluptatem, ipsam voluptate totam quod eveniet, distinctio, labore ut veniam placeat dolor accusantium laboriosam quas molestias excepturi tenetur ipsa optio magnam ea a! Nesciunt repudiandae totam sint accusantium.</p>
                     <Link to={"/home"} className="text-primary-color text-xs">read more</Link>
                      </div>
                        </Link>
                    </AnimatedHeadLessUi>
                ))}
            </ScrollSection>
              <ScrollSection
              direction="left"
              transition={{ delay: 10 }} className="my-10">
                {cards.map((_proj, idx) => (
                    <AnimatedHeadLessUi
                        layoutId="thecoderandthecodearethesameherethendsdfsfab"
                        key={idx}
                        index={idx}
                        hoverIndex={hoveIndex}
                        setHoverIndex={setHoverIndex}
                        className='mx-auto max-w-sm p-2 py-2.5'
                        animatedClassName={"bg-secondary-color/5 !rounded-2xl bottom-0 h-2- top-auto z-[1]"}

                    >
                        <Link to={"/#home"}  className="relative z-10">
                            <div key={idx} className="h-60 flex-none  w-full">
                            <img src={_proj} className="size-full object-fill" alt={`Project ${idx + 1}`} />
                        </div>
                      <div className="px-2">
                          <Heading className="font-medium mb-2 mt-1 text-primary-color">Industrial Cleaning</Heading>
                        <p className="text-sm font-poppins lowercase">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error atque laudantium soluta distinctio fugit blanditiis porro a quo illo, eligendi id at nihil temporibus ut dolor dignissimos eos odit ipsum cumque in? Voluptatem, ipsam voluptate totam quod eveniet, distinctio, labore ut veniam placeat dolor accusantium laboriosam quas molestias excepturi tenetur ipsa optio magnam ea a! Nesciunt repudiandae totam sint accusantium.</p>
                     <Link to={"/home"} className="text-primary-color text-xs">read more</Link>
                      </div>
                        </Link>
                    </AnimatedHeadLessUi>
                ))}
            </ScrollSection>
          
        </div>
    );
};

export default ProjectsSection;