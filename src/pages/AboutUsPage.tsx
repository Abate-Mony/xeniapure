import { VariantHeading } from "@/components/ui/heading"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Link } from "react-router-dom"
import AboutUsComponent from "@/sections/AboutUsComponent"
const AboutUsPage = () => {
  return (
    <div>
      <div className="lg:h-[min(calc(100vh-4rem),35rem)] h-[min(calc(100vh-4rem),15rem)] justify-center items-center  flex-col w-full justify-center- rounded-none flex md:items-center md:justify-center  antialiased bg-grid-white/[0.02] relative overflow-hidden !px-0">
        <img src="/group-image.jpg" alt=""
          className=" size-full object-fit absolute inset-0"
        />
        <div className="relative z-10">
          <VariantHeading className='text-center py-6 gap-x-3 uppercase mb-6 flex items-center text-colorPrimary [font-family:var(--second-font)] font-black text-3xl lg:text-4xl max-w-fit mx-auto text-white'>

            <span
              className='w-10  h-[1px] bg-primary-color/70 '
            />  <span>About Us</span>
            <span
              className='w-10  h-[1px] bg-primary-color '
            />

          </VariantHeading>
        </div>
        <div className="absolute inset-0 bg-black/85 size-full"
        ></div>
      </div>
      <div className="max-w-5xl mx-auto border-green-500 py-10 px-4">

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
              <BreadcrumbPage>About Us</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* end here */}
        <VariantHeading className='text-center py-6 gap-x-3 uppercase mb-6 flex items-center text-colorPrimary [font-family:var(--second-font)] font-black text-3xl lg:text-4xl max-w-fit mx-auto'>

          <span
            className='w-10  h-[1px] bg-primary-color/70 '
          />  <span>About Us</span>
          <span
            className='w-10  h-[1px] bg-primary-color '
          />

        </VariantHeading>
        <p className="mb-4">
          From just £10/ month become a friend of The Africa Centre. Your support will contribute to ensuring that the charity meets its continued mission to educate about, connect to and advocate for Africa and its diaspora.
        </p>
        <p>
          From just £10/ month become a friend of The Africa Centre. Your support will contribute to ensuring that the charity meets its continued mission to educate about, connect to and advocate for Africa and its diaspora.
        </p>
        <AboutUsComponent />

      </div>
    </div>
  )
}

export default AboutUsPage
