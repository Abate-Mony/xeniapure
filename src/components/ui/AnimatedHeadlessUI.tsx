

import { cn } from '@/lib/utils';
import { AnimatePresence, motion, MotionProps } from 'framer-motion';
import React from 'react';
interface Props extends MotionProps {
    className?: string;
    hoverIndex: number | null;
    setHoverIndex: any;
    index: number,
    children: React.ReactNode,
    animatedClassName?: string
    layoutId?: string

}
function AnimatedHeadLessUi({
    className,
    hoverIndex,
    setHoverIndex,
    index,
    children,
    animatedClassName,
    layoutId,
    ...props

}: Props) {
    const isActive = hoverIndex == index
    return (
        <div
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            className={cn(
                ' flex-none   relative   block   transition-all duration-300 ',
                className

            )}>
            <AnimatePresence>
                {
                    isActive && <motion.span
                        {...props}
                        layoutId={layoutId || "hoverBackgroundeedjfasdfodh;osh"}
                        // layout
                        animate={{
                            opacity: 1,
                            transition: { duration: 0.15 },
                        }}
                        exit={{
                            opacity: 0,
                            transition: { duration: 0.15, delay: 0.2 },
                        }}
                        className={
                            cn('absolute size-full    inset-0  block '
                                ,
                                animatedClassName
                            )

                        }
                    />
                }


            </AnimatePresence>

                {
                    children
                }

        </div>
    )


}

export default AnimatedHeadLessUi