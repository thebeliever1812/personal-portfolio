import React from 'react'
import { ResumeButton } from "../index";
import { Libre_Baskerville, Rubik } from 'next/font/google'
import Image from 'next/image';
import styles from './HeroSection.module.css'

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
    const imageUrl: string | undefined = '/profile_picture.png';

    return (
        <section className="hero-section w-full min-h-screen px-4 flex flex-col md:flex-row-reverse gap-5 lg:gap-10 justify-center md:justify-center items-center">
            <div className={`profile-image w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg aspect-square relative ${styles['profile-up-down']}`}>
                <Image
                    src={imageUrl ? imageUrl : '/default_profile_photo.jpg'}
                    alt="Basir Ahmad smiling in a professional headshot, wearing a neutral shirt, set against a simple background. The mood is friendly and approachable. No visible text in the image."
                    fill
                    className="mx-auto sm:m-0 rounded-full shadow-[5px_5px_40px_0_#330080] select-none"
                    priority // if this image is above the fold, use priority instead of loading="lazy"
                />
            </div>
            <section className='flex flex-col items-center justify-center text-center gap-2 md:gap-4 w-full max-w-3xl'>
                <h1 className={`text-3xl lg:text-4xl xl:text-6xl font-bold text-shadow-sm text-shadow-current select-none ${heroFont.className}`}>
                    Hii, I&apos;m <i>Basir Ahmad</i>
                </h1>
                <h2 className={`text-xl lg:text-2xl xl:text-3xl md:pt-2 text-shadow-xs text-shadow-current select-none ${rubik.className}`}>
                    — a passionate <span className="text-[#6600ff] font-semibold">Frontend Developer</span>
                </h2>
                <p className={`text-gray-400 pt-2 md:pt-4 text-center ${rubik.className}`}>I design and develop responsive, accessible, and user-friendly web interfaces using React, Next.js, and Tailwind CSS. My focus is on building high-performance, modern frontend experiences that are optimized for both usability and scalability across all devices.</p>
                <div className={`pt-4 sm:pt-7 w-full ${rubik.className}`}>
                    <ResumeButton />
                </div>
            </section>
        </section>
    )
}

export default HeroSection