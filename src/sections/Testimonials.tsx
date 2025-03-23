import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Heading, { VariantHeading } from '../components/Heading';
import AnimatedHeadLessUi from '@/components/ui/AnimatedHeadlessUI';
import { VariantHeading } from '@/components/ui/heading';
import { cn } from "@/lib/utils";
import { textVariantsAnimation } from '@/utils/framervariants';
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
import { ScrollSection } from '@/components/Animated/animated';
interface Review {
    readonly name: string;
    readonly review: string;
    readonly starCount: number;
}
const reviews = [
    {
        name: "Alice Johnson",
        review: "BS Consulting provided incredible support during my university application process. Their guidance and expertise ensured I was fully prepared, and I successfully got into my dream school. Highly recommended!",
        starCount: 5
    },
    {
        name: "James O'Connor",
        review: "As an international student, I was overwhelmed by the application and visa processes. BS Consulting made everything so much easier with their step-by-step support. Their team is knowledgeable and genuinely cares about their clients' success.",
        starCount: 4.5
    },
    {
        name: "Sophia Lee",
        review: "The mentorship I received from BS Consulting was invaluable. Their team helped me improve my CV, prepare for interviews, and even guided me in applying for scholarships. They go above and beyond!",
        starCount: 5
    },
    {
        name: "Michael Brown",
        review: "BS Consulting's CPD training sessions were fantastic. The skills I gained have significantly boosted my career prospects. Their trainers are experts in their fields, and the workshops are interactive and insightful.",
        starCount: 4
    },
    {
        name: "Emily White",
        review: "Thanks to BS Consulting, I was able to achieve my QTLS status with confidence. Their resources and mentoring were top-notch, and I highly recommend them to anyone looking to advance in their teaching career.",
        starCount: 5
    },
    {
        name: "David Green",
        review: "I attended a personal development workshop organized by BS Consulting, and it was a game-changer for me. The practical advice and networking opportunities they provided have been incredibly beneficial.",
        starCount: 4.5
    }
];


const SingleTestimonial = ({ name, review, starCount }: Review) => {
    return (
        <figure className="p-2 bg-white rounded-xl shadow-xl">
            <div className="">
                <h5><span>
                    <ReactStars
                        count={5}
                        value={starCount}
                        edit={false}
                        color1='orange'
                        size={24}
                        half={true}
                        color2={'#fdd905'} />
                </span></h5>
            </div>
            <blockquote
                className='!line-clamp-8 pb-2 pl-2 text-sm italic text-muted-foreground'
            >{review}
                <div className="arrow"></div>
            </blockquote>
            <div className='flex items-center gap-x-1.5'>
                <div className='size-12 border-2 border-primary-color rounded-full overflow-hidden'>
                    <img src="https://tf.insomniacafe.org/insoand/assets/img/testimonial/author-1.png" alt="" />
                </div>
                <div>
                    <VariantHeading
                        className='!text-shadow-lg ![--color-shadow:hsl(var(--color-primary,blue))]'
                        variants={{
                            ...textVariantsAnimation,
                            initial: {
                                ...textVariantsAnimation.initial,
                                x: -50
                            }
                        }}
                    >
                        {name}
                    </VariantHeading>
                    <p className='text-xs text-muted-foreground'>
                        content creator
                    </p>
                </div>
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

        <div className='bg-white- overflow-hidden-- '>
            <div
                className="relative w-full"
            >
                <h1 className="text-6xl text-center my-10 italic
                                              absolute- -z-1
                                              w-full 
                                              font-black text-gray-300/55 lg:text-9xl
                                              bg-white/10-- uppercase  ">
                    REVIEWS
                </h1>


                <VariantHeading className='text-center  !absolute !top-1/2 w-fit  !left-1/2  !-translate-x-1/2 !m-0 !-translate-y-1/2 !text-secondary-color py-6 gap-x-3 uppercase mb-6 flex items-center text-colorPrimary [font-family:var(--second-font)] font-black text-3xl lg:text-5xl max-w-fit mx-auto '>

                    <span
                        className='w-10  h-[1px] bg-primary-color/70 '
                    />  <span>
                        TESTI<span className='text-primary-color'>MONIALS</span>
                    </span>
                    <span
                        className='w-10  h-[1px] bg-primary-color '
                    />

                </VariantHeading>
            </div>
            {/* <ScrollSection className='py-24'>
                <Heading className='whitespace-nowrap !text-shadow-lg px-4 italic text-5xl lg:text-7xl font-black font-Marcellus+SC- ![--color-shadow:hsl(var(--color-secondary,white))] text-primary-color'>
                    What satisfied client are saying about us .
                </Heading>
            </ScrollSection> */}
            <ScrollSection>
                <VariantHeading viewport={{ once: true }} className='whitespace-nowrap !text-shadow-xl hidden- px-4 italic text-5xl lg:text-8xl font-black font-Marcellus+SC text-secondary-color py-6'>
                    What satisfied client are saying about us .

                </VariantHeading>

            </ScrollSection>

            <div className='max-w-6xl mx-auto py-10'>


                <ScrollSection transition={{ delay: 10 }} direction="right" className='mb-5'>
                    {reviews.map((review, idx) =>
                        <AnimatedHeadLessUi
                            layoutId="thecoderandthecodearethesameherethendsdfsfab"
                            key={idx}
                            index={idx + reviews.length}
                            hoverIndex={hoveIndex}
                            setHoverIndex={setHoverIndex}
                            className='mx-auto max-w-sm'
                            animatedClassName={"bg-secondary-color/5 !rounded-2xl bottom-0 h-2- top-auto z-[1000]"}
                        >

                            <SingleTestimonial
                                {...review}
                                key={idx}
                            />

                        </AnimatedHeadLessUi>


                    )}

                </ScrollSection>
                {/* dd */}

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
                    className="!w-full pb-20 bg-transparent"
                >
                    {reviews.map((review, idx) => <SwiperSlide className=" w-full" key={idx}>
                        <AnimatedHeadLessUi
                            layoutId="thecoderandthecodearethesameherethenab"
                            key={idx}
                            index={idx}
                            hoverIndex={hoveIndex}
                            setHoverIndex={setHoverIndex}
                            className='mx-auto'
                            animatedClassName={"bg-secondary-color/5 !rounded-2xl bottom-0 h-2- top-auto z-[1000]"}
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
                    className="!w-full pb-20 bg-transparent"
                >
                    {reviews.map((review, idx) => <SwiperSlide className=" w-full" key={idx}>
                        <AnimatedHeadLessUi
                            layoutId="thecoderandthecodearethesameherethenab"
                            key={idx}
                            index={idx + reviews.length}
                            hoverIndex={hoveIndex}
                            setHoverIndex={setHoverIndex}
                            className='mx-auto'
                            animatedClassName={"bg-secondary-color/5 !rounded-2xl bottom-0 h-2- top-auto z-[1000]"}
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
                    className="block- sticky hidden
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