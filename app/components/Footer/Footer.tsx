import Link from 'next/link'
import React from 'react'
import { FooterIcons } from './index'
import { Rubik } from 'next/font/google'

const rubik = Rubik({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-rubik',
})

const Footer: React.FC = () => {
    return (
        <div className={`footer w-full bg-black p-4 text-center text-sm text-gray-300 flex flex-col items-center justify-between gap-4 space-y-3 ${rubik.className}`}>
            <section className={`flex flex-col items-center justify-center lg:flex-row lg:justify-around w-full max-w-6xl px-4 ${rubik.className}`}>
                <h3 className='text-white text-2xl font-semibold'>Basir Ahmad</h3>
                <ul className='flex gap-4 text-sm'>
                    <li>
                        <Link href="/about" className='text-gray-400 hover:text-white active:text-white duration-300'>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/skills" className='text-gray-400 hover:text-white active:text-white duration-300'>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects" className='text-gray-400 hover:text-white active:text-white duration-300'>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className='text-gray-400 hover:text-white active:text-white duration-300'>
                            Contact
                        </Link>
                    </li>
                </ul>
            </section>

            <section className='flex flex-col items-center justify-center gap-4 w-full max-w-6xl px-4'>
                <FooterIcons />
                <p className='text-gray-400 select-none'>© 2025 Basir Ahmad. All rights reserved.</p>
            </section>
        </div>
    )
}

export default Footer