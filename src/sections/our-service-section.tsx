import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { BsChevronRight, BsChevronLeft } from "react-icons/bs"
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";

// import "./styles.css";


import Heading, { VariantHeading } from "@/components/ui/heading";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { A11y, Autoplay, FreeMode, Navigation, Pagination, Scrollbar, Thumbs } from "swiper/modules";
import { AnimatedSlideText } from "../components/Animated/animated";
import { Button } from "../components/ui/button";
import { cn } from "../lib/utils";

interface SubService {
    title: string;
    description: string;
}

interface Service {
    title: string;
    sub_services: SubService[];
    imgUrl?: string;
    href?: string;
}

export const cleaningServices: Service[] = [
    {
        title: 'Residential Cleaning',
        imgUrl: "https://livewp.site/wp/md/clengo/wp-content/uploads/sites/61/2019/04/woman-with-closes-1.jpg",
        sub_services: [
            {
                title: 'Routine Cleaning',
                description: 'Regular cleaning to maintain a pristine and hygienic home, covering tasks like dusting, vacuuming, and disinfecting surfaces. Ideal for homes that need consistent upkeep to keep spaces fresh and comfortable.',
            },
            {
                title: 'Deep Cleaning',
                description: 'Comprehensive cleaning that targets neglected or hard-to-reach areas, such as behind appliances, baseboards, and under furniture. Perfect for spring cleaning or homes in need of a refresh.',
            },
            {
                title: 'Move-In/Move-Out Cleaning',
                description: 'Detailed cleaning service designed for tenants and property owners, ensuring the space is spotless and ready for new occupancy. Includes thorough scrubbing of all rooms, appliances, and cabinets.',
            },
        ],
    },
    {
        title: 'Commercial Cleaning',
        imgUrl: "https://livewp.site/wp/md/clengo/wp-content/uploads/sites/61/2019/04/project_01-800x400.jpg",
        sub_services: [
            {
                title: 'Office Cleaning',
                description: 'Daily or weekly cleaning services tailored for office environments to ensure a sanitary and welcoming workspace, including dusting, sanitizing high-touch surfaces, and emptying waste bins.',
            },
            {
                title: 'Retail Cleaning',
                description: 'Specialized cleaning for retail spaces, focused on creating an inviting environment for customers. Involves cleaning floors, displays, fitting rooms, and restrooms for an impeccable presentation.',
            },
            {
                title: 'Post-Construction Cleaning',
                description: 'Intensive cleaning service after construction or renovation projects, removing dust, debris, and residues from all surfaces. Ideal for preparing the property for business operations.',
            },
        ],
    },
    {
        title: 'Specialized Cleaning Services',
        imgUrl: "https://livewp.site/wp/md/clengo/wp-content/uploads/sites/61/2019/04/project_05-800x400.jpg",
        sub_services: [
            {
                title: 'Carpet & Upholstery Cleaning',
                description: 'Professional carpet and upholstery cleaning services that use deep-cleaning methods to remove stains, allergens, and dirt, helping to extend the life of fabric and enhance air quality.',
            },
            {
                title: 'Window Cleaning',
                description: 'Interior and exterior window cleaning for homes or businesses, ensuring streak-free, crystal-clear windows that enhance the appearance of any property. Includes cleaning sills and frames.',
            },
            {
                title: 'Floor Care & Maintenance',
                description: 'Specialized services for all types of flooring, including hardwood, tile, and vinyl. Includes buffing, waxing, and sealing to maintain durability and aesthetic appeal.',
            },
        ],
    },
    {
        title: 'Eco-Friendly Cleaning',
        imgUrl: "https://livewp.site/wp/md/clengo/wp-content/uploads/sites/61/2019/04/Provide-office-hygiene.jpg",
        sub_services: [
            {
                title: 'Green Cleaning',
                description: 'Environmentally conscious cleaning that uses eco-friendly products and practices to reduce the carbon footprint, ideal for clients concerned about sustainability.',
            },
            {
                title: 'Allergy-Safe Cleaning',
                description: 'Cleaning services tailored to reduce allergens and improve indoor air quality, ideal for homes with sensitive individuals. Utilizes non-toxic, hypoallergenic products.',
            },
        ],
    },
    {
        title: 'Emergency Cleaning Services',
        imgUrl: "https://livewp.site/wp/md/clengo/wp-content/uploads/sites/61/2019/04/project_img_12-400x400.jpg",
        sub_services: [
            {
                title: 'Flood Cleanup',
                description: 'Rapid response to flood damage, extracting water, drying affected areas, and disinfecting to prevent mold growth. Essential for protecting the integrity of the property after flooding incidents.',
            },
            {
                title: 'Fire Damage Restoration',
                description: 'Comprehensive cleaning and restoration after fire incidents, removing soot, smoke residues, and odors. Focuses on restoring normalcy quickly and efficiently.',
            },
        ],
    },
    {
        title: 'Real Estate & Property Management Cleaning',
        imgUrl: "https://livewp.site/wp/md/clengo/wp-content/uploads/sites/61/2019/04/men-cleaning.jpg",
        sub_services: [
            {
                title: 'Pre-Sale Cleaning',
                description: 'Detail-oriented cleaning service to enhance the presentation of homes for sale, including polishing floors, shining windows, and ensuring all surfaces are spotless.',
            },
            {
                title: 'Tenant Turnover Cleaning',
                description: 'Thorough cleaning service tailored for rental properties between tenants, ensuring a clean, welcoming environment for new occupants. Includes appliances, bathrooms, and more.',
            },
        ],
    }
];







export default function ServiceSection() {
   
    const TIME_OUT = 5000
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const pagination = {
        clickable: true,
        renderBullet: function (_index: any, className: string) {
            return '<span class="' + className + ' active' + '">' + '</span>';
        },
    };
    return (
        <div className=" py-24 ">
            <div className="max-w-6xl mx-auto px-4 mb-6">


                <VariantHeading className='text-center gap-x-3 uppercase mb-6 flex items-center text-blue-950 [font-family:var(--second-font)] font-black text-3xl lg:text-4xl max-w-fit mx-auto'>

                    <span
                        className='w-10  h-[1px] bg-primary-color '
                    />  <span className='flex items-center'>OUR SERVICE </span>
                    <span
                        className='w-10  h-[1px] bg-primary-color '
                    />

                </VariantHeading>
                <Heading className="text-center max-w-4xl mx-auto text-muted-foreground mb-6">
                    Qui ea iisque consetetur scriptorem, ad dico posse postulant duo, in qui suas mucius omittam. Labore viderer pri no, an justo.
                    Qui ea iisque consetetur scriptorem, ad dico posse postulant duo, in qui suas mucius omittam. Labore viderer pri no, an justo.
                </Heading>
                <div className="relative    flex items-center !overflow-auto">
                  
                    <Swiper
                        id="scrollbar"
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={1.3}
                        freeMode={true}
                        watchSlidesProgress={true}
                        // scrollbar={{ draggable: true, dragSize: 100 }}

                        modules={[Navigation, FreeMode, Navigation, Thumbs, Scrollbar]}
                        className="!w-full "
                        breakpoints={{
                            640: {
                                slidesPerView: 2.2,
                            },
                            786: {
                                slidesPerView: 3.5,
                            },
                            992: {
                                slidesPerView: 4.5,
                            },



                        }}
                    >
                        {cleaningServices.map((item, index) => (<SwiperSlide key={index}

                        >
                            <Heading
                                className="text-lg lg:text-lg flex items-center justify-center w-full !capitalize cursor-pointer min-h-auto mb-4 whitespace-nowrap overflow-hidden text-ellipsis"
                            // className="text-lg lg:text-lg line-clamp-1- flex items-center justify-center w-full !capitalize cursor-pointer min-h-auto mb-4"
                            >
                                {item?.title}
                            </Heading>
                        </SwiperSlide>))}
                    </Swiper>
                </div>

                <Swiper
                    speed={TIME_OUT}
                    autoplay={{
                        delay: TIME_OUT,
                        pauseOnMouseEnter: true,
                        disableOnInteraction: true,
                        reverseDirection: true,

                    }}

                    // pagination={pagination}
                    modules={
                        [Pagination, A11y, Autoplay, FreeMode, Thumbs]
                    }
                    spaceBetween={10}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper?.destroyed ? thumbsSwiper : null }}

                    className="!w-full pb-10 "
                >
                    {

                        cleaningServices.map((item, index) => (<SwiperSlide key={index}>
                            <motion.div
                                initial={{
                                    opacity: 0.1,
                                    y: 200,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    delay: TIME_OUT/80000
                                }}

                                className={
                                    cn("lg:flex flex-col md:flex-row  md:px-2 lg:px-6 md:pt-6 md:gap-2 lg:gap-4 ",
                                        index & 1 ? "lg:flex-row-reverse" : ""
                                    )
                                }>

                                <div className=" md:block relative h-[20rem] w-full md:w-[300px] md:h-[25rem] lg:w-[450px] overflow-hidden">

                                    <img

                                        src={item.imgUrl || "https://th.bing.com/th/id/OIP.pA1W6gV9KG94cCMwj1WRTgHaE8?pid=ImgDet&rs=1"}
                                        className="h-full rounded-sm w-full objective-fit" alt={
                                            item.title
                                        } />
                                    <div className="absolute inset-0 bg-black/40 opacity-45
                                    flex items-center justify-center
                                    ">
                                        <AnimatedSlideText text={item.title} className="font-black text-center backdrop-blur-sm px-1.5 animate-pulse bg-white/5 max-w-fit w-[calc(100%-1rem)] py-2.5 text-xl lg:text-3xl text-primary-color">
                                        </AnimatedSlideText >

                                    </div>
                                </div>
                                <div className="flex-1 px-2 my-1 md:mt-0 !h-auto ">
                                    <div className="text-lg md:text-xl">
                                        <Heading className="text-4xl text-blue-950 mb-4 my-2 font-semibold font-Marcellus+SC">
                                            {item.title}
                                        </Heading>
                                        <ol className="border-l-2  border-dotted border-primary-color text-sm border-neutral-300 dark:border-neutral-500">

                                            {
                                                item?.sub_services?.map(({ title, description }, index) => (<li>
                                                    <div className="flex-start flex items-start " key={index}>
                                                        <div
                                                            className="-ml-2 mr-3 size-4 ring-4 ring-primary-color/20 rounded-full bg-primary-color  dark:bg-neutral-500"></div>
                                                    </div>
                                                    <div className="mb-1.5 ml-4 -mt-5">
                                                        <Heading className="font-semibold text-primary-color">
                                                            {title}
                                                        </Heading>
                                                        {/* <h4 className="mb-1.5 text-lg md:text-lg font-semibold"> </h4> */}
                                                        <p className="mb-2 text-neutral-500 leading-6 dark:text-neutral-300">
                                                            {description}
                                                        </p>
                                                    </div>
                                                </li>
                                                ))

                                            }
                                        </ol>
                                        <Link to={`/services/${item.href || "#"}`}>
                                            <Button
                                                variant="outline"
                                                className="btn mb-8"
                                            >
                                                Learn More
                                            </Button>

                                        </Link>


                                    </div>
                                </div>
                            </motion.div>
                        </SwiperSlide>))

                    }

                </Swiper>
            </div>

        </div>
    );
}