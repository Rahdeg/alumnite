import { UserListCard } from '@/features/dashboards/components/user-list-card'
import { UsersMetrics } from '@/features/dashboards/components/users-metrics'
import React from 'react'

const Homepage = () => {
    return (
        <div className='max-w-screen-2xl mx-auto w-full pb-10 -mt-36 '>
            <UsersMetrics />
            <UserListCard />
        </div>
    )
}

export default Homepage