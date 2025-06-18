import React from 'react'
import {Kanit} from "next/font/google";

interface Props {
    children: React.ReactNode
}

const kanit = Kanit({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-kanit',
})

const Heading: React.FC<Props> = ({ children }) => {
    return (
        <div className='w-full flex justify-center'>
            <h2 className={`text-4xl lg:text-4xl font-semibold text-shadow-xs text-shadow-current select-none mx-auto my-3 md:my-5 text-center ${kanit.className}`}>{children}</h2>
        </div>
    )
}

export default Heading