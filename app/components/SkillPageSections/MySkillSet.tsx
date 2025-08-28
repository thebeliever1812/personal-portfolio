import React from 'react'
import { Container, Heading, HighlightText, SkillIcon } from '../index'
import { ParaContent } from '../HomePageSections'
import { ExploringNext, IconContainerCard, MyWorkPrinciples } from './index'

interface Skill {
    skill: string;
    className: string;
}

const MySkillSet: React.FC = () => {
    const frontendSkills: Skill[] = [
        { skill: 'HTML', className: 'text-orange-500' },
        { skill: 'CSS', className: 'text-blue-500' },
        { skill: 'Javascript', className: 'text-yellow-400' },
        { skill: 'React', className: 'text-cyan-500' },
        { skill: 'Nextjs', className: 'text-white' },
        { skill: 'Tailwind', className: 'text-sky-500' },
        { skill: 'Shadcn', className: 'text-white' },
        { skill: 'Redux', className: 'text-purple-500' },
        { skill: 'Bootstrap', className: 'text-[#6706f9]' },
    ];
    const backendSkills: Skill[] = [
        { skill: 'Express', className: 'text-white' },
        { skill: 'Nodejs', className: 'text-green-500' },
        { skill: 'MongoDB', className: 'text-green-600' },
        { skill: 'Appwrite', className: 'text-rose-500' },
        { skill: 'Mongoose', className: 'text-red-800' },
        { skill: 'Ejs', className: 'text-rose-900' },
    ];
    const languages: Skill[] = [
        { skill: 'Cpp', className: 'text-blue-500' },
        { skill: 'JavaScript', className: 'text-yellow-400' },
        { skill: 'TypeScript', className: 'text-blue-500' },
    ];
    const toolsAndPlatforms: Skill[] = [
        { skill: 'Git', className: 'text-orange-500' },
        { skill: 'Github', className: 'text-white' },
        { skill: 'VScode', className: 'text-blue-500' },
        { skill: 'Vercel', className: 'text-white text-xl flex justify-center items-center rounded-full w-10 h-10 bg-black lg:w-12 lg:h-12 lg:text-[25px]' },
        { skill: 'DevTools', className: 'text-white bg-blue-500 p-1 w-10 h-10 rounded-lg text-2xl flex justify-center items-center' },
        { skill: "Postman", className: 'text-orange-600' },
        { skill: 'Figma', className: 'text-white' },
        { skill: 'Railway', className: 'text-white' },
    ];
    return (
        <Container >
            <section className='flex flex-col items-center justify-center gap-4 px-4 lg:px-8'>
                <Heading>
                    My Skill Set
                </Heading>
                <ParaContent>
                    <p className="text-gray-400 leading-relaxed text-base tracking-wide p-2"> With <HighlightText>1+ year</HighlightText> of hands-on experience, I build <HighlightText>full-stack</HighlightText> applications using <HighlightText>Next.js</HighlightText> and the <HighlightText>MERN stack</HighlightText>—strengthening core skills across <HighlightText>UI</HighlightText>, <HighlightText>APIs</HighlightText>, and <HighlightText>data</HighlightText>. I focus on writing <HighlightText>clean, maintainable code</HighlightText> and delivering <HighlightText>accessible, user-friendly interfaces</HighlightText> with real-world <HighlightText>performance</HighlightText> in mind. </p>
                </ParaContent>
            </section>

            <section className='tech-icons w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 px-4 lg:px-8 mt-8 justify-items-center'>
                <IconContainerCard heading='Frontend Technologies' direction='left'>
                    {frontendSkills.map((skill) => (
                        <SkillIcon key={skill.skill} skill={skill.skill} className={skill.className} />
                    ))}
                </IconContainerCard>

                <IconContainerCard heading='Backend & Databases' direction='right'>
                    {backendSkills.map((skill) => (
                        <SkillIcon key={skill.skill} skill={skill.skill} className={skill.className} />
                    ))}
                </IconContainerCard>

                <IconContainerCard heading='Languages' direction='left'>
                    {languages.map((language) => (
                        <SkillIcon key={language.skill} skill={language.skill} className={language.className} />
                    ))}
                </IconContainerCard>

                <IconContainerCard heading='Tools & Platforms' direction='right'>
                    {toolsAndPlatforms.map((tool) => (
                        <SkillIcon key={tool.skill} skill={tool.skill} className={tool.className} />
                    ))}
                </IconContainerCard>
            </section>

            <MyWorkPrinciples />

            <ExploringNext />
        </Container>
    )
}

export default MySkillSet