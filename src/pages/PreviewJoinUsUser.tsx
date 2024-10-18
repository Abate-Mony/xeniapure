import { AnimateError } from "@/components/Animated/animated";
import SubmitBtn from "@/components/buttons/SubmitBtn";
import { Badge } from "@/components/ui/badge";
import Heading from "@/components/ui/heading";
import customFetch from "@/components/utils/customFetch";
import useError from "@/utils/useError";
import { QueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import toast from "react-hot-toast";
import { ActionFunctionArgs, Link, redirect, useActionData, useLoaderData, useLocation, useSearchParams, useSubmit } from "react-router-dom";
import {
    Table,
    TableBody,
    TableCell,
    TableRow
} from "../components/ui/table";
import { iLoginUser, iUser } from "./RegistrationJoinUs";
import { ArrowLeft } from "lucide-react";

// Action function to handle form submission
export const action = (_queryClient: QueryClient) => async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData) as unknown as iUser & { from?: string };
    const from = data.from || null;

    try {
        // Attempt to send signup request
        await customFetch.post('/auth/signup', data);
        toast.success('OTP send to your email address ');
        return redirect(from || `/join-us/verify-email?email=${data.email}`);
    } catch (err: any) {
        if (isAxiosError(err)) {
            const errMsg = err?.response?.data?.msg || err?.response?.data || "An error occurred";
            if (err.status == 409) return redirect("/join-us/payment")
            if (err.status == 401) return redirect(`/join-us/verify-email?email=${data.email}`)
            toast.error(errMsg);
            return errMsg
        }
        toast.error(err?.message || "Unexpected error occurred")
        return err?.message || "Unexpected error occurred";
    }
};

const PreviewJoinUsUser = () => {
    const [query] = useSearchParams();
    const submit = useSubmit();
    const { state } = useLocation()
    // Extract user details from query parameters
    const user: Partial<iLoginUser> = {
        firstName: query.get("firstName") || "",
        lastName: query.get("lastName") || "",
        phoneNumber: query.get("phone") || "",
        email: query.get("email") || "",
        gender: query.get("gender") as "Male" | "Female" | "Other" | "Prefered not to say" || "Prefered not to say",
        password: state?.password || "",
        confirmPassword: state?.confirmPassword
    };

    // Handle form submission
    const onSubmit = async () => {
        const formData = new FormData();
        Object.entries(user).forEach(([key, value]) => formData.append(key, value || ""));
        submit(formData, { method: "post" });
    };
    const errorMessage = useActionData();

    const errorMessageLoader = useLoaderData();

    const errorMsg = useError([errorMessage,
        errorMessageLoader],)
    return (
        <div>
            <div className="px-2 py-1.5">

                <Link to={"../"} state={{
                    ...user
                }}>
                    <span className="size-9 hover:bg-slate-600/30 rounded-full grid place-items-center transition-all duration-200">
                        <ArrowLeft className="text-gray-600 font-black " />

                    </span>
                </Link>
            </div>
            <Heading className="text-3xl lg:text-4xl text-center  mb-4 text-colorPrimary font-Marcellus+SC font-black my-3">
                Please Check Your Information
            </Heading>

            <div className="max-w-sm mx-auto border-[1px] border-colorPrimary rounded-md py-5 shadow-sm">
                <Table>
                    <TableBody>
                        {Object.entries(user).map(([key, value]) => {
                            if (key.toLocaleLowerCase().includes("password")) return
                            return (

                                <TableRow key={key}>
                                    <TableCell className="font-bold">{key.replace(/([A-Z])/g, ' $1')}</TableCell>
                                    <TableCell className="text-right text-gray-500">
                                        <Badge className="px-2.5 h-auto !bg-opacity-10">{value}</Badge>
                                    </TableCell>
                                </TableRow>
                            )
                        })}


                    </TableBody>

                </Table>
                <Link to={"../"} state={{
                    ...user
                }}
                    className="link w-fit ml-auto text-orange-900 text-lg my-2 px-1.5 block "
                >
                    <Heading className="font-Marcellus+SC">
                        edit your details ?
                    </Heading>

                </Link>
                <AnimateError
                    duration={0.3}
                    error={errorMsg}
                    errorMessage={errorMsg}
                />
                <SubmitBtn
                    className="bg-gradient-to-br w-full h-12 mt-4 text-white font-medium"
                    onClick={onSubmit}
                >
                    Submit &rarr;
                </SubmitBtn>


            </div>
        </div>
    );
};

export default PreviewJoinUsUser;
