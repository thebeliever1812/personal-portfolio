import React from 'react'
import { Container, Heading, HighlightText } from '../index'
import { ParaContent } from '../HomePageSections'

const ProjectsIntro: React.FC = () => {
    return (
        <Container>
            <Heading>
                Projects
            </Heading>
            <ParaContent>
                <p className="text-gray-400 leading-relaxed tracking-wide"> This collection includes <HighlightText>frontend</HighlightText>, <HighlightText>backend</HighlightText>, and <HighlightText>full-stack</HighlightText> projects. Each showcases <HighlightText>clean code</HighlightText>, <HighlightText>responsive UI</HighlightText>, and <HighlightText>robust APIs</HighlightText>—built with <HighlightText>React</HighlightText>, <HighlightText>Next.js</HighlightText>, <HighlightText>Tailwind CSS</HighlightText>, <HighlightText>Node.js</HighlightText>, and <HighlightText>MongoDB</HighlightText>, with a focus on <HighlightText>performance</HighlightText> and <HighlightText>accessibility</HighlightText>. </p>
            </ParaContent>
        </Container>
    )
}

export default ProjectsIntro