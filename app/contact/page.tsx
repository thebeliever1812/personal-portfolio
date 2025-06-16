import React from 'react'
import { Container, Heading } from '../components'
import { ParaContent } from '../components/HomePageSections'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Get in touch with Basir Ahmad, a passionate frontend developer from Delhi, India. Reach out via email or phone for collaboration, freelance work, or full-time opportunities.',
    keywords: [
        'Basir Ahmad',
        'contact frontend developer',
        'Delhi frontend developer',
        'hire frontend developer',
        'freelance web developer',
        'frontend developer India',
        'email Basir Ahmad',
        'phone Basir Ahmad'
    ]
}

const Contact: React.FC = () => {
    return (
        <div className='w-full'>
            <Container>
                <Heading>
                    Let&apos;s Connect
                </Heading>
                <ParaContent>
                    <p className='text-gray-400 leading-relaxed tracking-wide'>
                        I'm currently open to full-time frontend developer roles and freelance opportunities. Whether you have a job opening, a collaboration idea, or just want to say hello — I'd love to hear from you.
                    </p>
                </ParaContent>
            </Container>
            <Container>
                <ParaContent>
                    <p className='text-white leading-relaxed tracking-wide'>
                        Email: basirahmadmalik@gmail.com
                    </p>
                    <p className='text-white leading-relaxed tracking-wide'>
                        Phone: +91-7982703595
                    </p>
                </ParaContent>
            </Container>
        </div>
    )
}

export default Contact