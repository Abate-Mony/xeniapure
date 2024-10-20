import { setUser } from '@/actions/userSlice'
import DashBoardHeader from '@/components/DashBoardHeader'
import { GlobalLoader } from '@/components/GlobalLoader'
import Sidebar from '@/components/side-bar'
import customFetch from '@/components/utils/customFetch'
import { cn } from '@/lib/utils'
import { QueryClient, useQuery } from '@tanstack/react-query'
import { createContext, useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { LoaderFunctionArgs, Outlet, redirect, useNavigation } from 'react-router-dom'
const initialSideBarState: ISideBar = {
    toggleSideBar: false,
    setToggleSideBar: () => { },
    showFullContent: true,
    setShowFullContent: () => { },
    direction: false,
    setDirection: () => { },
};
const DashBoardContext = createContext<ISideBar>(initialSideBarState)
export interface ISideBar {
    toggleSideBar: boolean,
    setToggleSideBar: (props: any) => void
    showFullContent: boolean,
    setShowFullContent: (props: any) => void
    direction: boolean,
    setDirection: (props: any) => void
}
const userQuery = {
    queryKey: ["user"],
    queryFn: async () => {
        const { data } = await customFetch.get("/users/current-user");
        return data

    }
}
export const loader = (queryClient: QueryClient) => async ({ request: _request }: LoaderFunctionArgs) => {
    try {
        return await queryClient.ensureQueryData(userQuery)
    } catch (error) {
        toast.error("fail to login you in try again later")
        return redirect(`/`)
    }
}
const DashBoardLayout = () => {
    const navigation = useNavigation()
    const isPageLoading = navigation.state === "loading"
    useEffect(() => {
        if (isPageLoading) {
            window.history.pushState({}, '', window.location.href)
        }
    }, [isPageLoading])
    const { user } = useQuery(userQuery)?.data as unknown as any || { user: null }




    const [toggleSideBar, setToggleSideBar] = useState<boolean>(false);
    const [showFullContent, setShowFullContent] = useState<boolean>(true);
    const [direction, setDirection] = useState<boolean>(false);
    const dispatch = useDispatch()
    const setUserData = (payload: any) => {
        return dispatch(setUser(payload))
    }

    setUserData(user)
    return (
        <DashBoardContext.Provider value={{
            toggleSideBar,
            setToggleSideBar, setShowFullContent
            , showFullContent,
            setDirection,
            direction
        }}>


            <div className='min-h-screen max-w-7xl bg-[var(--color-light)]  overflow-y-auto-  rounded-md mx-auto '>


                <div className={cn("flex flex-row",
                    direction && "flex-row-reverse"
                )}>
                    <div className='flex-none h-screen z-[10001] sticky left-0 top-0 bottom-0'>
                        <Sidebar user={user}></Sidebar>
                    </div>
                    <div
                        className='flex-1 w-[calc(100%-25rem)]    flex flex-col  '
                    >
                        <DashBoardHeader />
                        <div className='flex-1 p-2 
        h-[calc(100vh-3.5rem)]- overflow-y-auto-'>
                            <Outlet context={{ user }} />
                        </div>
                    </div>
                </div>
                {isPageLoading && <GlobalLoader />}
            </div>
        </DashBoardContext.Provider>
    )
}
export const useDashBoardContext = () => useContext(DashBoardContext)
export default DashBoardLayout
