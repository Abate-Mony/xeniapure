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
                <Heading className='text-white mb-6 text-center text-3xl sm:text-4xl lg:text-5xl font-Marcellus+SC font-medium capitalize px-2 tracking-tighter leading-tight'>
                    BECOME A MEMBER TODAY AND BENEFIT
                </Heading>
                <p className='text-center text-white tracking-wide px-6'>our committe of members are always here to help.</p>
                <Link to="/become-a-member">
                    <Button className='block mx-auto h-auto py-4 my-4 hover:bg-colorPrimary hover:text-white transition-colors duration-300 shadow-sm bg-primary-color text-white  rounded-none  w-[min(20rem,calc(100%-1rem))] border-white'>JOIN NOW</Button>
                </Link>

            </div>
        </section>
    )
}

export default RequestService