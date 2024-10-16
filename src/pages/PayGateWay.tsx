import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { useNavigate, useSearchParams } from "react-router-dom";

const PayGateWay = () => {
    const navigate = useNavigate()
    const [query] = useSearchParams()
    return (
        <div>
            <div
                className="min-h-36 bg-orange-900 grid place-items-center"
            >
                coming soon
            </div>

            <Button
                onClick={() => {
                    toast.promise(
                        new Promise(r => {
                            setTimeout(() => {
                                navigate(`/join-us/download-invoice`,
                                    { state: query.toString() }
                                )
                                r("")
                            }, 5000);
                        }),
                        {
                            loading: 'Saving...',
                            success: <b>Pay successfully </b>,
                            error: <b>Could not save.</b>,

                        }, {
                        position: "top-center",
                        icon: "🚀",
                        duration: 10000,

                    }
                    );
                }}
                className="bg-gradient-to-br rounded-none  group/btn w-[min(30rem,calc(100%-0.5rem))] bg-primary-color   shadow-primary-color mx-auto rounded-s, flex gap-x-2  top-auto h-12
          disabled:bg-red-700
          from-bg-primary-color dark:from-bg-primary-color dark:to-bg-primary-color to-bg-primary-color/60  dark:bg-bg-primary-color  text-white  font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"

            >

                Pay  &rarr;

            </Button>

        </div>
    )
}

export default PayGateWay
