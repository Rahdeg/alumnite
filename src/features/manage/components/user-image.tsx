import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";


type AvatarProps = {
    name: string;
    profileImage: string | File | undefined;
};

const Avatar: React.FC<AvatarProps> = ({ name, profileImage }) => {
    const [imageSrc, setImageSrc] = useState<string | null>(null);



    useEffect(() => {
        // Check if profileImage is a File
        if (profileImage instanceof File) {
            // Generate a URL for the file
            const fileUrl = URL.createObjectURL(profileImage);
            setImageSrc(fileUrl);

            console.log({ fileUrl });

            // Cleanup function to release memory
            return () => {
                URL.revokeObjectURL(fileUrl);
            };
        } else if (typeof profileImage === "string" && profileImage) {
            // If profileImage is a string (URL), use it directly
            setImageSrc(profileImage);
        } else {
            // Fallback to a default image URL or leave imageSrc as null
            setImageSrc(""); // Replace with your default image path
        }
    }, [profileImage]);

    console.log({ imageSrc });

    return (
        <div className={cn("size-10 relative rounded-md overflow-hidden")}>
            <Image src={imageSrc ?? ""} alt={name} fill className="object-cover" />
        </div>
    );
};

export default Avatar;
