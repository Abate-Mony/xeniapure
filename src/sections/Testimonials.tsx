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
interface Review {
    readonly name: string;
    readonly review: string;
    readonly starCount: number;
}
const reviews = [
    {
        name: "Ndoh Sarah",
        review: "Woinkom UK has truly connected me to my roots. Through the events and gatherings, I've rekindled my love for our traditions, and it's been a joy sharing this with my children, helping them understand their cultural heritage.",
        starCount: 5
    },
    {
        name: "Achu David",
        review: "Attending the meetings has not only brought me closer to the Kom community but also helped me rediscover the richness of our traditions. The sense of belonging is overwhelming, and I look forward to every event.",
        starCount: 4.5
    },
    {
        name: "Ngwain Lisa",
        review: "Being a part of Woinkom UK has been an enriching experience. The mentorship program has offered so much value to the younger generation, ensuring our heritage continues to thrive across borders.",
        starCount: 5
    },
    {
        name: "Atu Michael",
        review: "Woinkom UK is more than a network—it's a family. The cultural festivals and events have made me feel connected to my roots, even though I’m far from home. I’m grateful for the opportunity to be part of something so meaningful.",
        starCount: 4
    },
    {
        name: "Bih Emily",
        review: "This community has been a lifeline for us as a diaspora. It’s been wonderful to introduce my children to our customs through the various activities, and I feel reassured knowing that they’re growing up with a strong sense of Kom identity.",
        starCount: 5
    },
    {
        name: "Ngong Charles",
        review: "Woinkom UK has helped me rediscover our traditional values and the importance of community. Whether through dance performances, cultural discussions, or support initiatives, the network has been incredible in keeping our heritage alive.",
        starCount: 3.5
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
                    pagination={pagination}
                    slidesPerView={1.2}
                    spaceBetween={10}
                    autoplay={{
                        delay: 1500,
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
                        <SingleTestimonial
                            {...review}
                            key={idx}
                        />

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