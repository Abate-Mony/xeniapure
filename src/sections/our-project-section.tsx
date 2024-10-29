import { Button } from '../components/ui/button';

// Import Swiper React components
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import { FocusCard } from '@/components/ui/focus-card';
import { VariantHeading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const OurProjectExample = () => {

    const cultural_images_object = [

        {
            url: "https://livewp.site/wp/md/clengo/wp-content/uploads/sites/61/2019/04/project_img_03.jpg",
            description: "some descriptio"
        },
        {
            url: "https://livewp.site/wp/md/clengo/wp-content/uploads/sites/61/2019/04/project_img_12-400x400.jpg",
            description: "some descriptio"
        },
        {
            url: "https://livewp.site/wp/md/clengo/wp-content/uploads/sites/61/2019/04/men-cleaning.jpg",
            description: "some descriptio"
        },
        {
            url: "https://livewp.site/wp/md/clengo/wp-content/uploads/sites/61/2019/04/project_img_01.jpg",
            description: "some descriptio"
        },
        {
            url: "https://livewp.site/wp/md/clengo/wp-content/uploads/sites/61/2019/04/woman-with-closes-1.jpg",
            description: "some descriptio"
        },
        {
            url: "https://livewp.site/wp/md/clengo/wp-content/uploads/sites/61/2019/04/project_img_02.jpg",
            description: "some descriptio"
        },
        {
            url: "https://livewp.site/wp/md/clengo/wp-content/uploads/sites/61/2019/04/project_img_4.jpg",
            description: "some descriptio"
        },
        {
            url: "https://livewp.site/wp/md/clengo/wp-content/uploads/sites/61/2019/04/woman.jpg",
            description: "some descriptio"
        },
    ]
    const pagination = {
        clickable: true,
        el: '.custom-pagination-hero', // Custom pagination element
        renderBullet: (_index: number, className: string) => {
            return '<span class="' + className + '">' + '</span>';
        }
    };
    const SPEED = 2500
    const [hovered, setHovered] = useState<number | null>(null);
    return (
        <div className='py-6'>
        

            <VariantHeading className='text-center text-blue-950 py-6 gap-x-3 uppercase mb-6 flex items-center text-colorPrimary [font-family:var(--second-font)] font-black text-3xl lg:text-4xl max-w-fit mx-auto '>

                <span
                    className='w-10  h-[1px] bg-primary-color/70  uppercase'
                />  <span>            Our <span className='text-primary-color'>
                    Projects
                </span>
                </span>
                <span
                    className='w-10  h-[1px] bg-primary-color '
                />

            </VariantHeading>
            <Separator className='max-w-6xl h-1 rounded-full mx-auto  bg-colorPrimary' />
            {/* swipers starts here  */}
            <div className='relative'


            >


                <Swiper
                    loop
                    speed={SPEED}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={1.2}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 1500,
                        pauseOnMouseEnter: true,
                        disableOnInteraction: true,
                    }}
                    pagination={pagination}
                    navigation={{
                        nextEl: '.custom-button-next',
                        prevEl: '.custom-button-prev',
                    }}
                    modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
                    className="!w-full !max-w-5xl mx-auto my-6"
                    breakpoints={{
                        640: {
                            slidesPerView: 1.5,
                        },
                        768: {
                            slidesPerView: 2.5,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >


                    {
                        cultural_images_object.map((obj, idx) => (<SwiperSlide
                            className='lg:h-[min(calc(100vh-4rem),30rem)] h-[min(calc(100vh-4rem),25rem)] justify-center items-center  flex-col w-full justify-center- rounded-none flex md:items-center md:justify-center  antialiased bg-grid-white/[0.02] relative overflow-hidden !px-0'
                            key={idx}>
                            {/* <img src={obj.url}
                                className='size-full'
                                alt={obj.description}
                            /> */}
                            <FocusCard card={{
                                src: obj.url,
                                title: "this the description about this section !",
                                text:"dsdfpreserving our rich Kom heritage and passing it down to future generations. Through various community-driven events such as traditional ceremonies, cultural festivals, and educational programs, we aim to keep our traditions alive and relevant in a modern context. Our network also places a strong emphasis on mentorship, fostering growth and development among younger members by connecting them with "
                            }} key={idx} hovered={hovered} index={idx} setHovered={setHovered} />
                        </SwiperSlide>))
                    }
                </Swiper>
                <div className="custom-pagination-hero mt-4 flex justify-center"></div>
                <div className="custom-button-prev custom-button  lg:absolute -bottom-12 lg:bottom-auto lg:top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg cursor-pointer ml-auto inline-flex items-center justify-center space-x-2 select-none"> <ArrowLeft size={20} /><span className='-hidden sm:block -sr-only'>Prev</span> </div>
                <div className="custom-button-next custom-button lg:absolute -bottom-12 lg:bottom-auto lg:top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg cursor-pointer ml-auto inline-flex items-center justify-center space-x-2 select-none ">Next <ArrowRight size={20} /></div>


            </div>
            {/* swipers ends here  */}

<Link to="/gallery">
<Button className='block mx-auto my-10 hover:bg-colorPrimary hover:text-white transition-colors duration-300 shadow rounded-none bg-transparent text-colorPrimary border w-[min(20rem,calc(100%-1rem))] border-colorPrimary'>Load More</Button>

</Link>
        </div>
    )
}

export default OurProjectExample
