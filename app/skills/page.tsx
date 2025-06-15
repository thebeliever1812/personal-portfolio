import React from 'react'
import { MySkillSet } from '../components/SkillPageSections'
import { CTAButton } from '../components'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Skills",
    description: "Showcasing my frontend skillset, tools, and technologies I've used while building projects with React, Next.js, TypeScript, Tailwind CSS, and more.",
    keywords: [
        'Basir Ahmad',
        'Frontend Skills',
        'React Developer Skills',
        'Next.js Skills',
        'TypeScript Developer',
        'Web Developer Tools',
        'Git and GitHub',
        'Tailwind CSS',
        'Appwrite',
        'Frontend Technologies',
        'JavaScript Developer',
        'Skills Page',
        'Frontend Developer Portfolio',
        'BCA Developer',
        'Web Development Tools'
    ]
}

const Skills: React.FC = () => {
    return (
        <section className='w-full'>
            <MySkillSet />
            <div className='flex justify-center mb-8'>
                <CTAButton path='/projects'>
                    Go to Projects
                </CTAButton>
            </div>
        </section>
    )
}

export default Skills