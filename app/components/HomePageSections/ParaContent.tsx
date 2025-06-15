import React from 'react'
import { Rubik } from "next/font/google"

interface Props {
    children: React.ReactNode
}

const rubik = Rubik({
    variable: '--font-rubik',
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})

const ParaContent: React.FC<Props> = ({ children }) => {
    return (
        <div className='w-full flex justify-center'>
            <div className={`bg-black/50 p-4 rounded-lg space-y-5 w-full max-w-5xl text-center ${rubik.className} text-white`}>
                {children}
            </div>
        </div>
    )
}

export default ParaContent