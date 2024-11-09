import ComingSoon from "@/components/coming-soon"
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


      
        <div className="sm:flex items-start gap-x-3  ">
          <div


            className="flex-none hidden sm:block w-full max-w-44 object-fill fill-muted-foreground" />
          <ComingSoon />
        </div>

      </div>
    </div>
  )
}

export default AboutUsPage
