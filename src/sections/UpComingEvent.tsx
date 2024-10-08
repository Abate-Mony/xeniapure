import Heading from "@/components/ui/heading"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
const EventCard = () => {
    return (

        <Link to={"/"}
            className="hover:bg-primary-color/10 bg-white mx-2 block"
        >
            <motion.div
                // key={index}
                initial={{ y: 40, opacity: 0.5 }}
                whileInView={{ y: 0, opacity: 1 }}
                className=' lg:mx-0'>
                <img
                    className='w-full h-[15rem] rounded-none'
                    src='/event-01.jpg' />
                <Heading

                    className="text-2xl font-black font-Marcellus+SC text-primary-color uppercase py-2"

                >
                    Our Most Popular Categories

                </Heading>
                <p
                    className='line-clamp-4 leading-snug mb-4'
                >

                    Did you know there is a new cannabinoid that is causing quite a buzz within the hemp community? If your guess was THC-O-acetate (THC-O), you are absolutely correct....
                </p>
                <div className="bg-slate-300">

                    <p className='text-slate-700'>March 8, 2023</p>
                </div>
            </motion.div>
        </Link>
    )

}
const UpComingEvent = () => {

    return (
        <section className='bg-[#f7f7f7] py-24'>

            <div className=" mx-auto max-w-6xl">
                <div
                    className=' grid grid-cols-[repeat(auto-fit,minmax(min(20rem,calc(100%-60px)),_1fr))] gap-4 lg:gap-10 mx-auto container lg:px-22'
                >
                    {
                        Array.from({ length: 6 }, (_arr, index) => <EventCard key={index} />)

                    }
                </div>
            </div>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" isActive>
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>

        </section>
    )
}

export default UpComingEvent
