/* eslint-disable padded-blocks */
/* eslint-disable  @typescript-eslint/no-explicit-any */
// import wait from '../../constants/wait.js'
import { QueryClient, useQuery } from '@tanstack/react-query'
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom'
import DataTable from '../components/Table.js'
// import { BarChart, PieChart, sampleData, sampleLabels } from '../components/charts/react-chartjs-2.js'

import wait from '../constants/wait.js'




import SearchComponent from '@/components/search.js'
import Heading from '@/components/ui/heading.js'
import customFetch from '@/components/utils/customFetch.js'
import { userRegister } from '@/types.js'
import { allUsersColumns } from '@/utils/dataTableConfig.js'
interface Props {
    search?: string,
    page?: number
}
const allUserQuery = (params: Props) => {
    const {
        search,
        page
    } = params
    return (
        {
            queryFn: async () => {
                await wait(5000)
                const { data } = await customFetch.get<{ users: userRegister[] }>('/users/allusers', {
                    params
                })
                return data
            }, queryKey: ["users", {
                search: search ?? "",
                page: page ?? 1
            }],
            keepPreviousData: true,
        }
    )
}
export const loader = (queryClient: QueryClient) => async ({ request }: LoaderFunctionArgs) => {
    const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries(),
    ])
    await queryClient.ensureQueryData(allUserQuery(params))
    return {
        searchValues: {
            ...params
        }
    }

}
const Users = () => {
    const { searchValues } = useLoaderData() as any
    const users = useQuery(

        allUserQuery(searchValues),

    ).data
    // data?.users
    return (
        <div className='overflow-x-hidden w-full'>
            <Heading 
                // text={}
                className='text-center  text-blue-950- text-blue-950 font-black mb-6 text-3xl sm:text-4xl lg:text-5xl max-w-3xl mx-auto '>
Register Users (<span className='text-primary-color'>{users?.users?.length}</span>)
            </Heading>
            <div className=" lg:flex gap-x-4">
                <div className='lg:w-[calc(100%-24rem)]'>
                    {/* <Bar_Chart /> */}
                    {/* <BarChart
                        // options={options}
                        // chartData={data}
                        data={sampleData}
                        labels={sampleLabels}
                    />
                    <PieChart
                        // options={options}
                        // chartData={data}
                        data={sampleData}
                        labels={sampleLabels}
                    /> */}




                </div>
                <div className='hidden lg:block w-[24rem]  flex-none'>
                    {/* <Suspense fallback={<div>loading ...</div>}

                    >
                        <Register />
                    </Suspense> */}

                </div>
            </div>
            <div className='md:block  my-5    flex-none
                w-[min(30rem,calc(100%-0.5rem))]
                '>
                <SearchComponent placeholder='Search Users' />
            </div>
            {/* dont know how to removethis error cause it not an error */}
            <DataTable columns={allUsersColumns} data={users?.users || []} />
        </div>
    )
}
Users.displayName = "userPage"
export default Users