import { Mail, PhoneIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Heading from './ui/heading';

const TopHeader = () => {
    return (
        <div
            className='h-12 flex items-center justify-center  bg-secondary-color'
        >
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                speed={3000}
                autoplay={{
                    delay: 2500,
                    // pauseOnMouseEnter: true
                }}
                modules={[Autoplay]}
                className="  mx-auto !w-full max-w-4xl items-center"
            >
                <SwiperSlide className='max-w-8xl  w-full'>
                    <div
                        className='flex w-full bg px-2.5 justify-between items-center  mx-auto'
                    >
                        {/* right side here */}
                        <Link target='_blank' to={"mailto:akobateemmanuel@gmail.com"}>
                            <Heading className='flex gap-x-2 text-sm items-center  text-white'>
                                <Mail size={15} />
                                example@gmail.com
                            </Heading>
                        </Link>
                        {/* left side here */}
                        <a href='tel:+44 7479391536'>
                            <Heading className='flex gap-x-2 text-sm items-center  text-white'>
                                <PhoneIcon size={15} />
                                +44 00000xxx
                            </Heading>
                        </a>
                    </div>

                </SwiperSlide>
                <SwiperSlide className='max-w-8xl w-full'>
                    <div
                        className='flex w-full bg px-4 justify-between items-center  mx-auto'
                    >
                        {/* right side here */}
                        <Link target='_blank' to={"https://github.com/Abate-Mony"}>
                            <Heading className='flex gap-x-2 text-sm items-center  text-white'>
                                <Mail size={15} />
                                GitHub-Abate-Mony
                            </Heading>
                        </Link>
                        {/* left side here */}
                        <a href='tel:+44 7479391536'>
                            <Heading className='flex gap-x-2 text-sm items-center  text-white'>
                                <PhoneIcon size={15} />
                                +44 00000xxx
                            </Heading>
                        </a>
                    </div>

                </SwiperSlide>
                <SwiperSlide className='max-w-8xl w-full'>
                    <div
                        className='flex w-full bg px-4 justify-between items-center  mx-auto'
                    >
                        {/* right side here */}
                        <Link target='_blank' to={"https://github.com/Abate-Mony"}>
                            <Heading className='flex gap-x-2 text-sm items-center  text-white'>
                                <Mail size={15} />
                                GitHub-Abate-Mony
                            </Heading>
                        </Link>
                        {/* left side here */}
                        <div>
                            <Heading className='flex gap-x-2 text-sm items-center  text-white'>
                                <PhoneIcon size={15} />
                                site@map.vercel.com
                            </Heading>
                        </div>
                    </div>

                </SwiperSlide>


            </Swiper>


        </div>
    )
}

export default TopHeader