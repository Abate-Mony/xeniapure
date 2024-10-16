import CarLoader, { Loader } from './Loaders/loader.js'

export const GlobalLoader = () => {
  return (
    <div
      className=' text-6xl fixed inset-0 h-screen w-screen z-[10]
    grid place-items-center
    '
    >
      <CarLoader className=''
        loading_text={<Loader />}
      />
    </div>
  )
}
