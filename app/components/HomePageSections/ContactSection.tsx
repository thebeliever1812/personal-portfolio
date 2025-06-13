import React from 'react'
import {CTAButton, Heading} from '../index'
import {ParaContent} from './index'

const ContactSection: React.FC = () => {
    return (
        <section className='contact-me-section w-full space-y-5 p-3 sm:p-4 rounded-lg'> 
            <Heading>
                OPEN TO OPPORTUNITIES
            </Heading>

            <ParaContent>
                <p>I&apos;m currently open to internships, freelance projects, or full-time roles. Whether you have a question or just want to connect — feel free to reach out!</p>
                <CTAButton path='/contact'>
                    Contact Me
                </CTAButton>
            </ParaContent>
        </section>
    )
}

export default ContactSection