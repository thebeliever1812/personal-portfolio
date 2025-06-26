import React from 'react'
import { CTAButton, Heading, Container } from '../index'
import { ParaContent } from './index'
import fadeIn from '../../variants/variants'
import * as motion from 'motion/react-client'

const AboutMeSection: React.FC = () => {
    return (
        <Container>
            <section className="px-6 py-10 md:py-14 md:px-10 w-full space-y-6">
                <Heading>
                    ABOUT ME
                </Heading>

                <ParaContent>
                    <p className="text-gray-400 leading-relaxed tracking-wide">
                        I&apos;m <span className="font-semibold text-blue-600">Basir Ahmad</span>, a frontend developer with a strong foundation in <span className="font-medium text-white">React, Next.js,</span> and <span className="font-medium text-white">Tailwind CSS</span>. I recently completed my <span className="font-medium text-white">BCA</span> and have built several personal projects, including a full-featured blog app using React and Appwrite. I focus on creating clean, responsive UIs and continuously improving my skills through hands-on development.
                    </p>

                    <div className="pt-4">
                        <CTAButton path="/about">
                            Know more
                        </CTAButton>
                    </div>
                </ParaContent>
            </section>

        </Container>
    )
}

export default AboutMeSection