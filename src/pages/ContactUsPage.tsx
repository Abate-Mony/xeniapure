import { VariantHeading } from "@/components/ui/heading"
const ContactUsPage = () => {
  return (
    <div>
            <div className="lg:h-[min(calc(100vh-4rem),35rem)] h-[min(calc(100vh-4rem),15rem)] justify-center items-center  flex-col w-full justify-center- rounded-none flex md:items-center md:justify-center  antialiased bg-grid-white/[0.02] relative overflow-hidden !px-0">
        <img src="https://loispiration.com/wp-content/uploads/2023/09/toghu-1776742398-e1693934791460.jpg" alt=""
          className=" size-full object-cover absolute inset-0"
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
    </div>
  )
}

export default ContactUsPage
