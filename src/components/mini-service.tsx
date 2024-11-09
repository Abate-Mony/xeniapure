

// Import Swiper React components
// import { useMediaQuery } from 'react-responsive';



import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

import Heading from './ui/heading.js';

// const arr = [

//     trustImage1,
//     trustImage2,
//     trustImage3,
//     trustImage4,
//     trustImage5,
//     trustImage6
// ]


const MiniService = () => {
    // const isDesktop = useMediaQuery({ query: "(min-inline-size: 768px)" })

    return (
        <motion.div
            className='w-[min(34rem,calc(100%-2rem))] 
      rounded-sm relative !z-[100] bg-white text-black mx-auto overflow-visible shadow-xl
       -mt-[2.5rem]'
            initial={{
                y: 60,
                opacity: 0.9



            }}
            whileInView={{ y: 0, opacity: 1 }}

            viewport={{
                amount: 0.5,


            }}
            transition={{ duration: 1 }}

        >

            <div className=" px-8 py-4 flex  flex-col gap-y-2.5  bg-primary-color- bg-center bg-cover bg-no-repeat"
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
                <Heading className='font-black text-3xl text-white'>
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
// export const MiniServiceIcon = () => {
//     return (

//         <div className='bg-white py-20 overflow-hidden'>
//             <div className='max-w-5xl mx-auto px-4'>
//                 <>
//                     <Swiper
//                         slidesPerView={3}
//                         spaceBetween={10}
//                         autoplay={{
//                             delay: 500,
//                             pauseOnMouseEnter: true
//                         }}
//                         breakpoints={{
//                             640: {
//                                 slidesPerView: 4,
//                                 spaceBetween: 20,
//                             },
//                             768: {
//                                 slidesPerView: 5,
//                                 spaceBetween: 40,
//                             },
//                             1024: {
//                                 slidesPerView: 6,
//                                 spaceBetween: 80,
//                             },
//                         }}

//                         loop={true}
//                         translate="yes"
//                         modules={[Autoplay]}
//                         className="!w-full"
//                     >

//                         {arr.map((arr, idx) => <SwiperSlide className=" w-full" key={idx}>
//                             {({ ...props }) => (<RenderIcon
//                                 src={arr}
//                                 {...props}
//                             />)}
//                         </SwiperSlide>)}
//                     </Swiper>
//                 </>
//             </div>
//         </div>)
// }

export default MiniService