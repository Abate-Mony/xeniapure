
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const DisplayCulturalImage = () => {
    return (
        <section className='!py-10'>
            <Swiper
                loop
                effect='fade'
                autoplay={{
                    delay: 100,
                    disableOnInteraction: false
                }}
                pagination={true} modules={[Pagination, Autoplay, EffectFade]} className="mySwiper">
                <SwiperSlide>
                    {
                        ({  }) =>
                            <div
                                className='h-[min(25rem,calc(100vh-3.5rem))] lg:h-[min(600px,calc(100vh-50px))] w-full relative flex items-center justify-start'
                            >
                                <img className='w-full h-full object-c absolute inset-0 -z-[1]'
                                    src='https://weed.com/wp-content/uploads/2023/02/how-to-buy-weed-asian-woman-think-about.jpg'
                                />
                                <div className='space-y-6 ml-14'>
                                    <h1
                                        className='lg:text-6xl text-white'
                                    >Dreamed in <br className='hidden lg:block' />
                                        California</h1>

                                    <p
                                        className='text-white text-lg'
                                    >Bringing the unexpected to <br className='hidden lg:block' />

                                        classic timekeeping since 2013.</p>
                                    <div className='flex gap-x-1 text-white items-center  hover:text-blue-600 transition duration-200 font-medium leading-wider'>
                                        <a href='#' className=''>
                                            READ THE MVMT STORY
                                        </a>
                                        {/* <RiArrowRightSFill size={25} /> */}

                                    </div>
                                </div>
                            </div>
                    }
                </SwiperSlide>

                <SwiperSlide>
                    {
                        ({  }) =>
                            <div
                                className='h-[min(25rem,calc(100vh-3.5rem))] lg:h-[min(600px,calc(100vh-50px))] w-full relative flex items-center justify-start'
                            >
                                <img className='w-full h-full object-c absolute inset-0 -z-[1]'
                                    src='https://weed.com/wp-content/uploads/2023/02/happy-black-woman-weed-love.jpg'
                                />
                                <div className='space-y-6 ml-14'>
                                    <h1
                                        className='lg:text-6xl text-white'
                                    >Dreamed in <br className='hidden lg:block' />
                                        California</h1>

                                    <p
                                        className='text-white text-lg'
                                    >Bringing the unexpected to <br className='hidden lg:block' />

                                        classic timekeeping since 2013.</p>
                                    <div className='flex gap-x-1 text-white items-center  hover:text-blue-600 transition duration-200 font-medium leading-wider'>
                                        <a href='#' className=''>
                                            READ THE MVMT STORY
                                        </a>
                                        {/* <RiArrowRightSFill size={25} /> */}

                                    </div>
                                </div>
                            </div>
                    }
                </SwiperSlide>

                <SwiperSlide>
                    {
                        ({  }) =>
                            <div
                                className='h-[min(25rem,calc(100vh-3.5rem))] lg:h-[min(600px,calc(100vh-50px))] w-full relative flex items-center justify-start'
                            >
                                <img className='w-full h-full object-c absolute inset-0 -z-[1]'
                                    src='https://weed.com/wp-content/uploads/2023/02/weed-satisfaction-smoke.jpg'
                                />
                                <div className='space-y-6 ml-14'>
                                    <h1
                                        className='lg:text-6xl text-white'
                                    >Dreamed in <br className='hidden lg:block' />
                                        California</h1>

                                    <p
                                        className='text-white text-lg'
                                    >Bringing the unexpected to <br className='hidden lg:block' />

                                        classic timekeeping since 2013.</p>
                                    <div className='flex gap-x-1 text-white items-center  hover:text-blue-600 transition duration-200 font-medium leading-wider'>
                                        <a href='#' className=''>
                                            READ THE MVMT STORY
                                        </a>
                                        {/* <RiArrowRightSFill size={25} /> */}

                                    </div>
                                </div>
                            </div>
                    }
                </SwiperSlide>






            </Swiper>


        </section>
    )
}

export default DisplayCulturalImage

