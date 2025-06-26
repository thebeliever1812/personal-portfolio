"use client"
import React, { useRef } from 'react'
import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaJsSquare,
    BiLogoTypescript,
    RiNextjsLine,
    RiTailwindCssFill,
    FaGitAlt,
    FaGithub,
    SiRedux,
    SiAppwrite,
    FaBootstrap,
    VscVscode,
    IoLogoVercel,
    FaChrome
} from '../components/icons'
import { motion, useScroll, useTransform } from 'motion/react'

interface Skills {
    [key: string]: React.JSX.Element
}

interface SkillIconProps {
    skill: string
    className?: string
    classNameHomeBox?: string
}

const SkillIcon: React.FC<SkillIconProps> = ({ skill, className, classNameHomeBox }) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'start center'], // Start animating when entering viewport
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
    const skills: Skills = {
        HTML: <FaHtml5 />,
        CSS: <FaCss3Alt />,
        JavaScript: <FaJsSquare />,
        TypeScript: <BiLogoTypescript />,
        React: <FaReact />,
        Nextjs: <RiNextjsLine />,
        Tailwind: <RiTailwindCssFill />,
        Git: <FaGitAlt />,
        GitHub: <FaGithub />,
        Redux: <SiRedux />,
        Appwrite: <SiAppwrite />,
        Bootstrap: <FaBootstrap />,
        VScode: <VscVscode />,
        Vercel: <IoLogoVercel />,
        DevTools: <FaChrome />
    }

    const filteredSkill = Object.entries(skills).filter(([key]) => key.toLowerCase() === skill.toLowerCase())

    return (
        <motion.div
            className={`flex flex-col items-center gap-2 duration-300 group hover:scale-110`}
            ref={ref}
            style={{ opacity }}
        >
            <div className={`text-4xl lg:text-5xl ${className}`}>
                {
                    filteredSkill.length > 0 ? filteredSkill[0][1] : null
                }
            </div>
            <span className={`text-[11px] md:text-sm font-semibold lg:text-md lg:opacity-0 lg:group-hover:opacity-100 duration-200 ${classNameHomeBox ? classNameHomeBox : ''}`}>
                {filteredSkill.length > 0 ? filteredSkill[0][0] : skill.charAt(0).toUpperCase() + skill.slice(1)}
            </span>
        </motion.div>
    )
}

export default SkillIcon