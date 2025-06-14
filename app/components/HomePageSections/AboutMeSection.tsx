import React from 'react'
import { CTAButton, Heading, Container } from '../index'
import { ParaContent } from './index'

const AboutMeSection: React.FC = () => {
    return (
        <Container>
            <Heading>
                ABOUT ME
            </Heading>
            <ParaContent>
                <p className='text-gray-200'>I&apos;m Basir Ahmad, a frontend developer with a strong foundation in React, Next.js, and Tailwind CSS. I recently completed my BCA and have built several personal projects, including a full-featured blog app using React and Appwrite. I focus on creating clean, responsive UIs and continuously improving my skills through hands-on development.</p>

                <CTAButton path="/about">
                    Know more
                </CTAButton>
            </ParaContent>
        </Container>
    )
}

export default AboutMeSection