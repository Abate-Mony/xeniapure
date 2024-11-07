import { AnimatedSlideText } from "@/components/Animated/animated";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Heading, { VariantHeading } from "@/components/ui/heading";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { employees } from "@/constants/constants";
import OurSkills from "@/sections/our-section";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const OurTeamPage = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 0%"],
    });

    const scaleTransform = useTransform(scrollYProgress, [0, 1], [1, 4.0]);
    const scaleDownTransform = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.5], [1, 0.0]);
    return (
        <div>
            {/* Hero Section */}
            <div
                ref={containerRef}
                className="relative flex overflow-hidden items-center justify-center h-[min(calc(100vh-4rem),25rem)] bg-black">
                <motion.img
                    style={{
                        scale: scaleTransform
                    }}
                    transition={{
                        duration: 0.5
                    }}
                    src="https://img.freepik.com/free-photo/collaboration-team-together-we-can-brainstorm_53876-64931.jpg?t=st=1730957005~exp=1730960605~hmac=ad55fb1cc65da2718e5638fd4ade4680793c1d77a795b0bc21ede5382a819326&w=1060"
                    alt="Hero Background"
                    className="absolute inset-0  w-full h-full object-cover opacity-30"
                />
                <div className="relative z-10 text-center">
                    <motion.div style={{
                        opacity: opacityTransform,
                        scale: scaleDownTransform

                    }}>
                        <AnimatedSlideText inView

                            text="OUR TEAM"
                            className='text-center  text-blue-950- text-primary-color font-black mb-6 text-3xl sm:text-4xl lg:text-5xl max-w-3xl mx-auto '>

                        </AnimatedSlideText>
                    </motion.div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto  py-10 px-4">

                <Breadcrumb>
                    <BreadcrumbList className="flex gap-2">
                        <BreadcrumbItem>
                            <BreadcrumbLink  >
                                <Link to={"/"}>
                                    Home
                                </Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink >Support</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Our Team</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <VariantHeading className='text-center gap-x-3 uppercase mb-6 flex items-center text-blue-950 [font-family:var(--second-font)] font-black text-3xl lg:text-4xl max-w-fit mx-auto'>

                    <span
                        className='w-10  h-[1px] bg-primary-color '
                    />  <span className='flex items-center'>OUR TEAM </span>
                    <span
                        className='w-10  h-[1px] bg-primary-color '
                    />

                </VariantHeading>
                <Heading className="text-center max-w-4xl mx-auto text-muted-foreground mb-6">
                    Qui ea iisque consetetur scriptorem, ad dico posse postulant duo, in qui suas mucius omittam. Labore viderer pri no, an justo.
                    Qui ea iisque consetetur scriptorem, ad dico posse postulant duo, in qui suas mucius omittam. Labore viderer pri no, an justo.
                </Heading>
                <OurSkills />
                <VariantHeading className='text-center gap-x-3 uppercase mb-6 flex items-center text-blue-950 [font-family:var(--second-font)] font-black text-3xl lg:text-4xl max-w-fit mx-auto'>

                    <span
                        className='w-10  h-[1px] bg-primary-color '
                    />  <span className='flex items-center'>OUR <span className="text-secondary-color">PROFESSIONAL</span> </span>
                    <span
                        className='w-10  h-[1px] bg-primary-color '
                    />

                </VariantHeading>
                <div className=" w-full flex-col lg:flex-row flex items-start">

                    <LayoutGrid cards={[
                        ...employees

                    ]} />



                </div>

            </div>
        </div>
    )
}

export default OurTeamPage
