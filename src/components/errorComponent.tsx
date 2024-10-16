import { useAsyncError, useRouteError } from "react-router-dom";

import { isAxiosError } from "axios";
import { AnimatedText } from "./Animated/animated";


export const ErrorElement = () => {
    // const navigatePath = UserRole()
    const error1 = useRouteError()
    const err2 = useAsyncError()
    const error = error1 ?? err2

    let errMsg = "";
    if (isAxiosError(error)) {
        errMsg = error.response?.data?.msg || error.response?.data
    }
    else if (typeof error === 'string') {
        errMsg = errMsg += ""
    }
    else {
        // errMsg = error
    }
    console.log(error, "error element log here")
    return (
        <div className="py-8 flex flex-col items-center">
            <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/sorry-item-not-found-3328225-2809510.png"
                className="mx-auto w-full max-w-sm "
            />
            <AnimatedText
                className="text-lg sm:text-xl max-w-lg leading-[1.3rem] italic bg-rose-100 py-4 rounded-lg shadow-sm font-medium !my-10 !text-rose-600"
                text={errMsg || "something went wrong ,try again later"}
            />


        </div>
    )
}
