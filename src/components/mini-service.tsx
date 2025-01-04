

// Import Swiper React components
// import { useMediaQuery } from 'react-responsive';



import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

import Heading from './ui/heading.js';
import { useRef } from 'react';



const MiniService = () => {
    const containerRef = useRef<HTMLImageElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        // offset: ["start start", "end end"],
    })
    const scaleTransform = useTransform(scrollYProgress, [0, 1], [0, 40]);

    return (
        <motion.div
            ref={containerRef}
            className='w-[min(34rem,calc(100%-2rem))]   
      rounded-sm relative z-50 bg-white text-black mx-auto overflow-visible- shadow-xl
       -mt-[4.5rem]'
            style={{
                y: scaleTransform,
            }}
            transition={{ duration: 1 }}

        >

            <div className=" px-8 py-4 flex   flex-col gap-y-2.5  bg-primary-color- bg-center bg-cover bg-no-repeat"
                style={{
                    background: "url(https://livewp.site/wp/md/clengo/wp-content/uploads/sites/61/2019/06/home_bg_03.png)"
                }}
            >
                <Heading className='font-black text-xl font-Marcellus+SC'>
                    Hotline
                </Heading>
                <Heading className='font-black text-3xl font-pacifico text-muted-foreground'>
                    Get Information:
                </Heading>
                <Heading className='font-black text-2xl sm:text-3xl text-white'>
                    <a href='tel:7738398379' className="flex items-center">
                        <span className='size-14 flex items-center justify-center bg-white/20 mr-2 rounded-full'>
                            <Phone />
                        </span>
                        <span>
                            8 800 563 2240
                        </span>
                    </a >
                </Heading>
            </div>
        </motion.div>
    )
}


export default MiniService