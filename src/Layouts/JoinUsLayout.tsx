import { VariantHeading } from "@/components/ui/heading"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Link, Outlet } from "react-router-dom"
import { useMemo } from "react"
import { Scrollable } from "@/components/ui/Scrollable"
import CustomNavLink from "@/components/CustomNavLink"
const JoinUsLayout = () => {

    // main logic here 
    const pages = useMemo(() => {

        return ([
            {
                page: "",
                name: "User Information"
            },
            {
                page: "preview",
                name: "Preview information"
            },
            {
                page: "verify-email",
                name: "Verify Email"
            },
            {
                page: "payment",
                name: "Payment"
            },
            {
                page: "download-invoice",
                name: "Download Invoice"
            },
        ])

    }, [])
    return (
        <div>
            <div className="lg:h-[min(calc(100vh-4rem),20rem)] h-[min(calc(100vh-4rem),15rem)] justify-center items-center  flex-col w-full justify-center- rounded-none flex md:items-center md:justify-center  antialiased bg-grid-white/[0.02] relative overflow-hidden !px-0">
                <img src="https://img.freepik.com/free-vector/organic-flat-join-us-concept_23-2148948675.jpg?t=st=1728380668~exp=1728384268~hmac=134a0e2e2beb7178fe34c63254980b51bf1f5013493a023a03dc7ed14eeeff7f&w=900" alt=""
                    className=" size-full object-fit absolute inset-0"
                />
                <div className="relative z-10">
                    <VariantHeading className='text-center py-6 gap-x-3 uppercase mb-6 flex items-center text-primary-color [font-family:var(--second-font)] font-black text-3xl lg:text-4xl max-w-fit mx-auto text-white'>

                        <span
                            className='w-10  h-[1px] bg-primary-color/70 '
                        />  <span>JOIN US TODAY</span>
                        <span
                            className='w-10  h-[1px] bg-primary-color '
                        />

                    </VariantHeading>
                </div>
                <div className="absolute inset-0 bg-black/60 size-full"
                ></div>
            </div>
            <div className="max-w-5xl mx-auto  py-10 px-4">

                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <Link to={"/"}>Home</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <Link to={""}>Support</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Join Us</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                {/* end here */}
                <VariantHeading className='text-center py-6 gap-x-3 uppercase mb-6 flex items-center text-primary-color [font-family:var(--second-font)] font-black text-3xl lg:text-4xl max-w-fit mx-auto'>

                    <span
                        className='w-10  h-[1px] bg-primary-color/70 '
                    />  <span>Join us  today</span>
                    <span
                        className='w-10  h-[1px] bg-primary-color '
                    />

                </VariantHeading>
                <Scrollable
                    className='-mb-2 gap-x-1  scrollto sticky top-12 py-4 flex flex-nowrap overflow-x-auto   md:gap-x-2  z-[10] [--scroll-to-height:0px] max-w-fit px-4 mx-auto'
                    direction='row'
                >
                    {
                        pages.map((page, idx) => <CustomNavLink to={page.page} end
                            style={{
                                pointerEvents: "none"
                            }}
                            show
                            replace
                            selectedClassName='text-green-800  !pointer-events-none text-white bg-primary-color'
                            animateClassName="inset-0 animate-pulse size-full shadow-md  right-0  bg-purple-600/60 !pointer-events-none rounded-sm "
                            className='bg-transparent text-xs relative z-20 bg-white lg:text-sm capitalize w-fit px-4 shadow text-medium rounded-sm   mb-0.5 h-9 flex items-center !pointer-events-none  hover:bg-purple-600/20'
                        >

                            <span className='!text-[10px] mr-1 font-black'>({idx + 1})</span> {page.name}</CustomNavLink>)
                    }
                </Scrollable>
                <Outlet />
            </div>

        </div>
    )
}

export default JoinUsLayout
