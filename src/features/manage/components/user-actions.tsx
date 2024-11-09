
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { PencilIcon, TrashIcon } from "lucide-react";
import { useConfirm } from "@/hooks/use-confirm";
import useUserStore from "@/features/store/use-store";
import { useState } from "react";
import { useEditUserModal } from "../hooks/use-edit-user-modal";

interface TaskActionProps {
    id: string;
    children: React.ReactNode;
}

export const UserAction = ({ id, children }: TaskActionProps) => {


    const [isLoading, setIsLoading] = useState(false);

    const { open } = useEditUserModal()

    const { removeUser } = useUserStore();


    const [ConfirmDeleteDialog, confirmDelete] = useConfirm(
        "Delete User",
        "This action cannot be undone",
        "destructive"
    )

    const onDelete = async () => {
        setIsLoading(true);
        const ok = await confirmDelete();
        if (!ok) return;
        removeUser(id)
        setIsLoading(false);
    }



    return (
        <>
            <ConfirmDeleteDialog />
            <div className="flex justify-end">
                <DropdownMenu modal={false}>
                    <DropdownMenuTrigger asChild>
                        {children}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className=" w-36">
                        <DropdownMenuItem onClick={() => open(id)} disabled={false} className=" font-medium p-[10px]">
                            <PencilIcon className=" size-4 mr-2 stroke-2" />
                            Edit Task
                        </DropdownMenuItem>

                        <DropdownMenuItem onClick={onDelete} disabled={isLoading} className=" text-amber-700 focus:text-amber-700 font-medium p-[10px]">
                            <TrashIcon className=" size-4 mr-2 stroke-2" />
                            Delete Task
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </>

    )
}
