import { AnimatedSlideText } from "@/components/Animated/animated"
import AnimatedHeadLessUi from "@/components/ui/AnimatedHeadlessUI"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import Heading, { VariantHeading } from "@/components/ui/heading"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { cleaning_categories } from "@/constants/constants"
import { useFilter } from "@/hooks/CustomLinkFilterHook"
import { motion } from "framer-motion"
import { LucideIcon, Mail, User } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { IconType } from "react-icons"
import { BsFacebook, BsYoutube } from "react-icons/bs"
import { MdOutlineCleanHands } from "react-icons/md"
import { Link } from "react-router-dom"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
// Define type for contact information
type ContactInfo = {
    name: string;
    href?: string; // href is optional
};

// Define type for contact icon object
type ContactIcon = {
    Icon: LucideIcon | IconType; // Assuming LucideReact is a React component
    name: string,
    contactInfo: ContactInfo[]; // Array of ContactInfo objects
};

// Array of ContactIcon objects
const contactIcons: ContactIcon[] = [
    {
        name: "Office Line",
        Icon: Mail,
        contactInfo: [
            { name: "info@shipsharpcleaning.com", href: "mailto:info@shipsharpcleaning.com" },
            { name: "info@shipsharpcleaning.com", href: "mailto:info@shipsharpcleaning.com" },
        ]
    },

    {
        name: "Social",
        Icon: BsFacebook,
        contactInfo: [
            { name: "Facebook", href: "https://www.facebook.com/shipsharpcleaning" },
            { name: "Instagram", href: "https://www.instagram.com/shipsharpcleaning" }
        ]
    },
    {
        name: "Contacts",
        Icon: BsYoutube,
        contactInfo: [
            { name: "YouTube", href: "https://www.youtube.com/c/shipsharpcleaning" },
            { name: "Website", href: "https://www.shipsharpcleaning.com" }
        ]
    }
];

const DisplayContactInfo = ({
    Icon, contactInfo
}: ContactIcon) => {

    return (<div className=' group shadow py-3.5 rounded-sm px-1.5  pb-1'>
        <div className='flex gap-x-3 items-start'>
            <span className='flex-none bg-orange-300 pl-1 rounded-sm 
        
        
        '>
                <Icon size={45}
                    className='text-white
           
            '
                />
            </span>
            <div className='flex-[calc(100%-250rem)]'>
                <Heading className='font-medium mb-0 leading-0 break-words my-0 text-primary-color  text-[calc(1.0rem+0.3vw)]'>Office Line</Heading>
                <ul className='-mt-0.5 flex gap-1 flex-wrap items-start '>{
                    contactInfo.map(({
                        name, href
                    }) => <>
                            <li
                                className='pl-0.5 text-sm sm:text-sm relative z-10'
                            >
                                {
                                    href ? <a
                                        className='link'
                                        href={href}
                                        target='_blank'
                                    >
                                        {name}

                                    </a> : <p>

                                        {name}
                                    </p>

                                }

                            </li>
                        </>)
                }

                </ul>
            </div>

        </div>
    </div>)
}
const ContactUsPage = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const [hoveIndex, setHoverIndex] = useState<number | null>(null);
    const [date, setDate] = useState<Date>()
    const scrollToSection = () => {
        if (targetRef.current) {
            targetRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start', });
        }
    };
    const { searchQuery } = useFilter()
    const isFromHero = searchQuery.get("rd_from") == "hero"
    useEffect(() => {
        if (isFromHero) {
            scrollToSection()
        }
    }, [isFromHero])
    return (
        <div>
            {/* Hero Section */}
            <div className="relative flex items-center justify-center h-[min(calc(100vh-4rem),25rem)] bg-black">
                <img
                    src="https://img.freepik.com/free-vector/plumber-flat-composition_1284-67457.jpg?t=st=1730039845~exp=1730043445~hmac=46fbf41c6f1e62224ad42627c28ed609ccaf62f2911c74aae99729f8f02f583f&w=740"
                    alt="Hero Background"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative z-10 text-center">
                    <AnimatedSlideText inView
                        text="Contact Us"
                        className='text-center  text-blue-950- text-primary-color font-black mb-6 text-3xl sm:text-4xl lg:text-5xl max-w-3xl mx-auto '>

                    </AnimatedSlideText>
                </div>
            </div>

            {/* Breadcrumb */}
            <div
                ref={targetRef}
            ></div>
            <div className="bg-gray-50 py-4">
                <div className="max-w-5xl mx-auto px-4">
                    <Breadcrumb>
                        <BreadcrumbList className="flex gap-2">
                            <BreadcrumbItem>
                                <BreadcrumbLink  >
                                    <Link to={"/"}>
                                        Home
                                    </Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink >Support</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Contact Us</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            {/* Contact Form and Info */}
            <div className="max-w-5xl mx-auto py-12 px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="space-y-6">

                    <AnimatedSlideText inView
                        text="Get in Touch"
                        className='text-center  text-blue-950- text-primary-color font-black mb-6 text-3xl sm:text-4xl lg:text-5xl max-w-3xl mx-auto '>

                    </AnimatedSlideText>

                    <form className="space-y-6" >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Label htmlFor="name" className="block font-medium text-gray-700">Full Name</Label>
                            <div className="relative mt-1 rounded-none shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400" />
                                </div>
                                <Input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your full name"
                                    className="block w-full pl-10 py-2 border-black  rounded-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Label htmlFor="email" className="block font-medium text-gray-700">Email Address</Label>
                            <div className="relative mt-1 rounded-none shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <Input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="block w-full pl-10 py-2 border-black  rounded-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Label htmlFor="email" className="block font-medium text-gray-700">Cleaning type</Label>
                            <div className="relative mt-1 rounded-none shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <MdOutlineCleanHands className="h-5 w-5 text-gray-400" />
                                </div>
                                <Select>
                                    <SelectTrigger className="w-full pl-10">
                                        <SelectValue placeholder="cleaning type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>{
                                            cleaning_categories.map(({

                                                key, value
                                            }) => <SelectItem value={key}>{value}</SelectItem>
                                            )

                                        }
                                            {/* <SelectLabel></SelectLabel> */}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Label htmlFor="email" className="block font-medium text-gray-700">Cleaning type</Label>
                            <div className="relative mt-1 rounded-none shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    {/* <MdOutlineCleanHands className="h-5 w-5 text-gray-400" /> */}
                                    <CalendarIcon className="h-5 w-5 text-gray-400"/>

                                </div>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-full pl-10 justify-start text-left font-normal",
                                                !date && "text-muted-foreground"
                                            )}
                                        >
                                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
                                        <Select
                                        
                                            onValueChange={(value) =>
                                                setDate(addDays(new Date(), parseInt(value)))
                                            }
                                        >
                                            <SelectTrigger  className="w-full pl-10">
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            <SelectContent position="popper">
                                                <SelectItem value="0">Today</SelectItem>
                                                <SelectItem value="1">Tomorrow</SelectItem>
                                                <SelectItem value="3">In 3 days</SelectItem>
                                                <SelectItem value="7">In a week</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <div className="rounded-md border">
                                            <Calendar mode="single" selected={date} onSelect={setDate} />
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Label htmlFor="message" className="block font-medium text-gray-700">Your Message</Label>
                            <Textarea
                                cols={100}
                                id="message"
                                placeholder="(optional) Type your message here"
                                className="block w-full py-2 border-black  rounded-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </motion.div>
                        <motion.button
                            type="submit"
                            className="w-full py-3 px-4 bg-secondary-color text-white font-semibold rounded-none shadow-md hover:bg-indigo-500 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Request A Qoute
                        </motion.button>
                    </form>
                </div>

                {/* Contact Information */}
                <div className="space-y-6">
                    {/* <h2 className="text-3xl font-bold text-gray-900">Contact Information</h2> */}
                    <VariantHeading
                        // text="Contact Information"
                        className='text-center  text-blue-950- text-secondary-color font-black mb-6 text-xl sm:text-2xl lg:text-3xl max-w-3xl mx-auto '>
                        Contact Information
                    </VariantHeading>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p><strong>Phone:</strong> <a href="tel:001234567" className="text-indigo-600">001234567</a></p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p><strong>Email:</strong> <a href="mailto:example@gmail.com" className="text-indigo-600">example@gmail.com</a></p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p><strong>Address:</strong> Coventry, United Kingdom</p>
                    </motion.div>
                    <VariantHeading
                        // text="Contact Information"
                        className='text-center  text-blue-950- text-secondary-color font-black mb-6 text-xl sm:text-2xl lg:text-3xl max-w-3xl mx-auto '>
                        Chat With Us
                    </VariantHeading>
                    <motion.div
                        initial={{
                            x: -100,
                            opacity: 0
                        }}
                        whileInView={{
                            x: 0,
                            opacity: 1
                        }}
                        viewport={{
                            amount: 0.5,
                            once: true
                        }}
                        transition={{
                            duration: 0.6

                        }}
                        className='  px-4 grid gap-x-4 gap-y-6 justify-start  items-start
                    grid-cols-[repeat(auto-fit,minmax(min(15rem,calc(100%-10px)),_1fr))]
                    '>

                        {contactIcons.map((contactInfo, idx) => (<AnimatedHeadLessUi
                            layoutId="thecoderandthecodearethesame"
                            key={idx}
                            index={idx}
                            hoverIndex={hoveIndex}
                            setHoverIndex={setHoverIndex}
                            animatedClassName="bg-primary-color/15"
                            className="bg-white"
                        >
                            <DisplayContactInfo
                                {
                                ...contactInfo

                                }
                            // key={idx}
                            />

                        </AnimatedHeadLessUi>))}

                    </motion.div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900">Business Hours</h3>
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                    </div>
                </div>
            </div>

            {/* Google Maps */}
            <motion.iframe
                className="w-full h-72 lg:h-96 rounded-none"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38757.60294799903!2d-1.5503777747094894!3d52.40682299457911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48774b7b310b48c1%3A0x5fe0509882bff300!2sCoventry%2C%20UK!5e0!3m2!1sen!2suk!4v1696581234567!5m2!1sen!2suk"
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, delay: 0.6 }}
            ></motion.iframe>
        </div>
    )
}

export default ContactUsPage
