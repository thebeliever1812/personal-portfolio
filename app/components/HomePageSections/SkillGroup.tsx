"use client"
import React from 'react'
import { SkillIcon } from '../index'

interface Skills {
    skill: string;
    className?: string;
}

const SkillGroup: React.FC = () => {
    const skills: Skills[] = [
        { skill: 'JavaScript', className: 'text-yellow-400' },
        { skill: 'React', className: 'text-cyan-500' },
        { skill: 'Nextjs', className: 'text-white lg:text-black' },
        { skill: 'MongoDB', className: 'text-green-600' },
        { skill: 'Express', className: 'text-white lg:text-black' },
        { skill: 'Nodejs', className: 'text-green-500' },
    ]

    return (
        <div className='w-full lg:border-b-2 rounded mt-10'>
            <ul className='lg:flex gap-10 justify-center overflow-hidden grid grid-cols-3 md:grid-cols-4 justify-items-center content-center'>
                {
                    skills.map((skill, index) =>
                        <li key={index}
                            className='w-13 lg:w-20 lg:h-64 lg:rounded-t-full lg:rounded-b-none rounded-full p-1 lg:bg-[#330080] relative transition-transform duration-500 lg:hover:-translate-y-10 lg:hover:scale-105 lg:top-12 group'
                        >
                            <div
                                className=' w-full aspect-square flex justify-center items-center lg:bg-white rounded-full p-2'
                            >
                                <span
                                    className='text-2xl lg:text-5xl duration-500'
                                >
                                    <SkillIcon skill={skill.skill} className={skill.className} classNameHomeBox='lg:hidden'/>
                                </span>
                            </div>
                            <div className='w-full h-full flex justify-center items-start lg:items-center mt-2 lg:mt-0'>
                                <span className='text-xl rotate-[270deg] absolute bottom-20 right-0 left-0 duration-200 opacity-100 group-hover:opacity-0 lg:block hidden'>
                                    {skill.skill}
                                </span>
                                <span className='text-xs lg:text-md hidden lg:block lg:opacity-0 lg:group-hover:opacity-100'>
                                    {skill.skill}
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