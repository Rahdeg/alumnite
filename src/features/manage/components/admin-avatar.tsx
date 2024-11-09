import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface AdminAvatarProps {
    image?: string;
    name: string;
    className?: string;
}

export const AdminAvatar = ({ image, name, className }: AdminAvatarProps) => {
    if (image) {
        console.log({ image })
        return (
            <div className={cn("size-10 relative rounded-md overflow-hidden", className)}>
                <Image src={image} alt={name} fill className="object-cover" />
            </div>
        )
    }
    return (
        <Avatar className={cn(" size-10", className)}>
            <AvatarFallback className="  bg-[#EFE6FA] font-semibold text-lg uppercase rounded-md text-black">
                {name[0]}
            </AvatarFallback>
        </Avatar>

    )
}
