import React from 'react'
import { animateHeadingVariants, pageAnimationVariantsTransiton } from '../utils/framervariants.ts'
import { motion, MotionProps } from "framer-motion"
import { cn } from '@/lib/utils'


export interface IHeadingProps {
    className?: string
    children: React.ReactNode
}
const Heading = ({ children, className, ...props }: IHeadingProps) => {
    return (
        <h1
            {...props}
            className={cn("text-lg font-medium ", className)}
        >{children}</h1>
    )
}

export const VariantHeading = ({ children, className, ...props }: IHeadingProps & MotionProps) => {
    return (
        <motion.h1
            variants={animateHeadingVariants}
            initial="initial"
            whileInView="animate"
            transition={pageAnimationVariantsTransiton}
            {...props}
            className={cn("text-lg font-medium font-Marcellus+SC", className)}
        >{children}</motion.h1>
    )
}

export default Heading