import Footer from '@/components/footer'
import NavBar from '@/components/NavBar'
import SideBar from '@/components/sidebar'
// import TopBar from '@/components/top-bar'
import NavigationArrow from '@/components/navigation-menu'
import ScrollTop from '@/components/withRouter'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import useAuthenticalUser from '@/hooks/authenticate'

const RootLayout = () => {
    const [isOpen, setIsOpen] = useState(false)
    const {

        loginUser

    } = useAuthenticalUser();
    // Ensure login logic only runs on mount
    useEffect(() => {
        loginUser();
    }, []);
    return (
        <>
            <ScrollTop />
            <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />

            {/* <TopBar /> */}
            <NavigationArrow />
            <NavBar
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            <Outlet />
            <Footer />
        </>
    )
}

export default RootLayout
