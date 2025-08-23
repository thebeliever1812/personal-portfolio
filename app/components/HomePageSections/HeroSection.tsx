import React from 'react'
import { ResumeButton } from "../index";
import { Libre_Baskerville, Rubik } from 'next/font/google'
import styles from './HeroSection.module.css'
import { DisplayPicture, TypeAnimationComponent } from './index';
import Image from 'next/image';

const heroFont = Libre_Baskerville({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-libre-baskerville',
})

const rubik = Rubik({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-rubik',
})

const HeroSection: React.FC = () => {
    return (
        <section className="hero-section w-full min-h-screen px-4 flex flex-col md:flex-row-reverse gap-5 lg:gap-10 justify-center md:justify-center items-center bg-[url('/pattern.svg')] bg-no-repeat bg-cover bg-center overflow-hidden">
            <div className={`profile-image w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg aspect-square relative ${styles['profile-up-down']}`}>
                <div className="relative aspect-square w-full max-w-md">
                    <DisplayPicture />
                </div>
            </div>
            <section className='flex flex-col items-center justify-center text-center gap-2 md:gap-4 w-full max-w-3xl'>
                <h1 className={`text-3xl lg:text-4xl xl:text-6xl font-bold text-shadow-sm text-shadow-current select-none ${heroFont.className}`}>
                    Hii, I&apos;m <i>Basir Ahmad</i>
                </h1>
                <h2 className={`text-xl lg:text-2xl xl:text-3xl md:pt-2 text-shadow-xs text-shadow-current select-none ${rubik.className}`}>
                    — a passionate <span className="text-[#6600ff] font-semibold">
                        <TypeAnimationComponent />
                    </span>
                </h2>
                <p className={`text-gray-400 pt-2 md:pt-4 text-center ${rubik.className}`}>
                    I design and develop full&#45;stack web applications with Next.js, React, Tailwind CSS, and the MERN stack—delivering responsive, accessible, and user&#45;friendly experiences.
                </p>
                <div className={`pt-4 sm:pt-7 w-full ${rubik.className}`}>
                    <ResumeButton />
                </div>
            </section>
        </section>
    )
}

export default HeroSection