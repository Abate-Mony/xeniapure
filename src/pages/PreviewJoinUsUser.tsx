import { Link, useSearchParams } from "react-router-dom"
import {
    Table,
    TableBody,
    TableCell,
    TableRow
} from "../components/ui/table"
import { Button } from "@/components/ui/button";
const PreviewJoinUsUser = () => {
    const [query] = useSearchParams();

    let user: any = {
        name: query.get("fullname") || "",
        phoneNumber: query.get("phone") || "",
        email: query.get("email") || ""
    }

    return (
        <div>
            <div className='max-w-sm mx-auto border-[1px] border-colorPrimary  rounded-md py-5 mb-6 shadow-sm'>
                <Table>

                    <TableBody>
                        <TableRow >
                            <TableCell className="font-bold ">Full Name</TableCell>
                            <TableCell className="text-right">{user?.name}</TableCell>
                        </TableRow>
                        <TableRow >
                            <TableCell className="font-bold ">Email Address</TableCell>
                            <TableCell className="text-right">{user?.email}</TableCell>
                        </TableRow>
                        <TableRow >
                            <TableCell className="font-bold ">Phone Number</TableCell>
                            <TableCell className="text-right">{user?.phoneNumber}</TableCell>
                        </TableRow>
                    </TableBody>

                </Table>
                <Link
                    to=""
                >
                    <Button
                        className="bg-gradient-to-br rounded-none  group/btn w-[min(30rem,calc(100%-0.5rem))] bg-primary-color   shadow-primary-color mx-auto rounded-s, flex gap-x-2  top-auto h-12
          disabled:bg-red-700
          from-bg-primary-color dark:from-bg-primary-color dark:to-bg-primary-color to-bg-primary-color/60  dark:bg-bg-primary-color  text-white  font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                        type="submit"

                    >

                        Submit  &rarr;

                    </Button>
                </Link>

            </div>
        </div>
    )
}

export default PreviewJoinUsUser
