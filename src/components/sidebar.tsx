import { AiFillTwitterCircle, AiOutlineClose } from 'react-icons/ai'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { GrMailOption } from 'react-icons/gr'
import { NavLink } from 'react-router-dom'
import { Button } from './ui/button'
import { NavItemsLinks } from '@/constants/NavItems'
import { motion } from "framer-motion"
const parent = {
    // initial: false,
    animate: {
        transition: {
            // delay: 0.5,
            staggerChildren: 0.1
        }

    }
}

const singleword = {
    initial: {
        x: 200,
        opacity: 0.6,
        scale: 0.7
    },
    animate: {
        opacity: 1, x: 0, scale: 1
        , transition: {
            duration: 0.08
        }
    }
}

const PopOver = ({ children }: { children: React.ReactNode }) => {

    return (
        <div className='w-44 rounded text-center group-[:hover]:visible invisible duration-300 transition-colors  px-5 py-1.5 bg-black absolute -top-[calc(100%+0.825rem)]'>
            <p
                className='text-white text-xs lg:text-sm leading-relaxed relative z-[2]'
            >{children || "FaceBook"}</p>
            <div className='w-4 h-4 -mt-1 z-[1]
                                bg-black
                                rotate-45 absolute
                                left-1/2 -translate-x-1/2 '>

            </div>
        </div>
    )
}
const SideBar = ({ isOpen = false, setIsOpen }: {
    isOpen: boolean,
    setIsOpen: (c?: any) => void | any
}) => {
    return (
        <div
            onClick={() => setIsOpen(false)}
            className={`${isOpen ? "  pointer-events-auto h-[calc(100%-var(--top-offset,0))] overflow-y-auto  active" : " overflow-hidden pointer-events-none h-0"} 
            duration-[1s] transition-all group- z-50  !top-[calc(var(--top-offset,0)-5px)] 
            inset-0 lg:hidden w-screen bg-white   fixed flex flex-col`}
        >
            <div
                onClick={e => e.stopPropagation()}
                className={` flex-1
                overflow-y-auto
                transition-[height] duration-[0.5s]
                ${isOpen ? " " : ""} h-full w-[min(100%,calc(100%))]  top-0  bg-white`}
            >
                <div className='flex flex-col justify-between h-full'>

                    <div className='w-[3.5rem]  border top-0  absolute -left-[3.5rem] h-[3.5rem] hover:border-none hover:bg-red-700 hover:text-white text-red-800 flex items-center justify-center'>
                        <AiOutlineClose
                            className={`${isOpen ? "rotate-[360deg] delay-[0.2s]" : "rotate-0"} duration-500 transition-all`}
                            onClick={() => setIsOpen(false)}
                            size={25}
                        />

                    </div>
                    <div className='pt-5'>

                        <motion.ul

                            variants={parent}
                            initial="initial"
                            whileInView="animate"
                            className='overflow-hidden'>
                            {
                                NavItemsLinks.map((link, idx) => (<motion.li
                                    variants={singleword}
                                    key={idx}
                                    className='py-3 uppercase
hover:bg-slate-100 transition-colors duration-500
border-b px-4 text-gray-700 hover:font-medium text-sm'
                                >
                                    <NavLink
                                        className={({ isActive }) => isActive ? "text-primary-color" : ""}
                                        to={link.link}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </NavLink>
                                </motion.li>))

                            }
                            <li>

                                <Button
                                    className="text-sm block w-[min(calc(100%-2rem),400px)] mx-auto py-4 rounded-full 
                    hover:text-primary-color
                    font-poppins font-normal  mt-6 md:py-3 hover:bg-white hover:border-primary-color border-[1px] h-auto bg-primary-color"
                                >
                                    Donate

                                </Button>
                            </li>

                            <li
                                className='flex py-4 space-x-1 flex-wrap  my-5 place-items-center justify-center'
                            >
                                <div
                                    className='group   w-8 relative flex items-center justify-center h-8 rounded-full bg-gray-80'
                                >
                                    <PopOver>
                                        follow us on    FaceBook
                                    </PopOver>
                                    <BsFacebook
                                        size={25}
                                    />

                                </div>
                                <div
                                    className='group w-8 relative flex items-center justify-center h-8 rounded-full bg-gray-80'
                                >
                                    <PopOver>
                                        follow us on  Instagram
                                    </PopOver>
                                    <BsInstagram
                                        size={25}
                                    />

                                </div>
                                <div
                                    className='group w-8 relative flex items-center justify-center h-8 rounded-full bg-gray-80'
                                >
                                    <PopOver>
                                        follow us on  Twitter
                                    </PopOver>
                                    <AiFillTwitterCircle
                                        size={25}
                                    />

                                </div>
                                <div
                                    className='group w-8 relative flex items-center justify-center h-8 rounded-full bg-gray-80'
                                >
                                    <PopOver>
                                        send us email
                                    </PopOver>
                                    <GrMailOption size={20}
                                        className="text-gray-400"
                                    />

                                </div>
                                <div
                                    className='group w-8 relative flex items-center justify-center h-8 rounded-full bg-gray-100'
                                >
                                    <PopOver>
                                        send us pinterest
                                    </PopOver>
                                    <GrMailOption size={20}
                                        className="text-gray-400"
                                    />

                                </div>
                            </li>

                        </motion.ul>
                    </div>


                </div>
            </div>

            <div
                className='flex flex-col flex-none  gap-y-4 w-full pt-2.5'
            >
                <Button
                    // onClick={() => navigate("/auth")}
                    title="log in "
                    className="!block break-keep flex-1 
                                    !rounded-lg !py-3 !px-4  !text-xs !w-[min(25rem,calc(100%-60px))]
                                    !text-center
                                    mx-auto
                                    !bg-[--color-green]
                                     !text-black !font-medium uppercase
                                    "
                />
            </div>


        </div>
    )
}

export default SideBar