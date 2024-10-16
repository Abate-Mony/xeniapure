import { zodResolver } from '@hookform/resolvers/zod'
import { CircleUser, Eye, EyeOff, Mail, Phone, User } from 'lucide-react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

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
const genderOption = [
    {
        value: 'Male',
        key: "Male"
    },
    {
        value: 'Female',
        key: "Female"
    },
    {
        value: 'Other',
        key: "Other"
    },
    {
        value: 'Prefered not to say',
        key: "world"
    },
]
export interface iUser extends Pick<userRegister, "firstName" | "lastName" | "email" | "phoneNumber"> {
    gender?: "Male" | "Female" | "Other" | "Prefered not to say",

}

const UserSchema = z.object({
    firstName: z
        .string({ required_error: "Full name is required" })
        .min(2, "Full name should contain more than 5 characters"),
    lastName: z
        .string({ required_error: "Full name is required" })
        .min(2, "Full name should contain more than 5 characters"),
    email: z
        .string({ required_error: "Email address is required" })
        .email("Invalid email format"),
    phoneNumber: z
        .string({ invalid_type_error: 'Phone number is required' })
        .min(9, 'Phone number must be at least 9 digits')
        .max(12, 'Phone number must not exceed 12 digits'),
    gender: z.enum(["Male", "Female", "Other", "Prefered not to say"], {
        required_error: "Gender is required",
    }),
    password: z
        .string({
            required_error: 'password is required ',
        })
        .min(8, 'Password must be at least 8 characters long'),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'], // path of error
});;
export type iLoginUser = z.infer<typeof UserSchema> & {
    from?: string;
};
const RegistrationJoinUs = () => {

    const navigate = useNavigate()
    const { register, watch,
       handleSubmit, formState: { errors },  setValue } = useForm<iLoginUser>({
            resolver: zodResolver(UserSchema),
            defaultValues: {
                firstName: "",
                email: "",
                phoneNumber: "",
                // gender: "Prefered not to say", // Default value
            },
        });
    const onSubmit = async (data: iLoginUser) => {
        if (Object.keys(errors).length > 0) {
            // Form has validation errors, prevent submission
            return;
        }
        const { email, firstName, lastName, phoneNumber, gender, password, confirmPassword } = data;
        // setUser(data);
        navigate(`preview?lastName=${lastName}&firstName=${firstName}&email=${email}&phone=${phoneNumber}&gender=${gender}`, {
            state: {
                password,
                confirmPassword
            }
        });
    };
    const BottomGradient = () => {
        return (
            <>
                <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
            </>
        );
    }
    const [showPassword, setShowPassword] = useState<{
        password: boolean;
        confirmPassword: boolean;
    }>({
        password: false,
        confirmPassword: false,
    });
    // const actionData = useActionData() as any;
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
                    <Label htmlFor="fullname">First Name <span className="text-rose-600">*</span></Label>
                    <div className='flex items-center  bg-white focus-within:ring-2 transition-all duration-300 ring-1 ring-gray-400 rounded-sm overflow-hidden'>
                        <span
                            className='flex-none border-e-[1px] border-gray-50 flex items-center justify-center size-10'>
                            <User size={20} />
                        </span>
                        <Input type="text" id="fullname"


                            {...register("firstName")}
                            className='h-10 flex-1  placeholder:font-black  !shadow-none rounded-none !border-none focus-within:!ring-0 focus-within:border-none focus-within:shadow-none focus:shadow-none focus:border-0 focus:right-0 hover:border-none hover:ring-0' placeholder='First Name' />
                    </div>
                    {errors.firstName && <span className="error">{errors?.firstName?.message?.toString()}</span>}

                </div>
                <div className="grid gap-2 mb-4">
                    <Label htmlFor="lastName">Last Name(s) <span className="text-rose-600">*</span></Label>
                    <div className='flex items-center  bg-white focus-within:ring-2 transition-all duration-300 ring-1 ring-gray-400 rounded-sm overflow-hidden'>
                        <span
                            className='flex-none border-e-[1px] border-gray-50 flex items-center justify-center size-10'>
                            <CircleUser size={20} />
                        </span>
                        <Input type="text" id="fullname"


                            {...register("lastName")}
                            className='h-10 flex-1  placeholder:font-black  !shadow-none rounded-none !border-none focus-within:!ring-0 focus-within:border-none focus-within:shadow-none focus:shadow-none focus:border-0 focus:right-0 hover:border-none hover:ring-0' placeholder='Last Name' />
                    </div>
                    {errors.lastName && <span className="error">{errors?.lastName?.message?.toString()}</span>}

                </div>
                <div className="grid gap-2 mb-4">
                    <Label htmlFor="email">Email <span className="text-rose-600">*</span></Label>
                    <div className='flex items-center  bg-white focus-within:ring-2 transition-all duration-300 ring-1 ring-gray-400 rounded-sm overflow-hidden'>
                        <span
                            className='flex-none border-e-[1px] border-gray-50 flex items-center justify-center size-10'>
                            <Mail size={20} />
                        </span>
                        <Input type="email" id="email"
                            className='h-10 flex-1  placeholder:font-black  !shadow-none rounded-none !border-none focus-within:!ring-0 focus-within:border-none focus-within:shadow-none focus:shadow-none focus:border-0 focus:right-0 hover:border-none hover:ring-0'
                            {...register("email")}
                            placeholder='email address '
                        />
                    </div>
                    {errors.email && <span className="error">{errors.email?.message?.toString()}</span>}

                </div>
                <div className="grid gap-2 mb-6">
                    <Label htmlFor="phone">Phone Number <span className="text-rose-600">*</span></Label>
                    <div className='flex items-center  bg-white focus-within:ring-2 transition-all duration-300 ring-1 ring-gray-400 rounded-sm overflow-hidden'>
                        <span
                            className='flex-none border-e-[1px] border-gray-50 flex items-center justify-center size-10'>
                            <Phone size={20} />
                        </span>

                        <Input type="tel" id="phone"
                            className='h-10 flex-1  placeholder:font-black  !shadow-none rounded-none !border-none focus-within:!ring-0 focus-within:border-none focus-within:shadow-none focus:shadow-none focus:border-0 focus:right-0 hover:border-none hover:ring-0'
                            {...register("phoneNumber")}
                            placeholder='1234.......0' />
                    </div>
                    {errors.phoneNumber && <span className="error">{errors.phoneNumber?.message?.toString()}</span>}

                </div>
                <div className="grid gap-2 mb-2">
                    <Label htmlFor="phone">Sex/Gender <span className="text-rose-600">*</span></Label>
                    <div className='flex items-center  bg-white focus-within:ring-2 transition-all duration-300 ring-1 ring-gray-400 rounded-sm overflow-hidden'>
                        <span
                            className='flex-none border-e-[1px] border-gray-50 flex items-center justify-center size-10'>
                            <BsGenderFemale size={20} />
                        </span>
                        <Select {...register("gender")}
                            onValueChange={(value: any) => setValue("gender", value)}
                        >
                            <SelectTrigger className="w-full border-none">
                                <SelectValue placeholder="Select your gender" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Please select your gender</SelectLabel>
                                    {genderOption.map((gender, idx) => (
                                        <SelectItem key={idx} value={gender.value}>
                                            {gender.value}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                    </div>
                    {errors.gender && <span className="error">{errors.gender.message}</span>}

                </div>
                <div>

                    <div className="space-y-2 ">
                        <Label htmlFor="password">
                            Pasword <span className="text-rose-600">*</span>
                        </Label>
                        <div
                            className={
                                'formgroup  flex w-full items-stretch overflow-hidden rounded-lg border-black p-0 ring-1 ring-black'
                            }
                        >
                            <span
                                className="grid w-12 place-items-center"
                                onClick={() =>
                                    setShowPassword({
                                        ...showPassword,
                                        password: !showPassword.password,
                                    })
                                }
                            >
                                {showPassword.password ? (
                                    <Eye width={20} height={20} />
                                ) : (
                                    <EyeOff width={20} height={20} />
                                )}
                            </span>
                            <Input
                                type={!showPassword.password ? 'password' : 'text'}


                                {...register('password', {
                                    required: true,
                                    maxLength: 30,
                                    minLength: 8,


                                })}
                                autoComplete="new-password" 
                                name="password"
                                id="password"
                                placeholder="Enter Your password  "
                                className="!ring-none  !focus:ring-0 !focus-visible:ring-0 !focus:ring-0 !focus-visible:ring-offset-0 !focus:ring-offset-0 !h-10 !flex-1 !rounded-none !ring-offset-0"
                            />
                        </div>
                        {errors.password && <span className="error">{errors.password.message}</span>}

                    </div>
                    <div className="space-y-2 ">
                        <Label htmlFor="confirmPasword">
                            Confirm Pasword <span className="text-rose-600">*</span>
                        </Label>
                        <div
                            className={
                                'formgroup  flex w-full items-stretch overflow-hidden rounded-lg border-black p-0 ring-1 ring-black'
                            }
                        >
                            <span
                                className="grid w-12 place-items-center"
                                onClick={() =>
                                    setShowPassword({
                                        ...showPassword,
                                        confirmPassword: !showPassword.confirmPassword,
                                    })
                                }
                            >
                                {!showPassword.confirmPassword ? (
                                    <EyeOff width={20} height={20} />
                                ) : (
                                    <Eye width={20} height={20} />
                                )}
                            </span>
                            <Input
                                type={!showPassword.confirmPassword ? 'password' : 'text'}
                                autoComplete="new-password" 
                                {...register('confirmPassword', {

                                    validate: (value) => {
                                        if (value !== watch('password')) {
                                            return 'Password does not match';
                                        }
                                        return undefined; // Validation passes
                                    },
                                })}
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder="Confirm password   "
                                className="!ring-none  !focus:ring-0 !focus-visible:ring-0 !focus:ring-0 !focus-visible:ring-offset-0 !focus:ring-offset-0 !h-10 !flex-1 !rounded-none !ring-offset-0"
                            />
                        </div>
                        {errors.confirmPassword && <span className="error">{errors.confirmPassword.message}</span>}

                    </div>
                </div>
                <Button
                    className="bg-gradient-to-br mt-6 rounded-none  group/btn w-[min(30rem,calc(100%-0.5rem))] bg-primary-color   shadow-primary-color mx-auto rounded-s, flex gap-x-2  top-auto h-12
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
