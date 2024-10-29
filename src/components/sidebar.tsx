import { NavItemsLinks } from '@/constants/NavItems'
import { Link } from 'react-router-dom'
import CustomNavLink from './CustomNavLink.js'
import SpringModal from './modals/MainModal.js'
import { Button } from './ui/button'
import Heading from './ui/heading.js'


const user = null

const SideBar = ({ isOpen = false, setIsOpen }: {
    isOpen: boolean,
    setIsOpen: (c?: any) => void | any
}) => {
    const closeModal = () => setIsOpen(false)
    return (
        <SpringModal
            isOpen={isOpen} setIsOpen={setIsOpen} >


            <div
                className=' gap-y-2 flex flex-col  relative'>
                {
                    NavItemsLinks.map((item, idx) => {
                        if (user == null && item.name.toLocaleLowerCase() == "dashboard") return
                        return (<CustomNavLink
                            onClick={closeModal}

                            {...item}
                            to={item.link}
                            key={idx}
                            className="flex items-center "
                        >

                            <Heading>
                                {item.name}
                            </Heading>
                        </CustomNavLink>)
                    }
                    )
                }
            </div>

            <div className='grid  my-4 space-y-2'>
                {!user && <>
                    <Link to={"/contact-us?rd_from=hero"}
                            onClick={closeModal}
                    
                    >
                        <Button
                            className="text-sm rounded-full 
                    hover:text-primary-color
                    bg-gradient-to-r from-cyan-500 to-secondary-color
                    font-poppins font-normal py-2.5 md:py-2.5 hover:bg-white hover:border-primary-color border-[1px] h-auto bg-primary-color"
                        >
                            Request a qoute

                        </Button>
                    </Link>
                </>}
            </div>

        </SpringModal>
    )
}

export default SideBar