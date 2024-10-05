import Footer from '@/components/footer'
import NavBar from '@/components/NavBar'
import SideBar from '@/components/sidebar'
import TopBar from '@/components/top-bar'
import NavigationArrow from '@/components/ui/navigation-menu'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />

            <TopBar />
            <NavigationArrow/>
            <NavBar 
                      isOpen={isOpen}
                      setIsOpen={setIsOpen}
            />
            <Outlet />
            <Footer/>
        </>
    )
}

export default RootLayout
