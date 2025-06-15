import React from 'react'
import { Heading, CTAButton, Container } from '../index'
import { ParaContent } from '../HomePageSections'

const WhatIWant: React.FC = () => {
    return (
        <Container>
            <Heading>
                WHAT I'M LOOKING FOR
            </Heading>
            <ParaContent>
                <p className="text-gray-400 leading-relaxed tracking-wide">
                    I&apos;m actively seeking a <span className="font-semibold text-blue-600">full-time frontend developer role</span> where I can contribute to real-world products, grow as a developer, and work alongside a team that values <span className="font-medium text-white">clean UI, performance, and good design practices</span>.
                </p>
                <p className="text-gray-400 leading-relaxed tracking-wide">
                    I'm excited to apply the skills I've built so far in a professional setting and continue improving through hands-on experience and collaboration.
                </p>
                <CTAButton path='/contact'>
                    Get in Touch
                </CTAButton>
            </ParaContent>
        </Container>
    )
}

export default WhatIWant