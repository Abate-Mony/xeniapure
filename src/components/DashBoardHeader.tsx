import useAuthenticalUser from "@/hooks/authenticate.js"
import { useDashBoardContext } from "@/Layouts/DashBoardLayout"
import { cn } from "@/lib/utils"
import { Menu, Settings2 } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "./ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu.js"
const DashBoardHeader = () => {
    const { pathname } = useLocation()
    const currentLocation = pathname.split('/').reverse()[0].toString()
    const { setToggleSideBar, setShowFullContent, direction, showFullContent } = useDashBoardContext()
    const MainDropDown = () => {
        const { logOut } = useAuthenticalUser()

        // const { logOutUser } = useAppContext()
        return (<DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline"><Settings2 /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={10} className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                   
                    <DropdownMenuItem>
                        top Account
                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Settings
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>

                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem>Email</DropdownMenuItem>
                                <DropdownMenuItem>Message</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>More...</DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>

                </DropdownMenuGroup>
                <DropdownMenuSeparator />

                <DropdownMenuItem >
                    <Link to={"/"}>View Site</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => logOut()
                } className='text-rose-500'

                >
                    Log out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>)
    }
    return (
        <div className='flex-none h-14 sticky right-0 top-0 left-0 ring-0 z-[10]  w-full shadow-lg bg-white px-2  flex items-center'>
            <div className={cn('flex gap-x-4  justify-between items-center flex-1',
                direction && "flex-row-reverse"
            )}>
                <div className={cn('flex items-center cursor-pointer',
                    direction && "flex-row-reverse"

                )}>
                    <span
                        onClick={() => setToggleSideBar(true)}
                        className='md:hidden grid place-items-center size-10 bg-white'>
                        <Menu />
                    </span>
                    <span
                        onClick={() => setShowFullContent(!showFullContent)}
                        className='hidden md:grid place-items-center size-10 bg-white'>
                        <Menu />
                    </span>
                    {/* <AddFunds /> */}
                    <h1 className='uppercase'>
                        <Link to={'/dashboard/newlogistic'}><Button
                            className='text-xs px-2 h-8 lg:hidden rounded-none
                            bg-primary-color
                            
                            '
                        >

                    Events
                        </Button></Link>
                        <Link to={"/"}
                            className='lg:block hidden font-semibold mx-4 text-lg'
                        >
                            {
                                currentLocation == "" ? "DashBoard" : currentLocation
                            }
                        </Link>  </h1>
                </div>

                {/* mobile view only */}
                <div className='flex items-center gap-x-4 lg:hidden'>
                    <MainDropDown />


                </div>
                {/* desktop view  */}
                <div className='hidden md:flex flex-none items-center gap-x-1'>
                    <Link to={'/newlogistic'}><Button
                        className='text-xs px-3 rounded-none
                            bg-primary-color
                        
                        '
                    >

                        Create Logistics
                    </Button></Link>
                    <MainDropDown />


                </div>

            </div>
        </div >
    )
}

export default DashBoardHeader
