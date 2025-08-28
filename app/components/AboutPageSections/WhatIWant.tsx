import React from 'react'
import { Heading, CTAButton, Container, HighlightText } from '../index'
import { ParaContent } from '../HomePageSections'

const WhatIWant: React.FC = () => {
    return (
        <Container>
            <Heading>
                WHAT I&apos;M LOOKING FOR
            </Heading>
            <ParaContent>
                <p className="text-gray-400 leading-relaxed tracking-wide">
                    I&apos;m actively seeking a <HighlightText>full-time full-stack developer</HighlightText> role &#40;Next.js + MERN&#41; where I can contribute to real-world products end to end—shipping <HighlightText>clean UI</HighlightText>, <HighlightText>robust APIs</HighlightText>, and <HighlightText>scalable architectures</HighlightText> with strong <HighlightText>performance</HighlightText> and <HighlightText>accessibility</HighlightText> in mind.
                </p>
                <p className="text-gray-400 leading-relaxed tracking-wide">
                    I&apos;m excited to apply my experience with <HighlightText>TypeScript</HighlightText>, <HighlightText>React/Next.js</HighlightText>, <HighlightText>Node.js/Express</HighlightText>, and <HighlightText>MongoDB</HighlightText> in a collaborative environment—and keep growing through code reviews, testing, and continuous delivery.
                </p>
                <CTAButton path='/contact'>
                    Get in Touch
                </CTAButton>
            </ParaContent>
        </Container>
    )
}

export default WhatIWant