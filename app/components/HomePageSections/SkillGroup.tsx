import React from 'react'
import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaJsSquare,
    BiLogoTypescript,
    RiNextjsLine,
    RiTailwindCssFill,
} from '../icons'

interface Skills {
    [key: string]: React.JSX.Element
}

const SkillGroup: React.FC = () => {
    const skills: Skills = {
        HTML: <FaHtml5 />,
        CSS: <FaCss3Alt />,
        JavaScript: <FaJsSquare />,
        TypeScript: <BiLogoTypescript />,
        React: <FaReact />,
        Nextjs: <RiNextjsLine />,
        Tailwind: <RiTailwindCssFill />,
    }

    return (
        <div className='w-full lg:border-b-2 rounded mt-10'>
            <ul className='lg:flex gap-10 justify-center overflow-hidden grid grid-cols-3 md:grid-cols-4 justify-items-center content-center'>
                {
                    Object.entries(skills).map(([skill, icon]) =>
                        <li key={skill} className='w-13 lg:w-20 lg:h-64 lg:rounded-t-full lg:rounded-b-none rounded-full p-1 lg:bg-[#330080] relative transition-transform duration-500 lg:hover:-translate-y-10 lg:hover:scale-105 lg:top-12 group'>
                            <div className=' w-full aspect-square flex justify-center items-center bg-white rounded-full p-2'>
                                <span className='lg:text-black lg:group-hover:text-[#330080] text-2xl lg:text-5xl duration-500 text-[#330080]'>{icon}</span>
                            </div>
                            <div className='w-full h-full flex justify-center items-start lg:items-center mt-2 lg:mt-0'>
                                <span className='text-xl rotate-[270deg] absolute bottom-20 right-0 left-0 duration-200 opacity-100 group-hover:opacity-0 lg:block hidden'>
                                    {skill}
                                </span>
                                <span className='text-xs lg:text-md lg:opacity-0 lg:group-hover:opacity-100'>
                                    {skill}
                                </span>
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default SkillGroup