import React from 'react'
import { ResumeButton } from "../index";
import { Libre_Baskerville, Rubik } from 'next/font/google'

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
        <section className="hero-section w-full min-h-screen rounded-lg px-4 flex flex-col md:flex-row-reverse gap-5 lg:gap-10 justify-start md:justify-center py-20 md:py-0 items-center">
            <img src="/profile_picture.png" alt="Basir Ahmad smiling in a professional headshot, wearing a neutral shirt, set against a simple background. The mood is friendly and approachable. No visible text in the image." className="w-72 md:w-sm lg:w-lg mx-auto sm:m-0 rounded-full bg-cover bg-center shadow-[5px_5px_40px_0_#330080] select-none" />
            <section className='flex flex-col items-center justify-center text-center gap-2 md:gap-4 w-full max-w-3xl'>
                <h1 className={`text-3xl lg:text-4xl xl:text-6xl font-bold text-shadow-sm text-shadow-current select-none ${heroFont.className}`}>
                    Hi, I'm <i>Basir Ahmad</i>
                </h1>
                <h2 className={`text-xl lg:text-2xl xl:text-3xl md:pt-2 text-shadow-xs text-shadow-current select-none ${rubik.className}`}>
                    — a passionate <span className="text-[#6600ff] font-semibold">Frontend Developer</span>
                </h2>
                <p className={`text-gray-200 pt-2 md:pt-4 text-center ${rubik.className}`}>I design and develop responsive, user-friendly interfaces using React/Next.js & Tailwind.</p>
                <div className={`pt-8 sm:pt-10 w-full ${rubik.className}`}>
                    <ResumeButton />
                </div>
            </section>
        </section>
    )
}

export default HeroSection