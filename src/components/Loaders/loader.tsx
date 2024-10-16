import { cn } from "@/lib/utils";
import React from 'react';

interface iLoaderProps {
    childrenClassName?: string
    className?: string;
}
export const SuspenseLoader = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <React.Suspense fallback={
            <div className='fixed size-full items-center justify-center z-[1000]'>
                <CarLoader />
            </div>
        }>
            {
                children
            }
        </React.Suspense>
    );
}
export const Loader = ({
    className,
    childrenClassName

}: iLoaderProps) => {
    return (
        <div className={cn('flex space-x-2 justify-center items-center bg-white- h-16 dark:invert',

            className)}>
            <span className='sr-only'>Loading...</span>
            <div className={cn('h-8 w-8 bg-primary-color rounded-full animate-bounce [animation-delay:-0.3s]', childrenClassName)}></div>
            <div className={cn('h-8 w-8 bg-primary-color rounded-full animate-bounce [animation-delay:-0.15s]', childrenClassName)}></div>
            <div className={cn('h-8 w-8 bg-primary-color rounded-full animate-bounce [animation-delay:-0.10s]', childrenClassName)}></div>

        </div>
    )
}


// import React from 'react'

interface iCar {
    loading_text?: string | React.ReactNode
    className?: string,
}
const CarLoader = ({
    className,
    loading_text = " loading package please wait"

}: iCar) => {
    return (
        <div className={
            cn("flex items-center justify-center flex-col mx-auto size-52 relative",
                className
            )

        }


        >
            <img
            className="animate-pulse"
                src="/main-logo.png"
            />
            <p className='text-xs text-primary-color'>
                {
                    loading_text
                }

            </p>    </div>
    );
};

export default CarLoader;



// export default Loader