import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, Phone, User } from 'lucide-react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'
import { ZodType, z } from 'zod'

import { VariantHeading } from '@/components/ui/heading'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { userRegister } from '@/types'
import { useState } from 'react'
import { BsGenderFemale } from 'react-icons/bs'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
interface iUser extends Pick<userRegister, "name" | "email" | "phoneNumber"> {

}

const UserSchema: ZodType<iUser> = z
    .object({
        name: z.string({ required_error: "" })
            .min(5, "full name should contain more than 5 character long"),
        email: z.string({
            description: "some desc",
            required_error: "email address is required"
        }).email(),
        phoneNumber: z.string({ invalid_type_error: 'number is required here' })
            .min(9, 'please 9 numbers are required to register ').max(12)
    })
const RegistrationJoinUs = () => {
    const [user, setUser] = useState<iUser | any>({})

    const navigate = useNavigate()
    const { register, handleSubmit,
        formState: { errors },
        reset: _reset } = useForm<iUser>({
            resolver: zodResolver(UserSchema),
            defaultValues: {
                ...user
            }
        });
    const onSubmit = async (data: iUser) => {
        // console.log("data", data)
        const {email,name,phoneNumber}=data
        setUser(data)
        navigate(`preview?fullname=${name}&email=${email}&phone=${phoneNumber}`)


    }
    const BottomGradient = () => {
        return (
            <>
                <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
            </>
        );
    }
    return (
        <div>

            <VariantHeading className='text-center py-6 gap-x-3 uppercase mb-6 flex items-center text-blue-950 [font-family:var(--second-font)] font-black text-3xl lg:text-4xl max-w-fit mx-auto '>

                <span
                    className='w-10  h-[1px] bg-primary-color/70 '
                />  <span>User Information
                </span>
                <span
                    className='w-10  h-[1px] bg-primary-color '
                />

            </VariantHeading>
            <p className='text-center text-gray-600 mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit esentium.</p>
            <form onSubmit={handleSubmit(onSubmit)}

                className='px-4 w-[min(30rem,calc(100%-0.3rem))] mx-auto mb-24 rounded-sm bg-white py-10'>
                <div className="grid gap-2 mb-4">
                    <Label htmlFor="fullname">Full Name</Label>
                    <div className='flex items-center  bg-white focus-within:ring-2 transition-all duration-300 ring-1 ring-primary-color rounded-sm overflow-hidden'>
                        <span
                            className='flex-none border-e-[1px] border-primary-color flex items-center justify-center size-10'>
                            <User size={20} />
                        </span>
                        <Input type="text" id="fullname"


                            {...register("name")}
                            className='h-10 flex-1  placeholder:font-black  !shadow-none rounded-none !border-none focus-within:!ring-0 focus-within:border-none focus-within:shadow-none focus:shadow-none focus:border-0 focus:right-0 hover:border-none hover:ring-0' placeholder='Full Name' />
                    </div>
                    {errors.name && <span className="error">{errors?.name?.message?.toString()}</span>}

                </div>
                <div className="grid gap-2 mb-4">
                    <Label htmlFor="email">Email</Label>
                    <div className='flex items-center  bg-white focus-within:ring-2 transition-all duration-300 ring-1 ring-primary-color rounded-sm overflow-hidden'>
                        <span
                            className='flex-none border-e-[1px] border-primary-color flex items-center justify-center size-10'>
                            <Mail size={20} />
                        </span>
                        <Input type="email" id="email"
                            className='h-10 flex-1  placeholder:font-black  !shadow-none rounded-none !border-none focus-within:!ring-0 focus-within:border-none focus-within:shadow-none focus:shadow-none focus:border-0 focus:right-0 hover:border-none hover:ring-0'
                            {...register("email")}
                            defaultValue="ecg@example.com" />
                    </div>
                    {errors.email && <span className="error">{errors.email?.message?.toString()}</span>}

                </div>
                <div className="grid gap-2 mb-6">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className='flex items-center  bg-white focus-within:ring-2 transition-all duration-300 ring-1 ring-primary-color rounded-sm overflow-hidden'>
                        <span
                            className='flex-none border-e-[1px] border-primary-color flex items-center justify-center size-10'>
                            <Phone size={20} />
                        </span>

                        <Input type="tel" id="phone"
                            className='h-10 flex-1  placeholder:font-black  !shadow-none rounded-none !border-none focus-within:!ring-0 focus-within:border-none focus-within:shadow-none focus:shadow-none focus:border-0 focus:right-0 hover:border-none hover:ring-0'
                            {...register("phoneNumber")}
                            placeholder='23767.......3' />
                    </div>
                    {errors.phoneNumber && <span className="error">{errors.phoneNumber?.message?.toString()}</span>}

                </div>
                <div className="grid gap-2 mb-6">
                    <Label htmlFor="phone">Sex/Gender</Label>
                    <div className='flex items-center  bg-white focus-within:ring-2 transition-all duration-300 ring-1 ring-primary-color rounded-sm overflow-hidden'>
                        <span
                            className='flex-none border-e-[1px] border-primary-color flex items-center justify-center size-10'>
                            <BsGenderFemale size={20} />
                        </span>
                        <Select >
                        <SelectTrigger className="w-full border-none outline-none ring-0 hover:border-none hover:outline-none hover:right-0">
                            <SelectValue placeholder="Select your sex" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Fruits</SelectLabel>
                                <SelectItem value="apple">Male</SelectItem>
                                <SelectItem value="banana">Female</SelectItem>
                                <SelectItem value="blueberry">Other</SelectItem>
                                <SelectItem value="grapes">prefer not to say</SelectItem>

                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    </div>
                    {errors.phoneNumber && <span className="error">{errors.phoneNumber?.message?.toString()}</span>}

                </div>
                <div>
                  
                
                </div>
                <Button
                    className="bg-gradient-to-br rounded-none  group/btn w-[min(30rem,calc(100%-0.5rem))] bg-primary-color   shadow-primary-color mx-auto rounded-s, flex gap-x-2  top-auto h-12
          disabled:bg-red-700
          from-bg-primary-color dark:from-bg-primary-color dark:to-bg-primary-color to-bg-primary-color/60  dark:bg-bg-primary-color  text-white  font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"

                >

                    Preview &rarr;
                    <BottomGradient />
                </Button>
            </form>
        </div>
    )
}

export default RegistrationJoinUs
