import React from 'react'
import { ProjectsContainer, ProjectsIntro } from '../components/ProjectPageSections'
import { Container } from '../components'
import { ParaContent } from '../components/HomePageSections'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Projects',
    description: "Showcasing my full-stack projects built with MERN and Next.js, featuring scalable web apps, modern UI, clean code, and real-world functionality.",
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