"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Loader, Plus } from 'lucide-react'
import React, { useState } from 'react'
import { DataTable } from '@/features/manage/components/data-table'
import { columns } from '@/features/manage/components/columns'
import useUserStore from '@/features/store/use-store'
import { useCreateUsersModal } from '@/hooks/use-create-user-modal'


const ManageClient = () => {
    const [isLoading, setIsLoading] = useState(false);

    const { getUsers, removeUsers } = useUserStore();

    const user = getUsers();

    const { open } = useCreateUsersModal();




    const handleRemoveUser = (ids: string[]) => {
        setIsLoading(true)
        removeUsers(ids);
        setIsLoading(false)
    };


    if (isLoading) {
        return (
            <div className=' max-w-screen-2xl mx-auto w-full pb-10 -mt-24'>
                <Loader className=' animate-spin size-6' />
            </div>
        )
    }



    return (
        <div className=' max-w-screen-2xl mx-auto w-full pb-10 -mt-24'>
            <Card className='border-none drop-shadow-sm'>
                <CardHeader className='gap-y-2 lg:flex-row lg:items-center lg:justify-between'>
                    <CardTitle className=' text-xl line-clamp-1 text-blue-900'>
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
                            <p>No user at the moment: click the add new user button to add a User</p>
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

export default ManageClient