"use client"

import { ResponsiveModal } from "@/components/responsive-modal";
import { useViewUserModal } from "../hooks/use-view-user-modal";
import { ViewUserCardWrapper } from "./view-user-card-wrapper";


export const ViewUserModal = () => {
    const { userId, close, } = useViewUserModal();

    return (
        <ResponsiveModal open={!!userId} onOpenChange={close} >
            {
                userId && (
                    <ViewUserCardWrapper id={userId} />
                )
            }

        </ResponsiveModal>
    )
}
