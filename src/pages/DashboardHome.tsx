import StatsCard from '@/components/animated-stats-card'
import Heading from '@/components/ui/heading'
import { Scrollable } from '@/components/ui/Scrollable'
import { type INavItemsLinks } from '@/types'
import { PercentSquare } from 'lucide-react'
import { useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { iLoginUser } from './RegistrationJoinUs'
import UpComingEvent from '@/sections/UpComingEvent'
interface newType extends INavItemsLinks {
    className?: string
}
const dashBoardItems: newType[] = [
    {
        name: "Logistics",
        link: "logistics",
        icon: PercentSquare,
        className: 'rounded-none  bg-green-800 text-white',


    },
    {
        name: "Users",
        link: "users",
        icon: PercentSquare,
        className: 'rounded-none  bg-blue-800 text-white',

    },
    {
        name: "Logistics",
        link: "logisitics",
        icon: PercentSquare,
        className: 'rounded-none  bg-orange-200',

    },

]
const DashboardHome = () => {
    const [hoverIndex, setHoveredIndex] = useState<number | null>(0)
    const { user } = useOutletContext() as {
        user: iLoginUser
    } || {}
    return (

        <div className='px-2'>

            <div className='lg:flex  lg:flex-row items-start gap-x-6 '>

                <div className='flex-1 flex-grow lg:w-[calc(100%-762626rem)]'>

                    <Heading className='font-Marcellus+SC py-2.5'>
                        Welcome back <Link to={"/dashboard/profile"} className='text-2xl text-primary-color font-black '>
                            {
                                `${user?.firstName}  ${user?.lastName}`
                            }


                        </Link >
                    </Heading>
                    <Scrollable className="grid- 
      gap-x-4 
      grid-cols-[repeat(auto-fit,minmax(min(20rem,calc(100%-0.3rem)),1fr))]">
                        {dashBoardItems.map((items, index) => {
                            return (<StatsCard

                                // asLink
                                hoverIndex={hoverIndex}
                                setHoverIndex={setHoveredIndex}
                                key={index}
                                index={index}
                                {...items}
                                count={Math.round(Math.random() * 40)}
                            />)
                        })}
                    </Scrollable>
                    <Heading className='font-Marcellus+SC font-bold py-2.5'>
                        Upcoming  <span className='text-2xl text-primary-color font-black '>
                            events(2)
                        </span >
                    </Heading>
                    <UpComingEvent />

                </div>
                <div className='lg:w-[25rem] hidden md:block  flex-none sticky top-16'>
                    <UpComingEvent />

                </div>
            </div>

        </div>

    )
}

export default DashboardHome
