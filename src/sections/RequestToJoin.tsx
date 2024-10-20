// import Heading from '@/components/heading'
import Heading from '@/components/ui/heading'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'

const RequestService = () => {
    return (
        <section className='bg-blue-950  py-32'
            style={{ clipPath: "polygon(0 0, 100% 0, 99% 90%, 0% 100%)" }}
        >
            <div
                className='max-w-5xl mx-auto'
            >
                <Heading className='text-white mb-6 text-center text-3xl sm:text-4xl lg:text-5xl font-Marcellus+SC font-black capitalize px-2 tracking-tighter leading-tight'>
                    Unlock Exclusive Opportunities – Become a Member Today!
                </Heading>
                <p className='text-center text-white tracking-wide lg:px-10 px-6 mb-6'>
                    Join our thriving community and get the support you need to grow and succeed.
                    Together, we’re building something incredible, and you belong here.
                </p>    <div className='flex flex-wrap gap-x-2
                 gap-y-2 w-full justify-center '>
                    <Link to="/become-a-member" className='w-[min(calc(100%-1rem),250px)] uppercase'>
                        <Button className='block mx-auto h-auto py-4 mb-2 hover:bg-colorPrimary hover:text-white transition-colors duration-300 shadow-sm bg-primary-color text-white  rounded-none  w-[min(20rem,calc(100%-1rem))] border-white'>Join Now & Start Your Journey</Button>
                    </Link>
                    <Link to="/login" className='w-[min(calc(100%-1rem),250px)] uppercase'>
                        <Button className='block mx-auto h-auto py-4 mb-2 hover:bg-colorPrimary hover:text-white transition-colors duration-300 shadow-sm bg-gradient-to-r from-cyan-500 to-blue-500 text-white  rounded-none  w-[min(20rem,calc(100%-1rem))] border-white'>
                        Already a Member? Sign In Here
                        </Button>
                    </Link>

                </div>

            </div>
        </section>
    )
}

export default RequestService