import React from 'react'
import { Container, Heading, SkillIcon } from '../index'
import { ParaContent } from '../HomePageSections'
import { ExploringNext, IconContainerCard, MyWorkPrinciples } from './index'

interface Skill {
    skill: string;
    className: string;
}

const MySkillSet: React.FC = () => {
    const frontendSkills: Skill[] = [
        { skill: 'html', className: 'text-orange-500' },
        { skill: 'css', className: 'text-blue-500' },
        { skill: 'javascript', className: 'text-yellow-500' },
        { skill: 'react', className: 'text-cyan-500' },
        { skill: 'nextjs', className: 'text-white' },
        { skill: 'tailwind', className: 'text-sky-500' },
        { skill: 'typescript', className: 'text-blue-500' },
        { skill: 'redux', className: 'text-purple-500' },
        { skill: 'bootstrap', className: 'text-[#6706f9]' },
    ];
    const toolsAndPlatforms: Skill[] = [
        { skill: 'git', className: 'text-orange-500' },
        { skill: 'github', className: 'text-white' },
        { skill: 'vscode', className: 'text-blue-500' },
        { skill: 'vercel', className: 'text-white text-xl flex justify-center items-center rounded-full w-10 h-10 bg-black lg:w-12 lg:h-12 lg:text-[25px]' },
        { skill: 'appwrite', className: 'text-rose-500' },
        { skill: 'devtools', className: 'text-white bg-blue-500 p-1 w-10 h-10 rounded-lg text-2xl flex justify-center items-center' },
    ];

    return (
        <Container >
            <section className='flex flex-col items-center justify-center gap-4 px-4 lg:px-8'>
                <Heading>
                    My Skill Set
                </Heading>
                <ParaContent>
                    <p className="text-gray-400 leading-relaxed text-base tracking-wide p-2">
                        Over the past <span className="font-semibold text-white">6+ months</span>, I&apos;ve immersed myself in frontend development,
                        building projects and strengthening my understanding of core technologies.
                        I focus on writing <span className="font-semibold text-white">clean, maintainable code</span> and delivering
                        <span className="font-semibold text-white"> user-friendly interfaces</span>.
                    </p>
                </ParaContent>
            </section>
            <section className='tech-icons w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 px-4 lg:px-8 mt-8 justify-items-center'>
                <IconContainerCard heading='Frontend Technologies'>
                    {frontendSkills.map((skill) => (
                        <SkillIcon key={skill.skill} skill={skill.skill} className={skill.className} />
                    ))}
                </IconContainerCard>

                <IconContainerCard heading='Tools & Platforms'>
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