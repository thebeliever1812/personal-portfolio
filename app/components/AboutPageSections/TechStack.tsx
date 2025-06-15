import React from 'react'
import { Heading, SkillIcon, CTAButton, Container } from '../index'
import { ParaContent } from '../HomePageSections'

const TechStack: React.FC = () => {
    return (
        <Container>
            <Heading>
                MY TECH STACK
            </Heading>
            <ParaContent>
                <p className='text-gray-400'>
                    I work primarily with modern frontend technologies that help me build fast, maintainable, and scalable web applications.
                </p>
            </ParaContent>
            <ParaContent>
                <h3 className='text-lg font-semibold'>
                    My core tech stack includes:
                </h3>
                <section className='grid grid-cols-2 md:grid-cols-3 gap-5'>
                    <SkillIcon skill='javascript' className='text-yellow-400' />
                    <SkillIcon skill='typescript' className='text-blue-500' />
                    <SkillIcon skill='react' className='text-cyan-500' />
                    <SkillIcon skill='nextjs' className='text-white' />
                    <SkillIcon skill='tailwind' className='text-sky-500' />
                    <SkillIcon skill='github' className='text-white' />
                    <SkillIcon skill='redux' className='text-violet-700' />
                    <SkillIcon skill='appwrite' className='text-rose-500' />
                </section>
                <CTAButton path='/skills'>
                    See All Skills
                </CTAButton>
            </ParaContent>
        </Container>
    )
}

export default TechStack