"use client"
import { Card, CardContent } from "@/components/ui/card";
import { Loader } from "lucide-react";
import useUserStore from "@/features/store/use-store";
import { EditUserForm } from "./edit-user-form";

interface EditUserFormWrapperProps {
    onCancel: () => void;
    id: string;
}

export const EditUserFormWrapper = ({ onCancel, id }: EditUserFormWrapperProps) => {



    const { getUserById } = useUserStore();


    const initialValue = getUserById(id);







    if (!initialValue) {
        return (
            <Card className=" w-full h-[714px] border-none shadow-none">
                <CardContent className=" flex items-center  justify-center h-full">
                    <Loader className=" size-5 animate-spin text-white" />
                </CardContent>
            </Card>
        )
    }




    return (
        <EditUserForm initialValues={initialValue} onCancel={onCancel} />
    )
}
