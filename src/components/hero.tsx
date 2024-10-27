import { heroBanner } from '@/constants/constants';
import { motion } from "framer-motion";
import { MoveRight } from 'lucide-react';
// import { useState } from 'react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from './ui/button';
import { Compare } from './ui/compare';
import { AnimatedLinks } from './ui/links';
import { Spotlight } from './ui/spot-light';
import { TypewriterEffect } from './ui/typer-write-effect';

const Hero = () => {
  
    // const [swiper, setSwiper] = useState<any>(null)
    const TIME_OUT=7000
    return (
        <div className='relative'>

            <div className="h-[min(calc(100vh-4rem),40rem)]  flex-col w-full rounded-none flex md:items-center md:justify-center  bg-black/[0.2] antialiased bg-grid-white/[0.02] relative overflow-hidden">

                <Swiper
                    spaceBetween={30}
                    effect={'fade'}

                    autoplay={{ delay: TIME_OUT, }}
                    modules={[EffectFade, Navigation, Pagination, Autoplay]}
                    className="!size-full !absolute "
                >
                    {
                        heroBanner.map((heroItem) => {
                            return (

                                <SwiperSlide className="!size-full">
{/* 
                                    <img
                                        className="size-full object-fill"
                                        src={heroItem.image}
                                    /> */}
  <Compare
                                firstImage={heroItem.image}
                                secondImage="https://livewp.site/wp/md/clengo/wp-content/uploads/sites/61/2019/04/Stainless-Steel-Cleaning.jpg"
                                firstImageClassName="object-cover object-left-top w-full"
                                secondImageClassname="object-cover object-left-top w-full"
                                className="w-full pointer-events-none h-full size-full object-fit !==absolute inset-0 !rounded-none px-0 border-0"
                                // slideMode="hover"
                                autoplay={true}
                            />

                                </SwiperSlide>
                            )
                        })
                    }



                </Swiper>

                <Swiper
                    // effect={'fade'}
                    loop
                    longSwipes

                    // onSwiper={setSwiper}
                    direction='vertical'
                    autoplay={{ delay: TIME_OUT-200, }}
                    modules={[Navigation, Pagination, Autoplay]}
                    className="h-full !w-full !pointer-events-none">

                    {
                        heroBanner.map(word => (
                            <SwiperSlide

                                className='h-full '>
                                <div className="bg-black/[0.5]  w-full flex items-center justify-center relative h-full z-[20]">


                                    <Spotlight
                                        className="-top-40 left-0 md:left-60 md:-top-20"
                                        fill="white"
                                    />
                                    <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                                        <div className='mb-4'>
                                            <TypewriterEffect
                                                className="font-pacifico  text-white"
                                                wordClassName="text-6xl sm:text-7xl   lg:text-8xl xxl:text-8xl"
                                                words={word.heading} />
                                        </div>

                                        <motion.p
                                            initial={{
                                                y: 100,
                                                scale: 0.5
                                            }}
                                            whileInView={{
                                                y: 0,
                                                scale: 1
                                            }}
                                            transition={{
                                                duration: 1
                                            }}
                                            className="mt-4 font-poppins font-normal text-lg mb-6 text-neutral-300 max-w-lg text-center mx-auto ">
                                            {word.description}
                                        </motion.p>
                                        <div className="flex justify-center flex-wrap gap-x-4 gap-y-6 items-center py-5">
                                            {/* check if the user is logged in  */}
                                            <Button
                                                className=" hover:border-none capitalize pointer-events-auto !relative z-[1000]
                             py-6 text-sm bg-primary-color shadow-md shadow-black/60 border-white rounded-full h-16 px-14 animate-bounce hover:animate-none"
                                            >
                                                {/* redirect the user to dashboard if user is logged in */}
                                                <AnimatedLinks to={"/contact-us?rd_from=hero"}

                                                    className="w-full font-medium text-lg "
                                                >
                                                    get started <MoveRight className='inline-block ml-0.5 animate-spin' />
                                                </AnimatedLinks>

                                            </Button>

                                        </div>
                                        <div
                                            className="mb-6"
                                        ></div>





                                    </div>

                                </div>
                            </SwiperSlide>
                        ))
                    }



                </Swiper>





            </div>
        </div>
    );
}

export default Hero;
