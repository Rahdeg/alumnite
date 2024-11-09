
"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Loader, Loader2, Plus } from 'lucide-react'
import React, { useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { DataTable } from '@/features/manage/components/data-table'
import { columns } from '@/features/manage/components/columns'
import useUserStore from '@/features/store/use-store'
import { useCreateUsersModal } from '@/hooks/use-create-user-modal'




const Homepage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { getUsers, removeUsers } = useUserStore();

  const user = getUsers();

  const { open } = useCreateUsersModal();

  console.log({ user })



  const handleRemoveUser = (ids: string[]) => {
    setIsLoading(true)
    removeUsers(ids);
    setIsLoading(false)
  };


  if (isLoading) {
    return (
      <div className=' max-w-screen-2xl mx-auto w-full pb-10 -mt-24'>
        <Card className='border-none drop-shadow-sm'>
          <CardHeader>
            <Skeleton className='h-8 w-48' />
          </CardHeader>
          <CardContent >
            <div className=' h-[500px] w-full flex items-center justify-center'>
              <Loader2 className=' size-6 text-slate-300 animate-spin' />
            </div>

          </CardContent>
        </Card>
      </div>
    )
  }



  return (
    <div className=' max-w-screen-2xl mx-auto w-full pb-10 -mt-24'>
      <Card className='border-none drop-shadow-sm'>
        <CardHeader className='gap-y-2 lg:flex-row lg:items-center lg:justify-between'>
          <CardTitle className=' text-xl line-clamp-1'>
            Users
          </CardTitle>
          <Button onClick={open} className='' variant="default">
            <Plus className=' size-4 mr-2' />
            Add new user
          </Button>
        </CardHeader>
        <CardContent>
          {
            !user.length ? (<div className=' h-full flex items-center justify-center'>
              <Loader className=' size-6 animate-spin text-muted-foreground' />
            </div>) : (<DataTable columns={columns} data={user} filterKey='name' disabled={isLoading} onDelete={
              (row) => {
                const ids = row.map((r) => r.original.id);
                handleRemoveUser(ids);
              }
            } />)
          }

        </CardContent>
      </Card>

    </div>
  )
}

export default Homepage