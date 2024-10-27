import { Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import Heading from './ui/heading'

const TopHeader = () => {
    return (
        <div
            className='h-12 flex items-center justify-center  bg-primary-color'
        >
            <div
                className='flex w-full px-4 justify-between items-center max-w-5xl mx-auto'
            >
                {/* right side here */}
                <div>
                    <Heading className='flex gap-x-2 text-sm items-center  text-white'>
                        <Mail size={15} />
                        example@gmail.com
                    </Heading>
                </div>
                {/* left side here */}
                <div>
                    {/* <Heading className='flex gap-x-2 text-sm items-center  text-white'>
                        <PhoneIcon size={15} />
                        +23767222783
                    </Heading> */}
                    <Link to={"/contact-us?rd_from=hero"} className="block lg:hidden">
                                    <Button
                                        className=" rounded-full 
                    hover:text-primary-color
                    bg-gradient-to-r from-cyan-500 to-blue-500
                    font-poppins font-normal text-xs py-2.5 md:py-2.5 hover:bg-white hover:border-primary-color border-[1px] h-auto bg-primary-color"
                                    >
                               Request A qoute

                                    </Button>
                                </Link>
                </div>
            </div>
        </div>
    )
}

export default TopHeader