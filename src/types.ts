import { LucideIcon } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons";
export interface INavItemsLinks {
    name: string;
    link: string;
    icon: LucideIcon | IconType;
}
export interface iHeroBanner {
    heading: {
        text: string;
        className?: string
    }[];
    description: string;
    image?: string; // Optional property
}
export interface userRegister {
    role?: any;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    // role?: userRole;
    phoneNumber: string;
    userId?:string
  }
  export interface iJoinUsLayoutContext {

    // handleFilesChange: any,
    // handleDeleteFile: any,
    // isSelected: number | null,
    // setIsSelected: Dispatch<SetStateAction<number | null>>,
    user: userRegister,
    setUser: Dispatch<SetStateAction<userRegister>>
}
export type userRole = "admin" | "user" | "moderator" |'employee';
interface iuser{ [key: string | number]: userRole }
export const USER_ROLES:iuser = 
  {
    admin: "admin",
    employee: "employee",
    user: "user",
  }
 

// Define the type for the array

