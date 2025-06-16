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
                    <p className="text-gray-400 leading-relaxed ">
                        I&apos;m currently looking for <span className="font-semibold text-blue-600">full-time frontend developer</span> roles or <span className="font-semibold text-blue-600">freelance projects</span>. Whether you have a question or just want to connect — feel free to reach out!
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