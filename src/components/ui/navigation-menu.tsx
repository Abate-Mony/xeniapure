import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { ArrowUpFromDot } from 'lucide-react';
import { useState } from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const NavigationArrow = () => {
    const { scrollY, scrollYProgress } = useScroll();
    const opacity = useTransform(scrollY, [400, 500], [0, 1]);
    const right = useTransform(scrollY, [300, 500], [-100, 32]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const [percent, setPercent] = useState(0);
    useMotionValueEvent(scrollYProgress, "change", current => {
        const n = Number((current * 100)?.toFixed(0));
        if (typeof current === "number") setPercent(n);
    });

    return (
        <motion.div
            onClick={scrollToTop}
            style={{ opacity, right }}
            className='fixed z-[100] bg-gradient-to-br from-primary-color to-secondary-color hover:from-primary-color-light hover:to-secondary-color-light backdrop-blur-lg bottom-16 top-auto right-8 rounded-full size-10 lg:size-14 flex items-center justify-center shadow-lg overflow-hidden cursor-pointer transition-all duration-300 ease-in-out'
        >
            <CircularProgressbarWithChildren 
                value={percent}
                styles={buildStyles({
                    pathColor: `rgba(55, 55, 255, ${percent / 100})`,
                    trailColor: '#f0f0f0',
                    backgroundColor: '#3e98c7',
                })}
            >
                <ArrowUpFromDot size={20} color="white" className="transition-transform duration-300 ease-in-out" />
            </CircularProgressbarWithChildren>
        </motion.div>
    );
};

export default NavigationArrow;
