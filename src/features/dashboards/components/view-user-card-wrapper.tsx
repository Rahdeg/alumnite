"use client"
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Loader } from "lucide-react";
import useUserStore from "@/features/store/use-store";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { cn, roleConfig } from "@/lib/utils";
import * as Icons from 'react-icons/fa';




interface ViewUserCardWrapperProps {
    id: string;
}

export const ViewUserCardWrapper = ({ id }: ViewUserCardWrapperProps) => {



    const { getUserById } = useUserStore();


    const user = getUserById(id);






    if (!user) {
        return (
            <Card className=" w-full h-[714px] border-none shadow-none">
                <CardContent className=" flex items-center  justify-center h-full">
                    <Loader className=" size-5 animate-spin text-white" />
                </CardContent>
            </Card>
        )
    }

    const config = roleConfig[user.role];

    const IconComponent = Icons[config.icon as keyof typeof Icons];



    return (
        <Card className="p-2 py-6">
            <CardContent>
                {
                    !user.profileImage ? (
                        <div className=" ">
                            <Image src="https://via.placeholder.com/150" width={150} height={150} alt="Message image" className=" rounded-md object-contain size-full" />
                        </div>
                    ) : (
                        <div className=" ">
                            <Image src={user.profileImage} width={150} height={150} alt="Message image" className=" rounded-md object-contain size-full" />
                        </div>
                    )
                }
            </CardContent>
            <CardHeader >

                <div className='flex  items-start justify-between'>
                    <div className="flex gap-x-3">
                        <div className="flex flex-col text-sm overflow-hidden">
                            <p className="truncate font-semibold hover:text-blue-500 capitalize">
                                {user.name}
                            </p>
                            <p className=" text-muted-foreground">
                                {user.email}
                            </p>

                        </div>
                    </div>
                    <div className=" space-y-2">
                        <Badge variant={user.role} className=' w-20 p-1' >
                            <p className="  mr-2"> <IconComponent /></p>
                            {user.role}
                        </Badge>
                        <div className=" flex items-center gap-x-2 text-sm font-medium">
                            <div className={cn(" rounded-full size-4", user.status === "Active" ? "bg-green-600" : "bg-red-600")} />
                            <p className=" line-clamp-1">{user.status} </p>
                        </div>
                    </div>


                </div>



            </CardHeader>
        </Card>
    )
}
