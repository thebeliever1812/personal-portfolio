import React from 'react'
import { Container, CTAButton, Heading } from '../index'
import { ParaContent } from './index'

const ContactSection: React.FC = () => {
    return (
        <Container>
            <Heading>
                OPEN TO OPPORTUNITIES
            </Heading>

            <ParaContent>
                <p>I'm currently looking for full-time frontend developer roles or freelance projects. Whether you have a question or just want to connect — feel free to reach out!</p>
                <CTAButton path='/contact'>
                    Contact Me
                </CTAButton>
            </ParaContent>
        </Container>
    )
}

export default ContactSection