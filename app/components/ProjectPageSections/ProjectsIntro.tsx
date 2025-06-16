import React from 'react'
import { Container, Heading } from '../index'
import { ParaContent } from '../HomePageSections'

const ProjectsIntro: React.FC = () => {
    return (
        <Container>
            <Heading>
                Projects
            </Heading>
            <ParaContent>
                <p className="text-gray-400 leading-relaxed tracking-wide">
                    Here are a few <span className="font-semibold text-white">projects</span> I&apos;ve built to strengthen my frontend development skills. Each one reflects my focus on
                    <span className="font-semibold text-blue-600"> writing clean</span>,
                    <span className="font-semibold text-blue-600"> responsive UIs</span>, and
                    learning to work with real-world tools like
                    <span className="font-medium text-white"> React</span>,
                    <span className="font-medium text-white"> Next.js</span>, and
                    <span className="font-medium text-white"> Tailwind CSS</span>.
                </p>
            </ParaContent>
        </Container>
    )
}

export default ProjectsIntro