import { NavItemsLinks } from "@/constants/NavItems"
import { Menu, X } from "lucide-react"
import { Link } from "react-router-dom"
import { AnimatedLinks } from "./ui/links"

const NavBar = ({ isOpen, setIsOpen }: {
    isOpen: boolean,
    setIsOpen: any
}) => {
    return (
        <div className="bg-white/50 shadow-sm shadow-slate-50 z-50 justify-center  sticky left-0 top-0 w-full 
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
                            className="size-16 w-24  hidden- md:block "
                            src="/main-logo.png" alt="" />

                    </Link>

                    {/* <Button
                        className="text-sm rounded-full mx-0  md:hidden hidden
                    hover:text-primary-color
                    font-poppins font-normal py-2.5 md:py-3 hover:bg-white hover:border-primary-color border-[1px] h-auto bg-primary-color"
                    >
                        Donate

                    </Button> */}
                </div>
                {/* show on smaller devices only  */}
                {/* <Link to={"/"}

                >
                    <img
                        className="size-16 bg-orange-700 md:hidden border-2-"
                        src="/main-logo.png" alt="" />


                </Link> */}
                {/* show on smaller devices end  only  */}
                <div className="hidden md:flex items-center
                 justify-center space-x-3.5">
                    {
                        NavItemsLinks.map((link, idx) => {
                            return (
                                <AnimatedLinks
                                    key={idx}
                                    to={link.link}
                                    className={"text-black text-sm [font-size:1rem]"}
                                    secondTextClassName={"text-black font-medium"}
                                    {...link}                                >
                                    {link.name}
                                </AnimatedLinks>

                            )
                        })
                    }
                </div>
                <div className="flex items-center justify-center space-x-2">
                    {/* <Button
                        className="text-sm rounded-full hidden md:hidden
                    hover:text-primary-color
                    font-poppins font-normal py-2.5 md:py-3 hover:bg-white hover:border-primary-color border-[1px] h-auto bg-primary-color"
                    >
                        Donate

                    </Button> */}
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
        </div>
    )
}

export default NavBar
