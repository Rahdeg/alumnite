import Header from '@/components/header';
import { ViewUserModal } from '@/features/dashboards/components/view-user-modal';
import { CreateUserModal } from '@/features/manage/components/create-user-modal';
import { EditUserModal } from '@/features/manage/components/edit-user-modal';
import React from 'react'

type Props = {
    children: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
    return (
        <>
            <CreateUserModal />
            <EditUserModal />
            <ViewUserModal />
            <Header />
            <main className='px-3 lg:px-14 '>
                {children}
            </main>

        </>
    )
}

export default DashboardLayout