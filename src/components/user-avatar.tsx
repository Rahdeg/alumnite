import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { cn } from '@/lib/utils';
import LiveBadge from './live-badge';

const avatarSizes = cva(
    "",
    {
        variants: {
            size: {
                default: "h-8 w-8",
                lg: "h-14 w-14"
            }
        },
        defaultVariants: {
            size: "default",
        }
    }
);

interface UserAvatarProps
    extends VariantProps<typeof avatarSizes> {
    imageUrl: string;
    username: string;
    isLive?: boolean;
    showBadge?: boolean
}



const UserAvatar = ({ imageUrl, username, isLive, showBadge, size }: UserAvatarProps) => {

    const canShowBadge = showBadge && isLive;

    return (
        <div className=' relative'>
            <Avatar className={cn("", isLive && " ring-2 ring-emerald-600 border border-background", avatarSizes({ size }))}>
                <AvatarImage src={imageUrl} className=' object-cover' />
                <AvatarFallback>
                    {username.slice(0, 2).toUpperCase()}
                </AvatarFallback>
            </Avatar>
            {
                canShowBadge && (
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                        <LiveBadge />
                    </div>
                )
            }
        </div>
    )
}

export default UserAvatar
