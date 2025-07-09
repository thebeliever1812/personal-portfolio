'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface Props {
    className: string
    onClick?: () => void
}

const NavItems: React.FC<Props> = ({ className, onClick }) => {
    const navItemsList: string[] = ['Home', "About", "Skills", "Projects", 'Contact']
    const pathName: string = usePathname()
    return (
        <ul className="flex sm:flex-row flex-col sm:text-md md:text-lg 2xl:gap-24 xl:gap-20 lg:gap-10 sm:gap-5 gap-3 w-full">
            {navItemsList.map((navItem, index) => {
                const href = navItem === 'Home' ? '/' : `/${navItem.toLowerCase()}`;
                const isActive = pathName === href;
                return (
                    <li key={index} className="w-full">
                        <Link
                            href={href}
                            onClick={onClick}
                            className={`block w-full ${isActive ? 'text-[#BB8FFF] font-semibold' : ''} ${className}`}
                        >
                            {navItem}
                        </Link>
                    </li>
                );
            })}
        </ul>
    )
}

export default NavItems