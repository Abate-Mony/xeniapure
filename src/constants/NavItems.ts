import { LogInIcon, LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

export interface INavItemsLinks {
    name: string;
    link: string;
    icon: LucideIcon | IconType;
}

export const NavItemsLinks: INavItemsLinks[] = [
    {
        name: "Home",
        link: "",
        icon: LogInIcon,
    },
    {
        name: "Convention",
        link: "/convention",
        icon: LogInIcon,
    },


    {
        name: "About Us",
        link: "/about-us",
        icon: LogInIcon,
    },
    {
        name: "Contact Us",
        link: "/contact-us",
        icon: LogInIcon,
    },
    {
        name: "Events",
        link: "/events",
        icon: LogInIcon,
    },
    // {
    //     name: "Become a Member",
    //     link: "/become-a-member",
    //     icon: LogInIcon,
    // },
    {
        name: "FAQs",
        link: "/faqs",
        icon: LogInIcon,
    },
];