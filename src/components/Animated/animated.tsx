import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring, MotionProps, useScroll, useTransform } from "framer-motion"
import { cn } from '../../lib/utils.js'
type iWord = {
    text: string;
    className?: string;
}[];
const qoute = {
    initial: {
        opacity: 1
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08
        }

    }
}

const singleword = {
    initial: {
        y: 50,
        x: -10,
        opacity: 0
    },
    animate: {
        y: 0, opacity: 1, x: 0
        , transition: {
            duration: 1
        }
    }
}

export const SplitText = ({ text }: { text: string }) => {
    return text?.split(" ").map((word, index) => (
        <motion.span

            variants={singleword}
            className='inline-block'
            key={index + word}
        >{word}&nbsp;</motion.span>
    ))
}
interface iAnimatedProps {
    className?: string,
    inView?: boolean;
    amount?: number;
    text: string,
    words?: iWord,
    once?: boolean

}
export const AnimatedText = ({
    text,
    className = "",
    inView,
    amount, once = true }: iAnimatedProps) => {

    return (
        <div
            className={cn(` w-full  mx-auto  py-2 flex items-center justify-center text-center 
            overflow-hidden`,)}
        >
            <motion.h1
                variants={qoute}
                initial="initial"
                animate={inView ? false : "animate"}
                whileInView={inView ? "animate" : ""}
                viewport={{ once, amount: amount ? amount : 0.2 }}
                className={cn(`break-words
                inline-block w-full text-dark font-black  capitalize
                text-6xl`, className)}>

                <SplitText text={text} />


            </motion.h1>


        </div>
    )
}
interface iAnimateError {
    error: any,
    errorMessage: string,
    className?: string;
    duration?: number
}
export function AnimateError({
    error,
    errorMessage,
    className, duration }: iAnimateError) {
    return (

        <div className={
            cn(`mb-1    flex max-w-sm mx-auto
        items-center
        justify-between
        text-xs font-medium
        md:text-sm
        text-orange-600`,
                className)}>
            <motion.h1
                animate={{
                    opacity: error ? 1 : 0,
                    x: error ? [-50, 50, 0, -50, 50, 0] : undefined

                }}
                transition={{ duration: duration || 0.3 }}
                className="w-fit flex-none mx-auto tracking-[0.2rem]  mt-0.5  text-center ">  {errorMessage}</motion.h1>
        </div>

    )
}
const _singleword = {
    initial: {
        // y: 50,
        x: 20,
        opacity: 0.1,
        // scale: 0.1
    },
    animate: {
        // y: 0,
        opacity: 1,
        x: 0,
        scale: 1
        , transition: {
            duration: 0.8,
        }
    }
}

const SplitSlideText = ({ text
    , words
}: { text: string, words?: iWord }) => {
    if (words?.length) {
        console.log("words here", words)
        return words.map((word) => word).map((singleword_) => {
            console.log("single word", singleword_)
            const _word = singleword_.text.split("").map((word, index) => (
                <motion.span
                    variants={_singleword}
                    className={cn('inline-block break-normal',
                        singleword_.className
                    )}
                    key={index + word}
                >{word}</motion.span>))
            return <div className='inline-block'>{_word} &nbsp;</div>

        })

    }
    return text?.split(" ").map((word) => word).map((singleword_) => {
        const _word = singleword_.split("").map((word, index) => (
            <motion.span
                variants={_singleword}
                className='inline-block break-normal'
                key={index + word}
            >{word}</motion.span>))

        return <div className='inline-block'>{_word}&nbsp;</div>

    })
}
export const AnimatedSlideText = ({
    text,
    className = "",
    inView,
    amount,
    words, once = true }: iAnimatedProps) => {
    return (
        <div
            className={cn(` w-full  mx-auto  py-2 flex items-center justify-center text-center 
            overflow-hidden`,)}
        >
            <motion.h1
                variants={qoute}
                initial="initial"
                animate={inView ? false : "animate"}
                whileInView={inView ? "animate" : ""}
                viewport={{ once, amount: amount ? amount : 0.2 }}
                className={cn(`break-words
                inline-block w-full text-dark font-black  capitalize [font-family:var(--second-font)]
                text-6xl`, className)}>

                <SplitSlideText text={text} words={words} />
            </motion.h1>


        </div>
    )
}
export const AnimatedNumber = ({ value, className }: {
    value: number,
    className?: string
}) => {
    const ref = React.useRef<any>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        duration: 3000,
    })
    const isInView = useInView(ref, {
        once: false,
        amount: 0.8

    });
    React.useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])
    React.useEffect(() => {
        springValue.on('change', (latest) => {
            if (ref.current && Number(latest.toFixed(0)) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })

    }, [springValue, value])

    return (
        <motion.span ref={ref}
            className={cn('',// define baseclasses here

                className)}
        >
        </motion.span>
    )
}
type SpotlightProps = {
    className?: string;
    fill?: string;
};

export const Spotlight = ({ className, fill }: SpotlightProps) => {
    return (
        <svg
            className={cn(
                "animate-spotlight pointer-events-none absolute z-[1]  h-[169%] w-[138%] lg:w-[84%] opacity-0",
                className
            )}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 3787 2842"
            fill="none"
        >
            <g filter="url(#filter)">
                <ellipse
                    cx="1924.71"
                    cy="273.501"
                    rx="1924.71"
                    ry="273.501"
                    transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
                    fill={fill || "white"}
                    fillOpacity="0.21"
                ></ellipse>
            </g>
            <defs>
                <filter
                    id="filter"
                    x="0.860352"
                    y="0.838989"
                    width="3785.16"
                    height="2840.26"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundimgFix"></feFlood>
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundimgFix"
                        result="shape"
                    ></feBlend>
                    <feGaussianBlur
                        stdDeviation="151"
                        result="effect1_foregroundBlur_1065_8"
                    ></feGaussianBlur>
                </filter>
            </defs>
        </svg>
    );
};
// export default AnimatedText
//animated scroll inview 

export interface props extends React.HTMLAttributes<HTMLHeadingElement> {
    direction?: "left" | "right",
}
export const ScrollSection = ({
    className, direction = "right", ...props

}: & props & MotionProps) => {
    const target = useRef<HTMLDivElement>(null); // Ref for scroll area
    const [contentWidth, setContentWidth] = useState(0); // To hold dynamic content width


    useEffect(() => {
        const handleResize = () => {
            if (target.current) {
                // Total scroll width (content width including hidden part)
                setContentWidth(target.current.scrollWidth - target.current.getBoundingClientRect().width);
            }
        };

        // Run on initial load and whenever resized
        handleResize();

        // Observe changes in content size and update the width
        const resizeObserver = new ResizeObserver(handleResize);
        if (target.current) resizeObserver.observe(target.current);

        return () => resizeObserver.disconnect(); // Clean up observer on component unmount
    }, []);

    // ScrollY progress from framer-motion hook
    const { scrollYProgress } = useScroll({
        target: target,
        offset: ["start 60%", "end 50%"], // Adjust as needed
    });

    // Transform scroll progress (0 to 1) to translateX values (horizontal scroll)
    const _dir = direction == "left" ? [-contentWidth, 0] : [0, -contentWidth];
    const translateX = useTransform(scrollYProgress, [0, 1], _dir);
    // Get the total width including scrollable content

    return (
        <section
            id="scroll-section"
            className={cn("w-full flex- items-center py-10-  overflow-hidden relative")} // Hide overflow to ensure horizontal scroll is contained
        >
            <motion.div
                ref={target} // Attach ref to the scroll area
                style={{ x: translateX }} // Apply the calculated horizontal scroll based on scrollY progress
                className={
                    cn("flex font-manrope- uppercase  gap-8 items-center  ",
                        className
                    )
                } // Adjust container for horizontal scrolling
                {...props}

            >
            </motion.div>
        </section>
    );
};

