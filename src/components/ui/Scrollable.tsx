import { cn } from '@/lib/utils'
import React from 'react'

interface IScrollableProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    direction?: "row" | "column",
    refE?: any
}

export const Scrollable = ({ children, className, direction, refE, ...props }: IScrollableProps) => {
    return (
        <div
            {...props}
            ref={refE}
            className={cn("flex flex-nowrap overflow-x-auto scrollto  gap-x-4 md:gap-x-2",
                className,
                direction == "row" && "flex-nowrap",
                direction == "column" && "flex-wrap "

            )}
        >{children}</div>
    )
}
