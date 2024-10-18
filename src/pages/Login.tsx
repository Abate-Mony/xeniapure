/* eslint-disable padded-blocks */
/* eslint-disable  @typescript-eslint/no-explicit-any */
import { Label } from '@radix-ui/react-label'
import { QueryClient } from '@tanstack/react-query'
import { isAxiosError } from 'axios'
import { useForm } from "react-hook-form"
import { ActionFunctionArgs, Form, Link, LoaderFunctionArgs, redirect, useActionData, useLoaderData, useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AnimateError } from "../components/Animated/animated.js"
import SubmitBtn from '../components/buttons/SubmitBtn.js'
import { Loader } from '../components/Loaders/loader.js'
import { Input } from '../components/ui/input.js'
import useError from '../utils/useError.js'
import customFetch from '@/components/utils/customFetch.js'
import Heading from '@/components/ui/heading.js'

export const action = (_queryClient: QueryClient) => async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const from = data.from as string | null

    try {
        // await wait(2000)
        await customFetch.post('/auth/login', data);
        toast.success('Logged in successfully!',)
        if (from) {
            return redirect(from)

        }
        return redirect("/dashboard")

    } catch (err: any) {
        if (isAxiosError(err)) {
            // alert(err.response)
            return err?.response?.data?.msg || err?.response?.data || null

        }
        return err?.message
    }


}
export const loader = async ({ request }: LoaderFunctionArgs) => {
    const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries(),
    ]);
    return (params?.message || null)
}
const Login = () => {
    interface ILoginUser {
        email: string,
        password: string
    }
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm<ILoginUser>();
    const onSubmit = (data: any) => console.log("this is data", data)
    const errorMessage = useActionData();

    const errorMessageLoader = useLoaderData();
    const [qs] = useSearchParams()
    const errorMsg = useError([errorMessage,
        errorMessageLoader],)
    return (


        <div
            className='sm:flex0 bg-white py-4  font-black my-5 max-w-lg px-2 mx-auto w-full  '
        >
            <Heading className='text-center text-4xl'>
                Welcome Back
            </Heading>
            <Form className='w-full space-y-5 px-4'
                method='post'
                replace
            >
                <input type="hidden"

                    name='from'
                    value={qs.get("from") || ''}
                />
                <div className="grid w-full max-w-4xl items-center gap-1.5">
                    <Label htmlFor="password"
                        className='m-0 text-start font-medium text-xl'
                    >Email</Label>
                    <Input type="email" id="email" placeholder="Email"
                        className='rounded-none h-12'
                        // name='email'
                        {...register("email", {
                            required: "This field is required",
                        })}
                    />
                    {errors.email && (
                        <p role="alert" className="error">
                            {errors.email?.message}
                        </p>
                    )}
                </div>
                <div className="grid w-full  items-center gap-1.5">
                    <Label htmlFor="password"
                        className='m-0 text-start font-medium text-xl'
                    >Password</Label>
                    <Input type="password" id="password" placeholder="password here"
                        className='h-12 rounded-none'
                        // name='password'
                        {...register("password", {
                            required: true,
                            minLength: 8

                        })}
                    />

                    {errors.password && (
                        <p role="alert" className="error">
                            {errors.password?.message}
                        </p>
                    )}
                    {errors.password && errors.password.type === "required" && (
                        <span className='error'>This is required</span>
                    )}
                    {errors.password && errors.password.type === "minLength" && (
                        <span className='error'>Max length exceeded</span>
                    )}
                </div>
                {/* {(errorMsg) && <div className='error'>
            {errorMsg}
          </div>} */}
                <AnimateError
                    duration={0.3}
                    error={errorMsg}
                    errorMessage={errorMsg}
                />

                <Link to="/forget-password" className='link  text-sm lg:text-xl ml-auto block w-fit text-blue-500'>
                    forget password
                </Link>
                <SubmitBtn type='submit'
                    // submittingText='logging ....'
                    submittingText={
                        <Loader
                            className='h-full relative z-10'
                            childrenClassName='size-4'
                        />
                    }
                    className='w-[min(30rem,calc(100%-0.5rem))] mx-auto bg-primary-color  rounded-none h-12 block  uppercase
            disabled:bg-blue-800
            '
                    onSubmit={handleSubmit(onSubmit)}

                >
                    login
                </SubmitBtn>

                <Link to="/join-us" className='link text-center  text-sm lg:text-xl  block  text-blue-500'>
                    Dont have an account sign up here
                </Link>

            </Form>
        </div>


    )
}

export default Login