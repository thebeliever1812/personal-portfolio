import React from 'react'
import { Heading, SkillIcon, CTAButton, Container } from '../index'
import { ParaContent } from '../HomePageSections'

interface Skills {
    skill: string;
    className?: string;
}

const TechStack: React.FC = () => {
    const skills: Skills[] = [
        { skill: 'JavaScript', className: 'text-yellow-400' },
        { skill: 'TypeScript', className: 'text-blue-500' },
        { skill: 'React', className: 'text-cyan-500' },
        { skill: 'Nextjs', className: 'text-white' },
        { skill: 'Tailwind', className: 'text-sky-500' },
        { skill: 'Express', className: 'text-white' },
        { skill: 'MongoDB', className: 'text-green-600' },
        { skill: 'Nodejs', className: 'text-green-500' }
    ]
    return (
        <Container>
            <Heading>
                MY TECH STACK
            </Heading>
            <ParaContent>
                <p className='text-gray-400'>
                    I work across the full stack with Next.js and the MERN ecosystem—leveraging TypeScript, React, Node.js, Express, MongoDB, and Tailwind CSS—to build performant, maintainable, and scalable web applications with responsive UIs and robust APIs.
                </p>
            </ParaContent>
            <ParaContent>
                <h3 className='text-lg font-semibold'>
                    My core tech stack includes:
                </h3>
                <section>
                    <ul className='grid grid-cols-2 md:grid-cols-3 gap-8 px-5'>
                        {
                            skills.map((skill, index) => (
                                <li key={index}>
                                    <SkillIcon skill={skill.skill} className={skill.className} />
                                </li>
                            ))
                        }
                    </ul>
                </section>
                <CTAButton path='/skills'>
                    View All Skills
                </CTAButton>
            </ParaContent>
        </Container>
    )
}

export default TechStack