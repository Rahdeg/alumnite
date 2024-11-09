import { Thumbnail } from '@/components/thumbnails'
import { Badge } from '@/components/ui/badge';
import UserAvatar from '@/components/user-avatar';
import { Role, User } from '@/configs/types'
import { Loader } from 'lucide-react';
import React from 'react'
import { FaUser, FaUserAltSlash, FaUserShield } from 'react-icons/fa';
import { useViewUserModal } from '../hooks/use-view-user-modal';

interface UserCardProps {
    data: User;
}

const roleConfig = {
    [Role.Admin]: {
        icon: <FaUserShield />,
        label: "Admin",
    },
    [Role.User]: {

        icon: <FaUser />,
        label: "User",
    },
    [Role.Guest]: {

        icon: <FaUserAltSlash />,
        label: "Guest",
    },
};


export const UserCard = ({ data }: UserCardProps) => {

    const { open } = useViewUserModal();

    const config = roleConfig[data.role];

    if (!data) {
        return (
            <div>
                <Loader />
            </div>
        )
    }


    return (
        <div className="h-full w-full space-y-4 bg-[#B0D1EA] p-2 rounded-md" onClick={() => open(data.id)}>
            <Thumbnail
                src={data.profileImage ? data.profileImage : ""}
                fallback={""}
                isLive={data.status === "Active" ? true : false}
                username={data.name}
            />
            <div className='flex  items-start justify-between'>
                <div className="flex gap-x-3">
                    <UserAvatar
                        username={data.name}
                        imageUrl={data.profileImage ? data.profileImage : ""}
                        isLive={data.status === "Active" ? true : false}
                    />
                    <div className="flex flex-col text-sm overflow-hidden">
                        <p className="truncate font-semibold hover:text-blue-500 capitalize">
                            {data.name}
                        </p>
                        <p className=" text-muted-foreground">
                            {data.email}
                        </p>

                    </div>
                </div>
                <Badge variant={data.role} className=' w-20 p-1' >
                    <p className="  mr-2"> {config.icon}</p>
                    {data.role}
                </Badge>
            </div>

        </div>
    )
}
