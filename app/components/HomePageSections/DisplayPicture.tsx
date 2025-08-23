"use client"
import React from 'react'
import Image from "next/image"
import { useState } from "react"

const DisplayPicture: React.FC = () => {
    const [loaded, setLoaded] = useState(false)
    return (
        <Image
            src={loaded ? "/profile_picture.png" : '/default_profile_photo.jpg'}
            alt="Basir Ahmad smiling in a professional headshot, wearing a neutral shirt, set against a simple background. The mood is friendly and approachable. No visible text in the image."
            fill
            className="mx-auto sm:m-0 rounded-full shadow-[5px_5px_40px_0_#330080] select-none"
            priority
            onLoad={() => setLoaded(true)}
            onError={() => setLoaded(false)}
        />
    )
}

export default DisplayPicture