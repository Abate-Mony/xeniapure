import { Dispatch, SetStateAction } from "react";

export interface iHeroBanner {
    heading: {
        text: string;
        className?: string
    }[];
    description: string;
    image?: string; // Optional property
}
export interface userRegister {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    // role?: userRole;
    phoneNumber: string;
  }
  export interface iJoinUsLayoutContext {

    // handleFilesChange: any,
    // handleDeleteFile: any,
    // isSelected: number | null,
    // setIsSelected: Dispatch<SetStateAction<number | null>>,
    user: userRegister,
    setUser: Dispatch<SetStateAction<userRegister>>
}

// Define the type for the array

