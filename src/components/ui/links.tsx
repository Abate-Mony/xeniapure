import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { cn } from '../../lib/utils.js';
interface AnimatedLinksProps extends NavLinkProps {
    text?: string;
    children?: React.ReactNode,
    secondTextClassName?: string
}
export const AnimatedLinks = ({
    text,
    className,
    to,
    children,
    secondTextClassName,
    ...props
}: AnimatedLinksProps) => {
    return (
        <NavLink
            {...props}
            to={to}
            className={cn(
                'text-lg link font-Marcellus+SC cursor-pointer font-bold relative group overflow-hidden',
                className
            )}
        >
            {({ isActive }) => (
                <>
                    <span
                        className={cn(
                            'absolute left-0 right-0 z-10 transition-all duration-500 group-hover:bottom-0 text-primary-color',
                            isActive && 'bottom-0',
                            !isActive && '-bottom-[calc(100%)]'
                        )}
                    >
                        {children ?? text}
                    </span>

                    <span
                        className={cn(
                            'relative z-0 block transition-all duration-500 w-full',
                            secondTextClassName,
                            isActive ? 'text-primary-color' : 'group-hover:-translate-y-10 delay-100'
                        )}
                    >
                        {children ?? text}
                    </span>
                </>
            )}
        </NavLink>
    );
};


