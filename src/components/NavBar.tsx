import { NavItemsLinks } from "@/constants/NavItems"
import useGetLoginUser from "@/hooks/getCurrentUser"
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion"
import { Menu, X } from "lucide-react"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { AnimatedLinks } from "./ui/links"
import { UserAvatar } from "./UserAvatar"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu"
import AnimatedHeadLessUi from "./ui/AnimatedHeadlessUI"
import CustomNavLink from "./CustomNavLink"
import { heroBanner } from "@/constants/constants"
import { cn } from "@/lib/utils"
import Heading from "./ui/heading"

const NavBar = ({ isOpen, setIsOpen }: {
    isOpen: boolean,
    setIsOpen: any
}) => {
    const [_hoveIndex, _setHoverIndex] = useState<number | null>(null);

    const user = useGetLoginUser()
    const { scrollYProgress } = useScroll();

    const [visible, setVisible] = useState(true);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        // Check if current is not undefined and is a number
        if (typeof current === "number") {
            let direction = current! - scrollYProgress.getPrevious()!;

            if (scrollYProgress.get() < 0.05) {
                // setVisible(false);
            } else {
                if (direction < 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }
        }
    });
    const ListItem = React.forwardRef<
        React.ElementRef<"a">,
        React.ComponentPropsWithoutRef<"a">
    >(({ className, title, children, href, ...props }, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild ref={ref}>
                    <CustomNavLink
                        show end
                        to={href!}
                        className={cn(
                            "block select-none relative z-10 group h-auto space-y-1 rounded-md p-3  leading-none no-underline outline-none transition-colors  hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            className
                        )}
                        {...props}        >
                        <Heading className="text-sm font-medium leading-normal">{title}</Heading>
                        <p className="line-clamp-4 text-sm leading-snug text-muted-foreground group-hover:text-primary-color">
                            {children}
                        </p>
                    </CustomNavLink>
                </NavigationMenuLink>
            </li>
        )
    })
    return (
        <AnimatePresence mode='wait'>

            <motion.div
                initial={{
                    opacity: 1,
                    y: -100,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                className="bg-white/60 shadow shadow-slate-50/10 z-50 justify-center sticky right-0 left-0 top-0 w-full 
    flex items-center backdrop-blur px-2 sm:px-6  rounded-none 
    ">

                <nav
                    className="flex items-center  
                max-w-6xl
                justify-between
                w-full
                mx-auto
                h-[--top-offset,60px]
                py-2.5
                "
                >
                    <div className="flex items-center justify-center  space-x-2- ">
                        <Link to={"/"}>
                            <img
                                className="size-14 w-24  hidden- md:block "
                                src="https://berkshirefacilitiesmanagement.co.uk/wp-content/uploads/2023/02/Berkshire-Facilities-Management-Logo.svg" 
                                alt="xeniapure logo" />

                        </Link>


                    </div>

                    {/* show on smaller devices end  only  */}
                    <div className="hidden md:flex items-center
                 justify-center space-x-3.5 !font-poppins">
                        {
                            NavItemsLinks.map((link, idx) => {
                                if (link.name.toLocaleLowerCase() == "dashboard" && !user) return
                                    if (link.link.slice(1) == "services") {
                                    return (
                                        <NavigationMenu className='space-x-2.5'>

                                            <NavigationMenuList>


                                                <NavigationMenuItem
                                                    className='bg-transparent hover:bg-transparent p-0 h-auto'

                                                >
                                                    <NavigationMenuTrigger
                                                        className='bg-transparent hover:bg-transparent font-Marcellus+SC text-sm p-0 h-auto'
                                                    >
                                                      
   <AnimatedLinks
                                        key={idx}
                                        to={link.link}
                                        className={"text-black text-sm   h-auto [font-size:1rem]"}
                                        secondTextClassName={"text-black font-medium"}
                                        {...link}                                >
                                        {link.name}
                                    </AnimatedLinks>
                                                    </NavigationMenuTrigger>
                                                    <NavigationMenuContent>
                                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[800px] ">
                                                            {[...heroBanner,
                                                                ...heroBanner,
                                                            ].map((item, _idx) => (
                                                                <AnimatedHeadLessUi
                                                                    className='shadow-none'
                                                                    animatedClassName="bg-primary-color/20 top-auto bottom-0 h-px"
                                                                    key={_idx}
                                                                    hoverIndex={_hoveIndex}
                                                                    setHoverIndex={_setHoverIndex}
                                                                    index={_idx}

                                                                >
                                                                    <ListItem
                                                                        key={item.description}
                                                                        title={item.description}
                                                                        href={"/services/" }
                                                                    >

{item.description}            
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus magni, maiores earum tenetur consequatur delectus laudantium sed voluptatem ipsum in.                                                        </ListItem>
                                                                </AnimatedHeadLessUi>
                                                            ))}
                                                        </ul>
                                                    </NavigationMenuContent>
                                                </NavigationMenuItem>

                                            </NavigationMenuList>
                                        </NavigationMenu>
                                    )
                                }
                                return (

                                    <AnimatedLinks
                                        key={idx}
                                        to={link.link}
                                        className={"text-black text-sm   h-auto [font-size:1rem]"}
                                        secondTextClassName={"text-black font-medium"}
                                        {...link}                                >
                                        {link.name}
                                    </AnimatedLinks>



                                )
                            })
                        }
                    </div>
                    <div className="flex items-center  justify-center space-x-2">
                        {
                            user ? <Link to={"/dashboard"}>
                                <UserAvatar
                                    className="size-9"
                                /></Link> : <>
                                <Link to={"/contact-us?rd_from=hero"}>
                                    <Button
                                        className="text-sm rounded-full hidden lg:block
                    hover:text-primary-color
                    bg-gradient-to-r from-cyan-500 to-secondary-color
                    font-poppins font-normal py-2.5 md:py-2.5 hover:bg-white hover:border-primary-color border-[1px] h-auto bg-primary-color"
                                    >
                                        Request a qoute

                                    </Button>
                                </Link>
                            </>
                        }

                        {
                            !isOpen ? <Menu size={30}
                                onClick={() => {
                                    setIsOpen(!isOpen)
                                }}
                                className="text-black md:hidden"
                            /> : <X size={30}
                                onClick={() => {
                                    setIsOpen(!isOpen)
                                }}
                                className="text-black md:hidden"
                            />
                        }

                    </div>
                </nav>
                {/* desktop navbar  */}

                {/* end of desktop navbar  */}
            </motion.div>
        </AnimatePresence>

    )
}

export default NavBar
