import React from 'react'
import { Link } from 'react-router-dom'
// import { Logo } from '../assets/images'
import { cn } from '../lib/utils'
// import Heading from './Heading'
import { motion } from 'framer-motion'
import Heading from './ui/heading'

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
        section: "About Kom",
        links: [
            {
                text: "Our History",
                url: "/about/history"
            },
            {
                text: "Cultural Heritage",
                url: "/about/heritage"
            },
            {
                text: "The Fon's Palace",
                url: "/about/fons-palace"
            },
            {
                text: "Traditional Leadership",
                url: "/about/leadership"
            }
        ]
    },
    {
        section: "Events & Services",
        links: [
            {
                text: "Cultural Festivals",
                url: "/events/festivals"
            },
            {
                text: "Kom Meetings",
                url: "/events/meetings"
            },
            {
                text: "Traditional Ceremonies",
                url: "/events/ceremonies"
            },
            {
                text: "Community Projects",
                url: "/events/community-projects"
            }
        ]
    },
    {
        section: "Quick Links",
        links: [
            {
                text: "Become a Member",
                url: "/membership/signup"
            },
            {
                text: "Donate to Kom",
                url: "/donate"
            },
            {
                text: "Support Our Work",
                url: "/support"
            },
            {
                text: "FAQs",
                url: "/faqs"
            }
        ]
    },
    {
        section: "Contact Us",
        details: [
            {
                type: "address",
                text: "Kom Cultural Center, Main Street, Kom, Cameroon"
            },
            {
                type: "phone",
                text: "+237 (123) 456-789"
            },
            {
                type: "email",
                text: "support@komculture.com"
            }
        ]
    },
    {
        section: "Follow Us",
        links: [
            {
                text: "Facebook",
                url: "https://www.facebook.com/komculture",
                icon: "facebook-icon"
            },
            {
                text: "Twitter",
                url: "https://www.twitter.com/komculture",
                icon: "twitter-icon"
            },
            {
                text: "LinkedIn",
                url: "https://www.linkedin.com/company/komculture",
                icon: "linkedin-icon"
            },
            {
                text: "Instagram",
                url: "https://www.instagram.com/komculture",
                icon: "instagram-icon"
            }
        ]
    }
];


const PopOver = ({ children, text, className }: {
    children: React.ReactNode, text: string,
    className?: string
}) => {
    return (
        <div
            className={cn('group popover flex-none hover:scale-125 transition-all  duration-300 hover:-translate-y-2  cursor-pointer min-h-10   relative flex items-center justify-center  rounded-full bg-gray-80', className)}
        >
            <div className='w-52 rounded  text-center group-[:hover]:visible invisible duration-300 transition-colors  px-5 py-1.5 bg-black absolute -top-[calc(100%+0rem)]'>
                <p
                    className='text-white text-xs  lg:text-sm leading-relaxed relative z-[2]'
                >{text}</p>
                <div className='w-4 h-4 -mt-1 z-[1]
                                bg-black
                                
                                rotate-45 absolute
                                left-1/2 -translate-x-1/2 '>

                </div>
            </div>
            {children}
        </div>
    )
}
const Footer = ({ className }: { className?: string }) => {
    return (

        <div className={cn(' py-10 bg-black/70  z-[30] relative text-white px-3 bg-no-repeat bg-cover', className)}
        style={{
            backgroundImage:"url(/background.svg)",

        }}

        >
            <div
            className='absolute inset-0 bg-black/55'
            />

            <div className="
        sm:max-w-6xl  mx-auto
            ">

                <div className='lg:grid grid-cols-12 lg:flex-row '>
                    <Heading className='flex-none relative  text-3xl font-black mb-6  col-span-3'>
                        <img src={"https://i0.wp.com/umuigbounite.com/wp-content/uploads/2024/02/cropped-uiu-dark-1.png?fit=200%2C174&ssl=1"} className='h-16 relative z-10' />
                    </Heading>
                    <div className='flex-1 grid col-span-9 gap-y-6
                    grid-cols-[repeat(auto-fit,minmax(min(10rem,calc(100%-60px)),_1fr))]'>
                        {

                            footerSections.map((section, idx) => (
                                <ul>
                                    <li>
                                        <Heading className='  text-xl text-primary-color relative z-20'>{section.section}</Heading>
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
                                            {section.details && section?.details.map(({ text, type }) => {
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