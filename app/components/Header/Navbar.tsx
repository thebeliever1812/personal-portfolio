'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { TbMenuDeep } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import NavItems from './NavItems';
import { Rubik } from 'next/font/google';

const rubik = Rubik({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-rubik',
})

const Navbar: React.FC = () => {
    const [showMobileNavItems, setShowMobileNavItems] = useState<boolean>(false)
    return (
        <div className={`${rubik.className}`}>
            <nav className={`z-40 px-4 sm:px-8 py-2 flex gap-0 justify-between w-full h-16 items-center ${showMobileNavItems && 'bg-black'} fixed backdrop-blur-md shadow-md`}>
                <h2 className='text-xl md:text-3xl flex justify-center items-center overflow-hidden cursor-pointer'>
                    <Link href={'/'}><strong>Basir Ahmad</strong></Link>
                </h2>

                <button className='menu-btn-open flex justify-center items-center text-white text-3xl sm:hidden cursor-pointer active:opacity-60 rounded-full p-1' onClick={() => setShowMobileNavItems(prev => !prev)} aria-label='Open menu'>
                    <TbMenuDeep />
                </button>

                <div className='hidden sm:block'>
                    <NavItems className="hover:text-white rounded-3xl px-3 py-2 duration-200 hover:bg-[#5c00e6] hover:shadow-[0_0_18px_1px_#5200cc] hover:ease-in-out" />
                </div>
            </nav>

            {/* Mobile nav overlay */}

            <div>
                <div className={`fixed w-full h-screen bg-black/40 backdrop-blur-[2px] z-50 ${showMobileNavItems ? 'block': 'hidden'}`} onClick={() => setShowMobileNavItems(false)}>
                </div>
                <div className={`fixed bg-black w-full max-w-80 h-screen right-0 z-[60] px-6 py-3 overflow-y-auto transition-transform duration-500 ease-out  ${showMobileNavItems ? 'translate-x-0' : "translate-x-full"}`}>
                    <button className='menu-btn-close w-9 h-9 text-3xl cursor-pointer hover:bg-[#181818] flex justify-center items-center rounded-full' onClick={() => setShowMobileNavItems(false)} aria-label='Close menu'>
                        <IoClose />
                    </button>

                    <NavItems className='text-xl hover:bg-[#101010] duration-200 hover:ease-in-out p-2 rounded-lg active:bg-[#BB8FFF] active:text-white' onClick={() => setShowMobileNavItems(false)} />
                </div>
            </div>
        </div>
    )
}

export default Navbar