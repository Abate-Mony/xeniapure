/* eslint-disable  @typescript-eslint/no-explicit-any */

import { Scaling, X } from 'lucide-react'
import { DashboardNavLinks } from '../constants/NavItemsLinks.js'


import { useDashBoardContext } from '@/Layouts/DashBoardLayout.js'
import CustomNavLink from './CustomNavLink.js'
import Heading from './ui/heading.js'
import UserProfileCard from './UserProfileCard.js'


const Sidebar = ({ className, user }: { className?: string, user?: any }) => {
    const { toggleSideBar, setToggleSideBar, showFullContent, direction, setShowFullContent } = useDashBoardContext()
    // const user:any = {

    // }
    return (
        <div
            onClick={() => setToggleSideBar(false)}
            className={`${className}
            h-screen
            z-[1000]
            w-full sm:fit bg-green-400/15
    fixed
    transition-all duration-500
    sm:opacity-100 
    sm:visible
   ${toggleSideBar ? " opacity-100 visible" : " opacity-0 invisible "}
            sm:static
            `}
        >

            <div className={` delay-200--
            transition-[width] duration-700
sm:!translate-x-0
   ${toggleSideBar ? direction ? "translate-x-full" : "translate-x-0" : " -translate-x-full "}
   ${showFullContent ? "w-[min(200px,calc(100vw-0.5rem))]" : "w-fit"}
   border bg-slate-100 min-h-screen 
    
    `} onClick={(e: any) => e.stopPropagation()}>
             
                <span className=' absolute lg:hidden size-10 flex items-center justify-center  top-0
             z-[7] left-auto
            -right-10 
            bg-rose-500
            '
                    onClick={() => setToggleSideBar(false)}

                >
                    <X
                        className='text-white'
                    />
                </span>
                <span className=' absolute lg:hidden size-10 flex items-center justify-center  top-16
            bg-black/10 z-[7] left-auto
            -right-10 
            '
                    onClick={() => setShowFullContent(!showFullContent)}

                >
                    <Scaling />
                </span>
                <div className='flex flex-col  h-svh'>
                    {
                        showFullContent && <UserProfileCard />
                    }
                    <div className='flex flex-col space-y-3 mt-4 px-2 flex-1 '>

                        {DashboardNavLinks.map((arr, index) => {
                            const { icon: Icon, name, link } = arr
                            if (user?.role != "admin" && name.toLocaleLowerCase() == "users") return
                            return (
                                <CustomNavLink
                                    show
                                    key={index}
                                    selectedClassName=''
                                    animateClassName="inset-0 size-full bg-primary-color/20 rounded-sm"
                                    className='bg-white px-2 h-auto shadow-sm shadow-primary-color/20 rounded-sm py-2 !pb-2 font-medium hover:bg-blue-950/20 group'
                                    to={link}
                                >



                                    <div className='flex   flex-start items-center space-x-2
                                
                             '>


                                        <span>
                                            <Icon size={20} className='text-blue-800' />
                                        </span>


                                        {showFullContent &&
                                            <Heading className='!my-0 text-[1rem] text-gray-600 lg:text-lg'>
                                                {name}

                                            </Heading>
                                        }
                                    </div>


                                </CustomNavLink>



                            )
                        })}
                    </div>



                </div>

            </div>
        </div>

    )
}

export default Sidebar