import React from 'react'
import { Container, Heading } from '../index'
import { ParaContent } from '../HomePageSections'

const WhoIAm: React.FC = () => {
    return (
        <Container>
            <Heading>
                WHO I AM
            </Heading>

            <ParaContent>
                <p className="text-gray-400 leading-relaxed tracking-wide">
                    Hi, I&apos;m <span className="font-semibold text-white">Basir Ahmad</span>, a passionate frontend developer based in <span className="text-blue-600 font-medium">Delhi, India</span>, recently completed my <span className="font-medium text-white">Bachelor of Computer Applications (BCA)</span>. I enjoy building responsive and user-friendly web applications that solve real problems and deliver clean user experiences.
                </p>
                <p className="text-gray-400 leading-relaxed tracking-wide">
                    My focus is on writing <span className="text-blue-600 font-medium">clean, efficient code</span> and developing interfaces that not only look good but also feel intuitive to use. Over the past few months, I&apos;ve built several frontend projects, including a <span className="italic font-medium text-blue-600">full-fledged blog app</span>, and continuously aim to refine both my technical and design sense.
                </p>
            </ParaContent>
        </Container>
    )
}

export default WhoIAm