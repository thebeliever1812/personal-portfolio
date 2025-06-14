import React from 'react'
import { ResumeButton } from "../index";

const HeroSection: React.FC = () => {
    return (
        <section className="hero-section w-full min-h-screen rounded-lg px-4 flex flex-col md:flex-row-reverse gap-5 lg:gap-10 justify-evenly items-center">
            {/* Photo */}
            <img src="/fallback_profile_image.jpg" alt="Basir Ahmad's profile photo" className="w-72 md:w-sm lg:w-lg mx-auto sm:m-0 rounded-full bg-cover bg-center shadow-[5px_5px_40px_0_#330080] select-none" />
            {/* name title tagline */}
            <section>
                <h1 className="text-3xl lg:text-4xl xl:text-6xl font-bold text-shadow-sm text-shadow-current select-none">
                    Hi, I'm <i>Basir Ahmad</i>
                </h1>
                <h2 className="text-xl lg:text-2xl xl:text-3xl md:pt-2 text-shadow-xs text-shadow-current select-none">
                    — a passionate <span className="text-[#6600ff] font-semibold">Frontend Developer</span>
                </h2>
                <p className="text-gray-200 pt-2 md:pt-4 ">I design and develop responsive, user-friendly interfaces using React/Next.js & Tailwind.</p>
                <ResumeButton />
            </section>
        </section>
    )
}

export default HeroSection