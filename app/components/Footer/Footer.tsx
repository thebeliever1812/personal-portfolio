import Link from 'next/link'
import React from 'react'
import { FooterIcons } from './index'

const Footer: React.FC = () => {
    return (
        <div className='footer w-full bg-black p-4 text-center text-sm text-gray-300 flex flex-col items-center justify-between gap-4 space-y-3'>
            <section className='flex flex-col items-center justify-center lg:flex-row lg:justify-around w-full max-w-6xl px-4'>
                <Link href="/" className=''><h2 className='text-white text-2xl font-semibold'>Basir Ahmad</h2></Link>
                <ul className='flex gap-4 text-sm'>
                    <Link href="/about" className=''><li className='text-gray-400 hover:text-white duration-300 active:text-white'>About</li></Link>
                    <Link href="/skills" className=''><li className='text-gray-400 hover:text-white duration-300 active:text-white'>Skills</li></Link>
                    <Link href="/projects" className=''><li className='text-gray-400 hover:text-white duration-300 active:text-white'>Projects</li></Link>
                    <Link href="/contact" className=''><li className='text-gray-400 hover:text-white duration-300 active:text-white'>Contact</li></Link>
                </ul>
            </section>

            <section className='flex flex-col items-center justify-center gap-4 w-full max-w-6xl px-4'>
                <FooterIcons />
                <p className='text-gray-400 select-none'>© 2023 Basir Ahmad. All rights reserved.</p>
            </section>
        </div>
    )
}

export default Footer