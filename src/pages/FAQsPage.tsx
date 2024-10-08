import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { VariantHeading } from "@/components/ui/heading"
import { FrequentAskQuestion } from "@/sections/FAQs"
import { Link } from "react-router-dom"
const FAQsPage = () => {
    return (
        <div>
            <div className="lg:h-[min(calc(100vh-4rem),20rem)] h-[min(calc(100vh-4rem),15rem)] justify-center items-center  flex-col w-full justify-center- rounded-none flex md:items-center md:justify-center  antialiased bg-grid-white/[0.02] relative overflow-hidden !px-0">
                <img src="https://img.freepik.com/free-vector/call-center-operators-carrying-communication-icons_53876-64653.jpg?t=st=1728383240~exp=1728386840~hmac=97067d659d32b4bbaec17587375f8966df8233e699ea3ffe6515ea5ed9a0c82e&w=826" alt=""
                    className=" size-full object-fit absolute inset-0"
                />
                <div className="relative z-10">
                    <VariantHeading className='text-center py-6 gap-x-3 uppercase mb-6 flex items-center text-colorPrimary [font-family:var(--second-font)] font-black text-3xl lg:text-4xl max-w-fit mx-auto text-white'>

                        <span
                            className='w-10  h-[1px] bg-primary-color/70 '
                        />  <span>FAQs</span>
                        <span
                            className='w-10  h-[1px] bg-primary-color '
                        />

                    </VariantHeading>
                </div>
                <div className="absolute inset-0 bg-black/65 size-full"
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
                            <BreadcrumbPage>FAQs</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                {/* end here */}
                <VariantHeading className='text-center py-6 gap-x-3 uppercase mb-6 flex items-center text-colorPrimary [font-family:var(--second-font)] font-black text-3xl lg:text-4xl max-w-fit mx-auto'>

                    <span
                        className='w-10  h-[1px] bg-primary-color/70 '
                    />  <span>FAQs</span>
                    <span
                        className='w-10  h-[1px] bg-primary-color '
                    />

                </VariantHeading>
                <FrequentAskQuestion />

            </div>
        </div>
    )
}

export default FAQsPage
