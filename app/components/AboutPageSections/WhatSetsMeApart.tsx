import React from 'react'
import { Container, Heading, HighlightText } from '../index'
import { ParaContent } from '../HomePageSections'

const WhatSetsMeApart: React.FC = () => {
    return (
        <Container>
            <Heading>
                WHAT SETS ME APART
            </Heading>

            <ParaContent>
                <p className="text-gray-400 leading-relaxed tracking-wide">
                    I bring a strong sense of <HighlightText>visual detail</HighlightText> and a mindset centered on <HighlightText>problem-solving</HighlightText>, <HighlightText>clean architecture</HighlightText>, and <HighlightText>continuous learning</HighlightText>. I treat every project like a real product—ensuring <HighlightText>usability</HighlightText>, <HighlightText>performance</HighlightText>, and <HighlightText>maintainability</HighlightText> across the stack.
                </p>
                <p className="text-gray-400 leading-relaxed tracking-wide">
                    Recently, I&apos;ve evolved from a frontend focus to building <HighlightText>full-stack</HighlightText> solutions with <HighlightText>Next.js</HighlightText> and the <HighlightText>MERN stack</HighlightText>—shipping features end to end with <HighlightText>RESTful APIs</HighlightText>, <HighlightText>authentication</HighlightText>, and <HighlightText>robust data models</HighlightText>. My goal is to deliver <HighlightText>clean code</HighlightText>, <HighlightText>thoughtful UI/UX</HighlightText>, and a <HighlightText>positive, reliable user experience</HighlightText>.
                </p>
            </ParaContent>
        </Container>
    )
}

export default WhatSetsMeApart