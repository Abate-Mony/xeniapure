import { Search } from 'lucide-react'
import React, { useEffect } from 'react'
import { useFilter } from '../hooks/CustomLinkFilterHook.ts'
import { useSearchParams } from 'react-router-dom'
import debounce from '../utils/debounce.ts'
import { cn } from '../lib/utils'
interface iSearch
    extends React.InputHTMLAttributes<HTMLInputElement> {
    containerClassName?: string

}
// interface iSearch {
//     className?: string,


// }
function SearchComponent({
    containerClassName,
    ...props
}: iSearch) {
    const { handleFilterChange } = useFilter()
    const handleChange = (event: any) => {
        handleFilterChange({
            key: "search",
            value: event.target.value
        })
    };
    const debouncedHandleChange = debounce(handleChange, 500);
    const [sp] = useSearchParams();
    const searchVal = sp.get("search")
    useEffect(() => {
        if (typeof searchVal == "string" && searchVal.length < 1) {
            handleFilterChange({
                key: "search"
            })
        }
    }, [searchVal])
    return (
        <div className={
            cn('flex max-w-2xl w-full  mx-auto items-stretch h-10 parent border-secondary rounded-lg cursor-pointer border-[3px]',
                containerClassName
            )

        }>
            <input
                className={
                    cn(`flex-1 h-full
                border-none
                outline-none
                rounded-none
                shadow-none
                text-sm
                pl-4
                
                `)
                }
                style={{ border: '0px' }}
                defaultValue={searchVal || ""}
                onChange={debouncedHandleChange}
                // onChange={(e) => handleFilterChange({ key: "search", value: e.target.value })}
                placeholder='Search...'

                {...props}
            ></input>
            <span className='flex-none flex justify-center items-center'>
                <Search />
            </span>
        </div>
    )
}

export default SearchComponent