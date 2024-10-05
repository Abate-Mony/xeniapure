import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { cn } from '../../lib/utils.js';
interface AnimatedLinksProps extends NavLinkProps {
    text?: string;
    children?: React.ReactNode,
    secondTextClassName?: string
}
export const AnimatedLinks = ({ text, className, to, children, secondTextClassName, ...props }: AnimatedLinksProps) => {
    return (
        <NavLink
            {...props}
            to={to}
            className={cn('text-lg link font-Marcellus+SC z--10 cursor-pointer  font-bold relative group overflow-hidden',
                className)}>
            {({ isActive }) => (
                <>
                    <span

                        className='absolute block left-0 right-0
group-hover:bottom-0 
transition-all duration-500
-bottom-[calc(100%)] size-full  text-primary-color '
                    >
                        {children ?? text}
                    </span>

                    <span

                        className={(

                            cn(`block group-hover:-translate-y-10 
        delay-100
        transition-all duration-500
     w-full`,
                                secondTextClassName,
                                isActive && "text-primary-color",
                            )
                        )}
                    >
                        {children ?? text}

                    </span>
                </>
            )}

        </NavLink>
    )
}

