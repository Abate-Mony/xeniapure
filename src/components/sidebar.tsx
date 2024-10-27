import { NavItemsLinks } from '@/constants/NavItems'
import { Link } from 'react-router-dom'
import CustomNavLink from './CustomNavLink.js'
import SpringModal from './modals/MainModal.js'
import { Button } from './ui/button'


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
                className=' space-y-2 flex flex-col gap-y-1 relative'>
                {
                    NavItemsLinks.map((item, idx) => {
                        if (user == null && item.name.toLocaleLowerCase() == "dashboard") return
                        return (<CustomNavLink
                            onClick={closeModal}

                            {...item}
                            to={item.link}
                            key={idx}
                            className="flex items-center space-x-2"
                        >

                            <span className='bg-white/20 size-10 mr-1 flex items-center justify-center rounded-full'>
                                <item.icon />
                            </span>                           {item.name}

                        </CustomNavLink>)
                    }
                    )
                }
            </div>

            <div className='grid  my-4 space-y-2'>
                {!user && <>
                    <Button asChild className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'
                        onClick={() => setIsOpen(false)}
                    >


                        <Link
                            to='/home/auth/register'
                            className='text-xs'
                        >
                            Create Account
                        </Link>
                    </Button>
                    <Button asChild className='relative'
                        onClick={() => setIsOpen(false)}

                    >
                        <Link
                            to='/home/auth'
                            className='text-xs'
                        >
                            Login
                        </Link>
                    </Button>
                </>}
            </div>

        </SpringModal>
    )
}

export default SideBar