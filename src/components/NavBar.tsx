import { NavItemsLinks } from "@/constants/NavItems"
import useGetLoginUser from "@/hooks/getCurrentUser"
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { AnimatedLinks } from "./ui/links"
import { UserAvatar } from "./UserAvatar"

const NavBar = ({ isOpen, setIsOpen }: {
    isOpen: boolean,
    setIsOpen: any
}) => {
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
                                src="https://xeniapure.com/wp-content/uploads/2024/05/XeniaPure-Logo-e1716032082282-1024x345.png" alt="" />

                        </Link>


                    </div>

                    {/* show on smaller devices end  only  */}
                    <div className="hidden md:flex items-center
                 justify-center space-x-3.5">
                        {
                            NavItemsLinks.map((link, idx) => {
                                if (link.name.toLocaleLowerCase() == "dashboard" && !user) return
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
