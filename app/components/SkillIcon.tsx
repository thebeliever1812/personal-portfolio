import React from 'react'
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
    FaBootstrap
} from '../components/icons'

interface Skills {
    [key: string]: React.JSX.Element
}

interface SkillIconProps {
    skill: string
    className?: string
}

const SkillIcon: React.FC<SkillIconProps> = ({ skill, className }) => {
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
    }

    const filteredSkill = Object.entries(skills).filter(([key]) => key.toLowerCase() === skill.toLowerCase())

    return (
        <div className={`flex justify-center items-center duration-300 hover:scale-110 hover:text-blue-500`}>
            <div className={`text-4xl lg:text-5xl ${className}`}>
                {
                    filteredSkill.length > 0 ? filteredSkill[0][1] : null
                }
            </div>
            <span className='text-sm lg:text-base ml-2 font-semibold select-none'>
                {filteredSkill.length > 0 ? filteredSkill[0][0] : skill.charAt(0).toUpperCase() + skill.slice(1)}
            </span>
        </div>
    )
}

export default SkillIcon