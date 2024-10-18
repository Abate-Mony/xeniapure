// import { Heading } from 'lucide-react'
import { Link } from 'react-router-dom'

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "./ui/avatar.js"
import useGetLoginUser from '@/hooks/getCurrentUser.js';
import Heading from './ui/heading.js';
const UserProfileCard = () => {
    const user = useGetLoginUser();
    return (
        <div className='bg-white shadow-sm rounded-sm mt-0 m-1.5 py-5'>
            <Link to={"/dashboard/profile"} className='flex  flex-col items-center space-x-2'>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                    <p className='text-sm font-medium italic'>Welcome Back</p>
                    <Heading
                        className='text-sm'
                    >@{user?.firstName?.slice(0, 10)}</Heading>
                </div>
            </Link>
        </div>
    )
}

export default UserProfileCard