import React from 'react'
import { ProjectsContainer, ProjectsIntro } from '../components/ProjectPageSections'
import { Container } from '../components'
import { ParaContent } from '../components/HomePageSections'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Projects',
    description: "Explore a showcase of Basir Ahmad's frontend projects built using React, Next.js, and Tailwind CSS. From real-time weather apps to a full-featured blog platform, each project highlights clean code, responsive design, and practical use of modern web technologies.",
    keywords: [
        'Basir Ahmad projects',
        'frontend developer projects',
        'React projects',
        'Next.js portfolio',
        'Tailwind CSS projects',
        'web development portfolio',
        'JavaScript projects',
        'blog app',
        'responsive UI',
        'clean code',
        'GitHub projects',
        'deployed web apps',
        'personal web development work',
        'frontend portfolio'
    ]
}

const Projects: React.FC = () => {
    return (
        <div className='w-full min-h-screen'>
            <ProjectsIntro />
            <ProjectsContainer />
            <Container>
                <ParaContent>
                    <p className='text-gray-300'>
                        More projects are on the way as I continue learning and building. Stay tuned!
                    </p>
                </ParaContent>
            </Container>
        </div>
    )
}

export default Projects