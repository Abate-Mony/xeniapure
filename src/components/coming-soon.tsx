import { Link, useNavigate } from "react-router-dom"

const ComingSoon = () => {
    const navigate = useNavigate()

    return (
        <div className="min-h-[min(400px,calc(100svh-4rem))] flex flex-col items-center justify-center">
            <img
                src="/coming-soon.jpg"
                className="h-full w-full max-w-2xl"
            />
            <div className="flex w-full justify-center space-x-3">
                <div
                    onClick={() => navigate(-1)}
                    className="px-8 py-4 text-xl  font-semibold rounded bg-blue-600 text-gray-50 hover:text-gray-200">Go Back</div>
                <Link to={"/"} className="px-8 py-4 text-xl font-semibold rounded bg-purple-600 text-gray-50 hover:text-gray-200">Back to home</Link>

            </div>

        </div>
    )
}

export default ComingSoon
