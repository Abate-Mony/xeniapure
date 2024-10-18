import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const DownloadInvoice = () => {
    return (
        <div>
            <div
            >
                <img src="/payment-success.jpg"
                    className="max-w-[25rem] w-full h-44 mx-auto"
                    alt="" />
                <a href="/invoice.jpg" className="invoice" download={"invoice"}>
                    <Button

                        className="text-sm rounded-full hover:text-primary-color font-semibold font-poppins px-8 py-3.5 md:py-3 hover:bg-white hover:border-primary-color border-[1px] h-auto bg-primary-color"
                    >
                        Download Invoice
                    </Button>
                </a>

                <Link to={"/login"}>
                    <Button
                        className="text-sm bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:text-primary-color font-semibold font-poppins px-10 py-3.5 md:py-3 hover:bg-white hover:border-primary-color border-[1px] h-auto bg-[#56d8d4]/65"
                    >
                        login to Dashboard
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default DownloadInvoice
