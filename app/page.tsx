"use client"

import { useMutation, useQuery } from "@tanstack/react-query";
import { Studio } from "./types/studios";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useState } from "react";
import { handleDelete } from "./utils/api";


export default function Home() {

  const [studiosData, setStudiosData] = useState<Studio[]>([]);

  const fetchStudioData = async () => {
    const res = await fetch("/api/studios");
    if (!res.ok) {
      throw new Error("Error fetching studio data");
    }
    return res.json()
  }

  const { 
    data = [],
    error,
    isLoading,
    refetch
  } = useQuery<Studio[]>({
    queryKey: ['perfomanceData'],
    queryFn: fetchStudioData,
  })

  const { 
    mutate: deleteStudio,
    isSuccess,
    isPending,
   } = useMutation({ 
    mutationFn: handleDelete
  })


  const columnHelper = createColumnHelper<Studio>()
  const columns = [
    columnHelper.accessor('id', {
      header: 'Studio ID',
      cell: info => info.getValue()
    }),
    columnHelper.accessor('name', {
      header: 'Name',
      cell: info => info.getValue()
    }),
    columnHelper.accessor('business_type', {
      header: 'Business Type',
      cell: info => info.getValue()
    }),
    columnHelper.accessor('status', {
      header: 'Status',
      cell: info => {
        const status = info.getValue()
        return status === 1 
          ? "Active" 
          : status === 0 
          ? "Deleted"
          : "Inactive"
      }
    }),
    columnHelper.display({
      id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const studioId = row.original.id.toString();

      const handleEdit = () => {
        console.log(`Edit studio with ID: ${studioId}`);
        // Add your edit logic here
      };

      return (
        <div className="flex items-center gap-1">
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => handleDelete(studioId)}>Delete</button>
        </div>
      );
    }
    })
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Ooops.. Something went wrong.</p>
  }

  if (!data) {
    return <p>No data available.</p>
  }

  return ( 
    <main className="px-4 py-8">
    <h1 className="text-3xl font-bold pl-4 sticky mb-8">Studio Performance Dashboard</h1>
    <table className="w-full border-collapse bg-white shadow-md">
        <thead className="bg-gray-100">
          <tr>
            {table.getHeaderGroups().map(headerGroup => (
              headerGroup.headers.map(header => (
                <th key={header.id} className="border p-4">
                  {
                    header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )
                  }
                </th>
              ))
            ))}
          </tr>
        </thead>
        <tbody>
          {table.getRowModel().rows.map (row=> {
            return (
              <tr key={row.id} className="odd:bg-white even:bg-gray-50">
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="border p-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
   
    </main>
  );
}
