import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Heading, { VariantHeading } from '../components/Heading';
import Heading, { VariantHeading } from '@/components/ui/heading';
import { cn } from "@/lib/utils";
import { useMediaQuery } from 'react-responsive';
import ReactStars from 'react-stars';
import { Button } from '../components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../components/ui/dialog";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "../components/ui/drawer";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import AnimatedHeadLessUi from '@/components/ui/AnimatedHeadlessUI';
interface Review {
    readonly name: string;
    readonly review: string;
    readonly starCount: number;
}
const reviews = [
    {
        name: "Sarah Thompson",
        review: "ShipSharp Cleaning transformed my office space! Their attention to detail and commitment to eco-friendly products left everything spotless. It’s refreshing to work with a team that’s so professional and reliable.",
        starCount: 5
    },
    {
        name: "David Roberts",
        review: "As a property manager, I’ve dealt with several cleaning companies, but ShipSharp Cleaning stands out. Their team is punctual, thorough, and the results are consistently impressive. Highly recommend them for both commercial and residential cleaning.",
        starCount: 4.5
    },
    {
        name: "Lisa Nguyen",
        review: "ShipSharp Cleaning’s deep cleaning service exceeded my expectations. From the floors to the windows, every corner of my home sparkled. Plus, they were friendly and respectful of my space. I’ll definitely be using their services again!",
        starCount: 5
    },
    {
        name: "Michael Atu",
        review: "ShipSharp Cleaning is more than just a cleaning service—it’s a game-changer for busy homeowners. The team was efficient, trustworthy, and left my house looking immaculate. I appreciate their dedication to quality.",
        starCount: 4
    },
    {
        name: "Emily Brown",
        review: "I was amazed by ShipSharp Cleaning’s attention to detail. They handled all the tough spots, and my kids’ play area has never been cleaner. It’s reassuring to know they use safe, non-toxic products too.",
        starCount: 5
    },
    {
        name: "Charles Green",
        review: "I’ve used ShipSharp Cleaning for several months, and they’ve consistently provided outstanding service. From routine cleans to special requests, the team is always accommodating. They really understand the importance of a clean, welcoming space.",
        starCount: 4
    }
];


const SingleTestimonial = ({ name, review, starCount }: Review) => {
    return (
        <figure className="snip1157 ">
            <blockquote
                className='!line-clamp-8 pb-2'
            >{review}
                <div className="arrow"></div>
            </blockquote>
            <div className='size-16 rounded-full relative -z-[1] overflow-hidden !px-0'>
                {/* <img src="https://www.africacentre.org.uk/images/757cef11-eeb1-4a5c-98c5-bdac96e639d8/cropped?width=600&height=338" alt="" className='size-full object-cover' /> */}

            </div>
            <div className="author">
                <h5>{name}<span>
                    <ReactStars
                        count={5}
                        value={starCount}
                        edit={false}

                        size={24}
                        half={true}
                        // color="orange"
                        color2={'#fed900'} />
                </span></h5>
            </div>
        </figure>)
}
const pagination = {
    clickable: true,
    el: '.custom-pagination-testimonial', // Custom pagination element
    renderBullet: (_index: number, className: string) => {
        return '<span class="' + className + '">' + '</span>';
    }
};
const Testimonial = () => {
    const [hoveIndex, setHoverIndex] = React.useState<number | null>(null);
    const TIME_OUT = 1000
    const SPEED = 5000
    const buttonRef = React.useRef<any>(null)
    const [open, setOpen] = React.useState(false)
    const isDesktop = useMediaQuery({ query: "(min-width: 768px)" })
    function ProfileForm({ className }: React.ComponentProps<"form">) {
        return (
            <form className={cn("grid items-start gap-4", className)}>
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" defaultValue="ecg@example.com" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" defaultValue="@egc" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="username">review</Label>
                    <Textarea
                        cols={58}
                        placeholder="Type your message here." />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="username">please rate us</Label>
                    <ReactStars

                        count={5}
                        value={3}
                        edit={true}
                        size={24}
                        // color="orange"
                        color2={'#fed900'} />
                </div>

                <Button type="submit"
                >Submit</Button>
            </form>
        )
    }
    return (

        <div className='bg-white overflow-hidden-- py-10'>
            <div className='max-w-6xl mx-auto'>
                <Heading className='text-center text-blue-800 font-black text-3xl max-w-fit mx-auto'>
                    Testimonials

                </Heading>
                <VariantHeading className='text-center text-blue-950 py-6 gap-x-3 uppercase mb-6 flex items-center text-colorPrimary [font-family:var(--second-font)] font-black text-3xl lg:text-4xl max-w-fit mx-auto '>

                    <span
                        className='w-10  h-[1px] bg-primary-color/70 '
                    />  <span>          COMMINUTIES STORIES
                    </span>
                    <span
                        className='w-10  h-[1px] bg-primary-color '
                    />

                </VariantHeading>
                <Swiper
                    speed={SPEED}
                    pagination={pagination}
                    slidesPerView={1.2}
                    spaceBetween={10}
                    autoplay={{
                        delay: TIME_OUT,
                        pauseOnMouseEnter: true
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1.5,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2.5,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3.1,
                            spaceBetween: 50,
                        },
                    }}

                    loop={true}
                    translate="yes"
                    modules={[Autoplay, Pagination, Navigation]}
                    className="!w-full pb-20"
                >
                    {reviews.map((review, idx) => <SwiperSlide className=" w-full" key={idx}>
                        <AnimatedHeadLessUi
                            layoutId="thecoderandthecodearethesameherethenab"
                            key={idx}
                            index={idx}
                            hoverIndex={hoveIndex}
                            setHoverIndex={setHoverIndex}
                            className='mx-auto'
                            animatedClassName={"bg-secondary-color/10 bottom-0 h-2- top-auto z-[1000]"}
                        >

                            <SingleTestimonial
                                {...review}
                                key={idx}
                            />

                        </AnimatedHeadLessUi>


                    </SwiperSlide>)}
                </Swiper>
                <Swiper
                    speed={SPEED}
                    pagination={pagination}
                    slidesPerView={1.2}
                    spaceBetween={10}
                    // direction='rtl'
                    autoplay={{
                        delay: TIME_OUT,
                        pauseOnMouseEnter: true,
                        reverseDirection: true, // Adds reverse direction for autoplay
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1.5,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2.5,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3.1,
                            spaceBetween: 50,
                        },
                    }}

                    loop={true}
                    translate="yes"
                    modules={[Autoplay, Pagination, Navigation]}
                    className="!w-full pb-20"
                >
                    {reviews.map((review, idx) => <SwiperSlide className=" w-full" key={idx}>
                        <AnimatedHeadLessUi
                            layoutId="thecoderandthecodearethesameherethenab"
                            key={idx}
                            index={idx+reviews.length}
                            hoverIndex={hoveIndex}
                            setHoverIndex={setHoverIndex}
                            className='mx-auto'
                            animatedClassName={"bg-secondary-color/10 bottom-0 h-2- top-auto z-[1000]"}
                        >

                            <SingleTestimonial
                                {...review}
                                key={idx}
                            />

                        </AnimatedHeadLessUi>


                    </SwiperSlide>)}
                </Swiper>
                <div className="custom-pagination-testimonial mb-3 space-x-2.5 min-h-10- mt-4 flex justify-center"></div>

                {/* modal starts here */}
                {
                    isDesktop ?
                        <Dialog open={open} onOpenChange={setOpen}>
                            <DialogTrigger ref={buttonRef} asChild className='hidden'>
                                <Button variant="outline">Edit Profile</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Add Review</DialogTitle>
                                    <DialogDescription>
                                        Make changes to your profile here. Click save when you're done.
                                    </DialogDescription>
                                </DialogHeader>
                                <ProfileForm />
                            </DialogContent>
                        </Dialog>
                        :
                        <Drawer open={open} onOpenChange={setOpen}>
                            <DrawerTrigger asChild ref={buttonRef} className='hidden'>
                                <Button variant="outline">Edit Profile</Button>
                            </DrawerTrigger>
                            <DrawerContent className=''>
                                <DrawerHeader className="text-left">
                                    <DrawerTitle>Add Review</DrawerTitle>
                                    <DrawerDescription>
                                        Make changes to your profile here. Click save when you're done.
                                    </DrawerDescription>
                                </DrawerHeader>
                                <ProfileForm className="px-4" />
                                <DrawerFooter className="pt-2">
                                    <DrawerClose asChild>
                                        <Button variant="outline">Cancel</Button>
                                    </DrawerClose>
                                </DrawerFooter>
                            </DrawerContent>
                        </Drawer>

                }




                {/* modal ends here */}

                <Button
                    onClick={() => {
                        buttonRef.current?.click()
                    }}
                    className="block sticky btn- bg-colorPrimary
            w-[min(420px,calc(100%-1rem))] px-0
            mx-auto font-bold text-sm z-50 h-14 lg:ml-auto lg:mr-4
            bottom-0 rounded-none   left-0 uppercase  text-center bg-primary-color ">

                    Please Leave a review
                </Button>
            </div>
        </div>
    )
}

export default Testimonial