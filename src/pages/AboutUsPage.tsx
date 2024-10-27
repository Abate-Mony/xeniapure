import { Compare } from "@/components/ui/compare"
import { VariantHeading } from "@/components/ui/heading"
const AboutUsPage = () => {
  return (
    <div>
      <div className="lg:h-[min(calc(100vh-4rem),25rem)] h-[min(calc(100vh-4rem),15rem)] justify-center items-center  flex-col w-full justify-center- rounded-none flex md:items-center md:justify-center  antialiased bg-grid-white/[0.02] relative overflow-hidden !px-0">
      
      <Compare
                                firstImage="https://livewp.site/wp/md/clengo/wp-content/uploads/sites/61/2019/04/project_03-400x400.jpg"
                                secondImage="https://livewp.site/wp/md/clengo/wp-content/uploads/sites/61/2019/04/Stainless-Steel-Cleaning.jpg"
                                firstImageClassName="object-cover object-left-top w-full"
                                secondImageClassname="object-cover object-left-top w-full"
                                className="w-full h-full size-full object-fit !absolute inset-0 !rounded-none px-0 border-0"
                                slideMode="hover"
                                autoplay={true}
                            />
        {/* <img src="/statue.jpg" alt=""
          className=" "
        /> */}
        <div className="relative z-[1000]">
          <VariantHeading className='text-center py-6 gap-x-3 uppercase mb-6 flex items-center text-colorPrimary [font-family:var(--second-font)] font-black text-3xl lg:text-4xl max-w-fit mx-auto text-white'>

            <span
              className='w-10  h-[1px] bg-primary-color/70 '
            />  <span>About Us</span>
            <span
              className='w-10  h-[1px] bg-primary-color '
            />

          </VariantHeading>
        </div>
        <div className="absolute inset-0 z-20 bg-black/35 size-full"
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
        <div className="sm:flex items-start gap-x-3  ">
          <div 
        
          
          className="flex-none hidden sm:block w-full max-w-44 object-fill fill-muted-foreground" />

          <p className="mb-4 flex-1">
            Woinkom UK is a vibrant community of individuals from Kom, as well as those with ties to the Kom people, living in the United Kingdom. Our group was founded with the vision of fostering a deep sense of unity, shared values, and cultural pride among members.

            At Woinkom UK, we believe that our culture is our strength. We work to bring together Kom people from all walks of life, creating a space where our traditions, values, and unique heritage are celebrated. Through regular gatherings, cultural events, and collaborative efforts, we aim to build strong bonds within our community and uplift one another.

            Our ultimate goal is to ensure that these values and traditions are passed on to future generations. By instilling a sense of pride and identity in our children and young people, we hope to equip them with the knowledge and cultural roots that will guide them throughout their lives.

            Together, we create a supportive network that honors the past while building a strong foundation for the future.    </p>


        </div>

      </div>
    </div>
  )
}

export default AboutUsPage
