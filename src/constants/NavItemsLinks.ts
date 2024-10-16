// import from "lucide-react"
import {
    AlertCircle,
    LayoutDashboard,
    LogInIcon,
    LucideIcon,
    PlusCircle,
    Users
} from "lucide-react";
import { IconType } from "react-icons/lib";
  export interface INavItemsLinks {
    name: string;
    link: string;
    icon: LucideIcon | IconType;
  }
  
  export const NavItemsLinks: INavItemsLinks[] = [

  
    {
      name: "DashBoard",
      link: "/dashboard",
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
      name: "Help",
      link: "/contact-us",
      icon: LogInIcon,
    },
  ];
  export const DashboardNavLinks: (typeof NavItemsLinks)[number][] = [
    {
      name: "DashBoard",
      link: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Users",
      link: "users",
      icon: Users,
    },
  
    {
      name: "Payments",
      link: "newlogistic",
      icon: PlusCircle,
    },
    {
      name: "Events",
      link: "newlogistic",
      icon: PlusCircle,
    },
    {
      name: "Notifications",
      link: "newlogistic",
      icon: AlertCircle,
    },
  ];
  