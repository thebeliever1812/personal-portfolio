import Link from 'next/link'
import React from 'react'

interface Props {
    children: React.ReactNode
    onClick?: () => void
    className?: string
    path: string
}

const Button: React.FC<Props> = ({ children, onClick, className, path }) => {
    return (
        <Link href={path}>
            <button className={`${className} ring-offset-background transition-colors active-visible:outline-none active-visible:ring-2 active-visible:ring-ring active-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 inline-flex items-center justify-center px-6 py-2 border-0 rounded-full text-sm font-medium text-white bg-gradient-to-l from-blue-500 to-purple-600 shadow-lg hover:from-purple-500 hover:to-blue-600 active:outline-none active:ring-2 active:ring-offset-2 active:ring-indigo-500 duration-500 cursor-pointer`} onClick={onClick}>
                {children}
            </button>
        </Link>

    )
}

export default Button