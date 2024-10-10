import { VariantHeading } from "@/components/ui/heading"
const AboutUsPage = () => {
  return (
    <div>
      <div className="lg:h-[min(calc(100vh-4rem),20rem)] h-[min(calc(100vh-4rem),15rem)] justify-center items-center  flex-col w-full justify-center- rounded-none flex md:items-center md:justify-center  antialiased bg-grid-white/[0.02] relative overflow-hidden !px-0">
        <img src="/statue.jpg" alt=""
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

  
        {/* end here */}
        {/* <VariantHeading className='text-center py-6 gap-x-3 uppercase mb-6 flex items-center text-colorPrimary [font-family:var(--second-font)] font-black text-3xl lg:text-4xl max-w-fit mx-auto'>

          <span
            className='w-10  h-[1px] bg-primary-color/70 '
          />  <span>About Us</span>
          <span
            className='w-10  h-[1px] bg-primary-color '
          />

        </VariantHeading> */}
        <p className="mb-4">
        Woinkom UK is a vibrant community of individuals from Kom, as well as those with ties to the Kom people, living in the United Kingdom. Our group was founded with the vision of fostering a deep sense of unity, shared values, and cultural pride among members.

At Woinkom UK, we believe that our culture is our strength. We work to bring together Kom people from all walks of life, creating a space where our traditions, values, and unique heritage are celebrated. Through regular gatherings, cultural events, and collaborative efforts, we aim to build strong bonds within our community and uplift one another.

Our ultimate goal is to ensure that these values and traditions are passed on to future generations. By instilling a sense of pride and identity in our children and young people, we hope to equip them with the knowledge and cultural roots that will guide them throughout their lives.

Together, we create a supportive network that honors the past while building a strong foundation for the future.    </p>
     

      </div>
    </div>
  )
}

export default AboutUsPage
