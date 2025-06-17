import React from 'react'
import { Container, Heading } from '../index'
import { ParaContent } from '../HomePageSections'

const Intro: React.FC = () => {
    return (
        <Container>
            <Heading>
                Let&apos;s Connect
            </Heading>
            <ParaContent>
                <p className='text-gray-400 leading-relaxed tracking-wide'>
                    I&apos;m currently open to <span className='text-blue-600'>full-time frontend developer</span> roles and <span className='text-blue-600'>freelance opportunities</span>. Whether you have a job opening, a collaboration idea, or just want to say hello — I&apos;d love to hear from you.
                </p>
            </ParaContent>
        </Container>
    )
}

export default Intro