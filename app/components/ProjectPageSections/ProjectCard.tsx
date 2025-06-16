"use client"
import React, { useState, useEffect } from 'react'
import { Rubik } from 'next/font/google'
import { Button } from '../index'

const rubik = Rubik({
    variable: '--font-rubik',
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})

interface ProjectCardProps {
    title: string
    description: string
    imageUrl?: string
    liveLink?: string
    githubLink: string
    techStack: string[]
    imageAltText?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title = 'No title', description = 'No description', imageUrl, liveLink = '#', githubLink = '#', techStack = [], imageAltText = 'Image' }) => {
    const [isClicked, setIsClicked] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => setIsMobile(window.innerWidth < 768);

        checkScreen(); // run on mount
        window.addEventListener('resize', checkScreen); // update on resize

        return () => window.removeEventListener('resize', checkScreen); // cleanup
    }, []);
    return (
        <div className="card shadow-[0_0_40px_1px_#1f004d] border border-gray-700 w-full max-w-[280px] group gap-2 rounded-2xl flex justify-end flex-col p-4 md:p-6 overflow-hidden bg-black/50 relative" >
            {/* This div is for background colour change when we hover on Card */}
            <div className={`absolute top-0 left-0 w-full h-full duration-500 ${isClicked ? 'bg-black/60' : ''} group-hover:bg-black/60 z-10`} onClick={() => isMobile && setIsClicked(prev => !prev)}>
            </div>
            <div className="container text-white flex flex-col gap-5 justify-between h-full">
                <div>
                    {/* Image */}
                    <div className="bg-white rounded-lg border-2 border-[#1f004d] hover:scale-103 overflow-hidden">
                        <img src={imageUrl} alt={imageAltText} loading='lazy' className='w-full h-full object-center object-cover' />
                    </div>
                </div>

                <div className='flex flex-col gap-2 items-start'>
                    {/* Title */}
                    <div className="h-fit w-full">
                        <h1 className={`card_heading text-2xl tracking-[.2em] ${rubik.className}`}>
                            {title}
                        </h1>
                    </div>

                    {/* Description */}
                    <div className='h-fit w-full'>
                        <p className={`text-gray-400 ${rubik.className}`}>
                            {description}
                        </p>
                    </div>

                    {/* Tech stack */}
                    <div className={`flex justify-center items-center h-fit w-fit gap-2 ${rubik.className}`}>
                        <ul className="flex flex-wrap gap-3" >
                            {
                                techStack?.length === 0
                                    ? (
                                        <li className="inline-block px-2 py-1">
                                            No tech stack available
                                        </li>
                                    )
                                    : (
                                        techStack.map((tech, index) => (
                                            <li
                                                key={index}
                                                className="bg-[#1f004d] rounded-[0.5em] text-[1em] font-normal duration-300 select-none shadow-[0_0_10px_0_#1f004d] px-2 py-1"
                                            >
                                                {tech}
                                            </li>
                                        ))
                                    )
                            }
                        </ul>
                    </div>
                </div>
            </div>
            {/* Buttons on hover */}
            <div className={`
    absolute h-1/3 py-5 bottom-0 left-0 right-0 duration-500 overflow-hidden flex gap-2 justify-evenly z-20
    ${isMobile
                    ? isClicked ? "translate-y-0" : "translate-y-full"
                    : "translate-y-full group-hover:translate-y-0"}
  `}>
                <Button path={liveLink} className='min-w-24'>
                    Live
                </Button>
                <Button path={githubLink}>
                    GitHub
                </Button>
            </div>
        </div>
    )
}

export default ProjectCard