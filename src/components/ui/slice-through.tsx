import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { heroBanner } from '@/constants/constants';
// import { useState } from "react";
// import { Swiper as typeSwiper } from "swiper/types";
// import "./slice-through.css";

const SliceThrough = () => {
    const images = heroBanner.map(hero => hero.image);
    // const [activeSlide, setActiveSlide] = useState(0);

    // const handleSlideChange = (swiper:typeSwiper) => {
    //     setActiveSlide(swiper.activeIndex);
    // };

    return (
        <div className="relative ">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 10000 }}
                // pagination={{ clickable: true }}
                navigation
                speed={3000}
                direction="vertical"
                className="slicer-slider max-h-screen"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="relative h-screen group">
                        {/* Animate each slice with Framer Motion */}
                        {({ isActive }) => (
                            Array.from({ length: 8 }).map((_, sliceIndex) => (
                                <motion.div
                                    key={sliceIndex}
                                    className="slice !left-0 group-[.swiper-slide-active]:border-4"
                                    style={{ backgroundImage: `url(${image})` }}
                                    initial={{
                                        opacity: 0,
                                        // scale: 1.2,
                                        x: isActive ? 0 : 0,
                                        y: 50,
                                        bottom: "-100px"
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        // scale: 1,
                                        y: 0,
                                        bottom: "0px"

                                    }}
                                    transition={{
                                        delay: sliceIndex * 0.3,
                                        duration: 0.8,
                                        ease: "easeInOut",
                                    }}
                                ></motion.div>
                            ))
                        )}

                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default SliceThrough;
