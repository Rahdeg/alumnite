"use client"

import { ResponsiveModal } from '@/components/responsive-modal'
import { useCreateUsersModal } from '../../../hooks/use-create-user-modal';
import { CreateUserForm } from './create-user-form';



export const CreateUserModal = () => {
    const { isOpen, setIsOpen, close } = useCreateUsersModal();

    return (
        <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
            <CreateUserForm onCancel={close} />
        </ResponsiveModal>
    )
}
