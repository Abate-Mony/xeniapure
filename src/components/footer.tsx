import { Link } from 'react-router-dom';
// import { Logo } from '../assets/images'
import { cn } from '../lib/utils';
// import Heading from './Heading'
import { motion } from 'framer-motion';
import Heading from './ui/heading';

// Define types for footer items
type FooterLink = {
    text: string;
    url: string;
    icon?: string; // Optional icon property
};

type FooterDetails = {
    type: 'address' | 'phone' | 'email';
    text: string;
};

type FooterSection = {
    section: string;
    links?: FooterLink[];
    details?: FooterDetails[];
};

// Type-safe constant array of footer sections
const footerSections: FooterSection[] = [
    {
        section: "About Us",
        links: [
            { text: "Our Story", url: "/about/story" },
            { text: "Our Team", url: "/about/team" },
            { text: "Our Values", url: "/about/values" }
        ]
    },
    {
        section: "Cleaning Services",
        links: [
            { text: "Residential Cleaning", url: "/services/residential" },
            { text: "Commercial Cleaning", url: "/services/commercial" },
            { text: "Eco-Friendly Options", url: "/services/eco-friendly" },
            { text: "Emergency Cleaning", url: "/services/emergency" }
        ]
    },
    {
        section: "Quick Links",
        links: [
            { text: "Request a Quote", url: "/contact-us" },
            { text: "FAQs", url: "/faqs" },
            { text: "Customer Reviews", url: "/reviews" },
            { text: "Our Team", url: "/our-team" }
        ]
    },
    {
        section: "Contact Us",
        details: [
            { type: "address", text: "Kom Cleaning Services, Main Street, Chippenham, England" },
            { type: "phone", text: "tel: +44 (123) 456-7890" },
            { type: "email", text: "email: contact@komcleaning.com" }
        ]
    },
    {
        section: "Follow Us",
        links: [
            { text: "Facebook", url: "https://www.facebook.com/komcleaning", icon: "facebook-icon" },
            { text: "Twitter", url: "https://www.twitter.com/komcleaning", icon: "twitter-icon" },
            { text: "LinkedIn", url: "https://www.linkedin.com/company/komcleaning", icon: "linkedin-icon" },
            { text: "Instagram", url: "https://www.instagram.com/komcleaning", icon: "instagram-icon" }
        ]
    }
];

const Footer = ({ className }: { className?: string }) => {
    return (

        <div className={cn('overflow-hidden py-10 bg-black/70  z-[30] relative text-white px-3 bg-no-repeat bg-cover', className)}
        style={{
            backgroundImage:"url(https://livewp.site/wp/md/clengo/wp-content/uploads/sites/61/2019/06/home_bg_03.png)",

        }}

        >
            <div
            className='absolute inset-0 bg-black/55'
            />

            <div className="
        sm:max-w-6xl  mx-auto
            ">

                <div className='lg:grid grid-cols-12 lg:flex-row '>
                    <div className='flex-none relative  text-3xl font-black mb-6  col-span-3'>
                        {/* <RegistrationJoinUs/> */}
                        <img src={"/main-logo.png"} className='h-16 relative z-10' />
                    </div>
                    <div className='flex-1 grid col-span-9 gap-y-6
                    grid-cols-[repeat(auto-fit,minmax(min(10rem,calc(100%-60px)),_1fr))]'>
                        {

                            footerSections.map((section, idx) => (
                                <ul>
                                    <li>
                                        <Heading className='  text-xl text-primary-color font-black relative z-20'>{section.section}</Heading>
                                        <motion.span
                                            initial={{
                                                opacity: 0.2,
                                                maxWidth: "0px"
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                maxWidth: "4.5rem",
                                                transition: {
                                                    duration: 0.5 * idx
                                                }
                                            }}
                                            className='block w-full h-[1px] bg-primary-color mb-4 max-w-14 rounded-none mt-1'
                                        />

                                        <ul>

                                            {section.links && section?.links.map(({ text, url }) => {
                                                return <li key={text}>
                                                    {
                                                        section?.section == "Follow Us" ? <a href={url} target="_blank" rel="noreferrer" className='text-white link' >{text}</a> :
                                                            <Link className='link' to={url}>{text}</Link>
                                                    }
                                                </li>
                                            })}
                                            {section.details && section?.details.map(({ text}) => {
                                                return <li key={text}>
                                                    <a href={'#'} target='_blank' className='link'>{text}</a>
                                                </li>
                                            })}
                                        </ul>
                                    </li>
                                </ul>
                            ))
                        }



                    </div>
                </div>

            </div>

        </div>

    )
}

export default Footer      