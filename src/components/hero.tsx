import { heroBanner } from '@/constants/constants';
import { cn } from '@/lib/utils';
import { motion } from "framer-motion";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from './ui/button';
import { VariantHeading } from './ui/heading';

const Hero = () => {
    const TIME_OUT = 5;
    const [currentSlide, setCurrentSlide] = useState(0);
    const pagination = {
        clickable: true,
        el: '.custom-pagination-hero', // Custom pagination element
        renderBullet: (_index: number, className: string) => {
            return '<span class="' + className + '">' + '</span>';
        }
    };
    return (
        <div className="h-[min(calc(100vh-4rem),40rem)] flex-col w-full justify-center- rounded-none flex md:items-center md:justify-center  antialiased bg-grid-white/[0.02] relative overflow-hidden !px-0">
            <Swiper
                onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)} // Update current slide index
                spaceBetween={30}
                effect={'fade'}
                // direction='vertical'
                loop
                longSwipes
                pagination={pagination}
                autoplay={{ delay: 1000 * TIME_OUT }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                className="!size-full !px-0 !mx-0"
            >
                {heroBanner.map((banner, idx) => {
                    return (
                        <SwiperSlide key={idx} className="!size-full relative">
                            <div className="absolute inset-0 bg-black/80 z-10"></div>

                            <motion.img
                                key={idx * Math.random()} // Ensure unique key for motion component
                                whileInView={{ scale: 1.12 }} // Scale based on current slide
                                initial={{ scale: 1 }}
                                transition={{ duration: TIME_OUT }}
                                alt="ontracklogix"
                                className="!size-full object-fill absolute"
                                src={banner.image}
                                viewport={{ once: false }}
                            />
                            <div className='max-w-6xl mx-auto py-3 pt-6 lg:pt-6 px-4 relative z-20'>
                                <VariantHeading key={currentSlide} className='relative break-words  !justify-start z-30 max-w-2xl text-white font-semibold text-3xl md:text-3xl lg:text-4xl font-poppins  capitalize leading-tight tracking-wide mb-6'>
                                    {
                                        banner.heading.map((itm, idx) => (
                                            <span
                                                className={
                                                    cn("",
                                                        itm.className

                                                    )

                                                }
                                                key={idx}
                                            >
                                                {itm.text + " "}
                                            </span>
                                        ))
                                    }
                                </VariantHeading>
                                <p className='relative z-30 text-white max-w-2xl'>
                                    {
                                        banner.description

                                    }              </p>
                                <span className='mb-6 block' />
                                <Link
                                    to={"/about-us?rd_from=home"}
                                >
                                    <Button
                                        className="text-sm rounded-full hover:text-primary-color font-semibold font-poppins px-8 py-3.5 md:py-3 hover:bg-white hover:border-primary-color border-[1px] h-auto bg-primary-color"
                                    >
                                        Learn More
                                    </Button>
                                </Link>
                            </div>
                        </SwiperSlide>
                    );
                })}
                <div className="custom-pagination-hero  gap-x-1.5 bg-red-500- w-full  flex justify-center left-0  absolute  z-50 bottom-2  ---translate-x-1/2"></div>

            </Swiper>
        </div>
    );
}

export default Hero;
