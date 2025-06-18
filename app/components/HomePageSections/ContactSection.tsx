import React from 'react'
import { Container, CTAButton, Heading } from '../index'
import { ParaContent } from './index'

const ContactSection: React.FC = () => {
    return (
        <Container>
            <section className="px-6 md:px-10 w-full space-y-6 text-center">
                <Heading>
                    OPEN TO OPPORTUNITIES
                </Heading>

                <ParaContent>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        I&apos;m currently open to <span className="text-white">full-time opportunities</span> as a <span className="text-blue-600 font-semibold">Frontend Developer</span>, where I can contribute to building modern, responsive, and engaging user interfaces.
                    </p>

                    <p className="text-gray-400 text-lg leading-relaxed">
                        Whether you have a question, a project in mind, or simply want to connect — <span className="text-white">feel free to reach out</span>. I&apos;d love to hear from you!
                    </p>

                    <div className="pt-4">
                        <CTAButton path="/contact">
                            Contact Me
                        </CTAButton>
                    </div>
                </ParaContent>
            </section>

        </Container>
    )
}

export default ContactSection