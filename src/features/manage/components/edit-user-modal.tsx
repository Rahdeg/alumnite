"use client"

import { ResponsiveModal } from "@/components/responsive-modal";
import { EditUserFormWrapper } from "./edit-user-form-wrapper";
import { useEditUserModal } from "../hooks/use-edit-user-modal";


export const EditUserModal = () => {
    const { userId, close, } = useEditUserModal();

    return (
        <ResponsiveModal open={!!userId} onOpenChange={close} >
            {
                userId && (
                    <EditUserFormWrapper id={userId} onCancel={close} />
                )
            }

        </ResponsiveModal>
    )
}
