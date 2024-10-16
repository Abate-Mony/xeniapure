/* eslint-disable padded-blocks */
/* eslint-disable  @typescript-eslint/no-explicit-any */
import {
    ColumnDef
  } from "@tanstack/react-table"
  import React from "react"
  // import { MoreHorizontal } from "lucide-react"
  import { ArrowUpDown, ChevronDown, MoreHorizontal, Trash2Icon } from "lucide-react"
  import { Button } from "../components/ui/button.js"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
  } from "../components/ui/dropdown-menu.js"
  import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "../components/ui/tooltip.js"
import { userRegister } from "@/types.js"
import { Badge } from "@/components/ui/badge.js"
import { Link } from "react-router-dom"
  
export const allUsersColumns: ColumnDef<userRegister>[] = [

    {
      header: "#",
      id: "n_0_",
      cell: (row) => {
        return <div>{row.row.index + 1}</div>;
      },
  
    },
  
  
    {
      accessorKey: "userId",
      // header: "Email",
      header: "User ID"
    },
    {
      accessorKey: "firstName",
      // header: "Email",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            First Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      accessorKey: "lastName",
      // header: "Email",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            last Name(s)
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },

    
    
    {
      accessorKey: "email",
      header: () => <div className="text-right">Emai Address</div>,
      cell: ({ row }) => {
        const email = row.original.email
  
  
        return <div className="text-right font-medium">{email}</div>
      },
    },
  
    {
      header: "Action",
      id: "view",
      cell: ({ row }) => {
        const userId = row.original.userId
        //the row value
  
  
        return <Link to={`/dashboard/user/${userId}`}
          state={{
            rd_from: window.location.href
          }}
        >
          <Button
            variant="link"
          >view  </Button>
        </Link>
      }
    },
  
  
  ]
  