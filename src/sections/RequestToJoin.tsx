// import Heading from '@/components/heading'
import Heading from '@/components/ui/heading'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import { Phone } from 'lucide-react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'

const RequestService = () => {
    return (
        <section className='bg-[#f4f9eb]  py-32'
        // style={{ clipPath: "polygon(0 0, 100% 0, 99% 90%, 0% 100%)" }}
        >
            <div
                className='max-w-5xl mx-auto'
            >
                <Heading className='text-black mb-6 text-center text-3xl sm:text-4xl lg:text-5xl font-poppins font-black capitalize px-2 tracking-tighter leading-tight'>
                    Order a <span className="text-primary-color">Free Call</span> from Our Innovative Team
                </Heading>
                <p className='text-center text-black tracking-wide lg:px-10 px-6 mb-6'>
                    Movet mollis deseruisse has ut, qui oblique appetere a ccusata ne. Modo conceptam id nam, no docendi epicuri est. Usu oblique scaevola et.
                </p>    <div className='flex flex-wrap gap-x-2
                 gap-y-2 w-full justify-center '>
                  <div className='flex flex-col max-w-xl mx-auto w-full justify-center items-center gap-y-2'>
                  <div className="grid w-full max-w-sm  items-center gap-1.5">
                        <Label htmlFor="email"
                            className='m-0 text-center font-medium text-sm sm:text-lg mb-1'
                        >Enter Your Phone Number </Label>
                        <div className='flex items-center bg-white focus-within:ring-2 transition-all duration-300 ring-1 ring-primary-color rounded-none overflow-hidden'>
                            <span className='flex-none border-e-[1px] border-primary-color flex items-center justify-center size-10'>
                                <Phone size={20} />
                            </span>
                            <Input type="tel" autoComplete='tel'
                                className='h-10 flex-1  !shadow-none rounded-none !border-none focus-within:!ring-0 focus-within:border-none focus-within:shadow-none focus:shadow-none focus:border-0 focus:right-0 hover:border-none hover:ring-0'
                                id="email" placeholder="080000000xx"

                            />

                        </div>

                    </div>
                    <div className='w-[min(calc(100%-1rem),250px)] uppercase'>
                        <Button
                        onClick={()=>toast.success("thanks we will get back to you")}
                        className='block mx-auto h-auto py-4 mb-2 hover:bg-primary-color hover:text-white transition-colors duration-300 shadow-sm bg-primary-color text-white  rounded-none  w-[min(20rem,calc(100%-1rem))] border-white'>
                            Request A call
                        </Button>
                    </div>
                    <div className='w-full max-w-xl mx-auto flex items-center space-x-2 px-4'>
                        <span className='flex-1 h-px bg-muted-foreground block'></span>
                        <Heading>OR</Heading>
                        <span className='flex-1 h-px bg-muted-foreground block'></span>

                    </div>
                    <Link to="/login" className='w-[min(calc(100%-1rem),250px)] uppercase'>
                        <Button className='block mx-auto h-auto py-4 mb-2 hover:bg-primary-color hover:text-white transition-colors duration-300 shadow-sm bg-gradient-to-r from-cyan-500 to-blue-500 text-white  rounded-none  w-[min(20rem,calc(100%-1rem))] border-white'>
                            Click Here To call us
                        </Button>
                    </Link>
                  </div>

                </div>

            </div>
        </section>
    )
}

export default RequestService