"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const ProfilePicture: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    return (
        <div className="relative aspect-square w-full max-w-md">
            {/* Default placeholder image */}
            {!isLoaded && (
                <Image
                    src="/default_profile_photo.jpg"
                    alt="Basir Ahmad smiling in a professional headshot, wearing a neutral shirt, set against a simple background. The mood is friendly and approachable. No visible text in the image."
                    fill
                    className="mx-auto sm:m-0 rounded-full shadow-[5px_5px_40px_0_#330080] select-none"
                />
            )}

            {/* Actual profile image */}
            <Image
                src="/profile_picture.png"
                alt="Basir Ahmad smiling in a professional headshot, wearing a neutral shirt, set against a simple background. The mood is friendly and approachable. No visible text in the image."
                fill
                className="mx-auto sm:m-0 rounded-full shadow-[5px_5px_40px_0_#330080] select-none"
                onLoad={() => setIsLoaded(true)}
                priority
            />
        </div>
    );
}

export default ProfilePicture