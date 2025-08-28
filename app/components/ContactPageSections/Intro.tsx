import React from 'react'
import { Container, Heading, HighlightText } from '../index'
import { ParaContent } from '../HomePageSections'

const Intro: React.FC = () => {
    return (
        <Container>
            <Heading>
                Let&apos;s Connect
            </Heading>
            <ParaContent>
                <p className="text-gray-400 leading-relaxed tracking-wide"> Open to <HighlightText>full-time full-stack roles</HighlightText> &#40;Next.js + MERN&#41; and selective <HighlightText>freelance collaborations</HighlightText>. Whether it&apos;s a product opportunity, a project brief, or a quick question—feel free to reach out. Happy to chat about <HighlightText>clean UI</HighlightText>, <HighlightText>robust APIs</HighlightText>, and <HighlightText>scalable architectures</HighlightText>. </p>
            </ParaContent>
        </Container>
    )
}

export default Intro