import { Thumbnail } from '@/components/thumbnails'
import { Badge } from '@/components/ui/badge';
import UserAvatar from '@/components/user-avatar';
import { User } from '@/configs/types'
import { Loader } from 'lucide-react';
import { useViewUserModal } from '../hooks/use-view-user-modal';
import { roleConfig } from '@/lib/utils';
import * as Icons from 'react-icons/fa';


interface UserCardProps {
    data: User;
}



export const UserCard = ({ data }: UserCardProps) => {

    const { open } = useViewUserModal();

    const config = roleConfig[data.role];

    const IconComponent = Icons[config.icon as keyof typeof Icons];


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
            <div className='flex flex-col  items-start gap-y-2'>
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
                        <p className=" text-muted-foreground truncate">
                            {data.email}
                        </p>

                    </div>
                </div>
                <Badge variant={data.role} className=' w-20 p-1' >
                    <p className="  mr-2"> <IconComponent />  </p>
                    {data.role}
                </Badge>
            </div>

        </div>
    )
}
