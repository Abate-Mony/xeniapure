/* eslint-disable padded-blocks */
/* eslint-disable  @typescript-eslint/no-explicit-any */
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'


import { cn } from '@/lib/utils.js';
import Heading from './ui/heading.js';
import { INavItemsLinks } from '@/types.js';
interface IStatsCard extends INavItemsLinks {
    className?: string;
    hoverIndex?: number | null;
    setHoverIndex?: any;
    index?: number,
    asLink?: boolean,
    count?: number,

}
function StatsCard({ className,
    icon: Icon,
    name: title,
    link: to,
    hoverIndex,
    setHoverIndex,
    index,
    asLink,
    count,
}: IStatsCard) {
    const isActive = hoverIndex == index
    if (!asLink) {
        return (
            <div
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                className={cn(
                    ' flex-none snap bg-opacity-80 min-w-40 relative p-2 border py-4 mb-4 block rounded-md shadow-lg  transition-all duration-300 bg-white', className

                )}>
                <AnimatePresence>
                    {
                        isActive && <motion.div
                            layoutId="hoverBackgroundee"
                            // layout
                            animate={{
                                opacity: 1,
                                transition: { duration: 0.15 },
                            }}
                            exit={{
                                opacity: 0,
                                transition: { duration: 0.15, delay: 0.2 },
                            }}
                            className='absolute size-full ring-2 inset-0 rounded-sm'
                        />
                    }


                </AnimatePresence>


                <div>
                    <figure className='flex mx-auto mb-2 w-full px-2
                    
                    justify-between -max-w-32 gap-x-2  items-center'>
                        <span
                            className='size-10 font-medium text-white flex items-center justify-center shadow-sm bg-blue-300 rounded-sm'
                        ><Icon size={30} /></span>
                        <Heading
                            className='text-start flex-1 text-xl font-semibold capitalize '
                        >{title}</Heading>

                    </figure>
                    <div className='px-4 mb-2'>
                        <h1 className='font-bold text-xl '>
                            {count}
                        </h1>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Link to={to}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            className={cn(
                ' flex-none relative p-2 border py-4 mb-4 block rounded-md shadow-lg  transition-all duration-300 bg-white', className)}>
            <AnimatePresence>
                {
                    isActive && <motion.div
                        layoutId="hoverBackgroundee"
                        // layout
                        animate={{
                            opacity: 1,
                            transition: { duration: 0.15 },
                        }}
                        exit={{
                            opacity: 0,
                            transition: { duration: 0.15, delay: 0.2 },
                        }}
                        className='absolute size-full ring-2 inset-0 rounded-sm'
                    />
                }


            </AnimatePresence>


            <div>
                <figure className='flex mx-auto mb-2 w-full px-2
                
                justify-between -max-w-32 gap-x-2  items-center'>
                    <span
                        className='size-10 font-medium text-white flex items-center justify-center shadow-sm bg-blue-300 rounded-sm'
                    ><Icon size={30} /></span>
                    <h4
                        className='text-start flex-1 text-sm font-semibold capitalize '
                    >total {title}</h4>

                </figure>
                <div className='px-4 mb-2'>
                    <h1 className='font-bold text-xl '>
                        676.73
                    </h1>
                </div>
            </div>
        </Link>
    )
}

export default StatsCard