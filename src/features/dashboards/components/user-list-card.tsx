import { Card } from '@/components/ui/card'
import React from 'react'
import { UsersResult } from './users-results'

export const UserListCard
    = () => {
        return (
            <div className=' max-w-screen-2xl mx-auto w-full pb-10 mt-6 '>
                <Card className='border-none drop-shadow-sm p-5 bg-[#EDF2FA] '>
                    <UsersResult />
                </Card>

            </div>
        )
    }
