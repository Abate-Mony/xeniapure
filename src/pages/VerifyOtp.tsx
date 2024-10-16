import React from 'react';
import { ActionFunctionArgs, Form, redirect, useActionData, useSearchParams } from "react-router-dom";
// import { z } from "zod";
// import { HippoEmail } from '../assets/images';


import { Badge } from "../components/ui/badge";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "../components/ui/input-otp";
// import wait from '../../constants/wait';



import SubmitBtn from '@/components/buttons/SubmitBtn';
import { Loader } from '@/components/Loaders/loader';
import Heading from '@/components/ui/heading';
import customFetch from '@/components/utils/customFetch';
import useError from '@/utils/useError';
import { isAxiosError } from 'axios';
import toast from 'react-hot-toast';
// const FormSchema = z.object({
//     otp: z.string().min(4, {
//         message: "Your one-time password must be 4 characters.",
//     }).max(4, {
//         message: "Your one-time password must be 4 characters.",
//     }),
// })
type FormData = {
    otp: string,
    email: string
}
export const action = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData) as FormData;
    // console.log(data)
    // await wait(5000)
    try {
        await customFetch.post('/auth/verified-otp', data);
        toast.success('OTP verified successfully');
        return redirect(`/join-us/payment?email=${data.email}`);

    } catch (err: any) {
        if (isAxiosError(err)) {
            const errMsg = err?.response?.data?.msg || err?.response?.data || "An error occurred";
            toast.error(errMsg);
            return errMsg
        }
        return err?.message || null

    }
}
const OPTPage = () => {
    const [searchParams] = useSearchParams();
    const emailAdress = searchParams.get("email")
    const [value, setValue] = React.useState("");
    const isValid = value.length >= 4
    const actionData = useActionData() as string
    const errorMsg = useError([actionData])
    if (!emailAdress) {
        return (<><Badge variant="destructive"
            className='w-[min(25rem,calc(100%-1rem))] my-24 mx-auto h-10 text-center flex items-center justify-center mb-2'
        >invalid email address !!!</Badge></>)
    }
    return (
        <div className='px-2 max-w-xl w-[calc(100%-1rem)] bg-gray-100 mx-auto border rounded-md border-black/15 py-10 mt-6 shadow-md'>
            <Heading className='text-center text-primary-color font-bold text-5xl'>verify OPT</Heading>
            <Heading className=' mr-2 text-colorPrimary text-gray-400 text-center text-xl italic font-black'>{emailAdress}</Heading>
            <img src={"/email-verify-image.png"}
                alt='digital hippo image'
                className='h-[13rem] w-[calc(100%-2rem)] max-w-sm mx-auto block my-10'
            />
            <h1 className='text-center mb-6'> please checkout your mail for your verification code and comeback here </h1>

            <Form method='post'
                replace
            >
                <input type="hidden" value={emailAdress} name='email' />
                {errorMsg && <Badge variant="destructive"
                    className='w-[min(25rem,calc(100%-1rem))] mx-auto h-10 text-center flex items-center justify-center mb-2'
                >{errorMsg}</Badge>}
                <div className='text-center mb-4 w-fit mx-auto border-black'>

                    <InputOTP maxLength={6} name='otp'
                        onChange={(value) => setValue(value)}
                        required className='mx-auto mb-5'>
                        <InputOTPGroup >
                            <InputOTPSlot index={0} className='border-[1px]  border-black' />
                            <InputOTPSlot index={1} className='border-[1px]  border-black' />
                            <InputOTPSlot index={2} className='border-[1px]  border-black' />
                            <InputOTPSlot index={3} className='border-[1px]  border-black' />
                            {/* <InputOTPSlot index={4} className='border-[1px]  border-black' />
                            <InputOTPSlot index={5} className='border-[1px]  border-black' /> */}
                        </InputOTPGroup>
                    </InputOTP>
                </div>



                {isValid && <SubmitBtn
                    className="bg-gradient-to-br relative group/btn mb-6 h-14 rounded-md
disabled:bg-red-700
from-primary-color dark:from-zinc-900 dark:to-zinc-900 mx-auto
to-primary-color/50 block w-[min(25rem,calc(100%-1rem))] dark:bg-zinc-800 
text-white 
font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                    submittingText={<Loader />}>
                 Verify email
                </SubmitBtn>

                }


            </Form>


        </div>
    )
}

export default OPTPage