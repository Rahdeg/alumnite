"use client"
import { Button } from '@/components/ui/button'
import { Activity, PanelTopInactive, Plus, Users } from 'lucide-react'
import React from 'react'
import { useCreateUsersModal } from '../../../hooks/use-create-user-modal'
import useUserStore from '../../store/use-store'

export const UsersMetrics = () => {

    const { getUsers } = useUserStore()
    const { open } = useCreateUsersModal()


    const users = getUsers();
    const totalUsers = users.length;
    const activeUser = users.filter((user) => user.status === "Active").length;
    const inActiveUser = users.filter((user) => user.status !== "Active").length;

    return (
        <div className=' flex flex-col lg:flex-row items-center gap-y-3 justify-between'>

            <div className=' flex items-center justify-start gap-x-3'>
                <Button size="me" className=' font-bold text-base bg-blue-900 hover:bg-blue-900/70'>
                    <Users className=' size-8 mr-1 text-base font-bold' />
                    Users ({totalUsers})
                </Button>
                <Button size="me" className=' font-bold text-base   bg-emerald-500 hover:bg-emerald-500/70'>
                    <Activity className=' size-8 mr-1 text-base font-bold' />
                    Active ({activeUser})
                </Button>
                <Button size="me" className=' font-bold text-base text-black   bg-[#EBF5FF] hover:bg-[#EBF5FF]/70'>
                    <PanelTopInactive className=' size-8 mr-1 text-base font-bold' />
                    Inactive ({inActiveUser})
                </Button>


            </div>
            <div className=' flex items-center '>
                <Button variant="default" size="me" onClick={open} className='font-bold text-base    bg-blue-900 hover:bg-blue-900/70'>
                    <Plus className=' size-4 mr-1' />
                    Add User
                </Button>
            </div>
        </div>


    )
}
