import StatsCard from '@/components/animated-stats-card'
import Heading from '@/components/ui/heading'
import { Scrollable } from '@/components/ui/Scrollable'
import { type INavItemsLinks } from '@/types'
import { PercentSquare } from 'lucide-react'
import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { iLoginUser } from './RegistrationJoinUs'
interface newType extends INavItemsLinks {
    className?: string
}
const dashBoardItems: newType[] = [
    {
        name: "Logistics",
        link: "logistics",
        icon: PercentSquare,
        className: 'bg-green-500',


    },
    {
        name: "Users",
        link: "users",
        icon: PercentSquare,
        className: 'bg-blue-200',

    },
    {
        name: "Logistics",
        link: "logisitics",
        icon: PercentSquare,
        className: 'bg-orange-200',

    },

]
const DashboardHome = () => {
    const [hoverIndex, setHoveredIndex] = useState<number | null>(0)
    const { user } = useOutletContext() as {
        user: iLoginUser
    } || {}
    return (
        <div>
            <Heading className='font-Marcellus+SC py-2.5'>
                Welcome back <span className='text-2xl text-primary-color font-black '>
                    {
                        `${user?.firstName}  ${user?.lastName}`
                    }


                </span>
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
        </div>
    )
}

export default DashboardHome
