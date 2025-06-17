import React from 'react'
import { Metadata } from 'next'
import { ContactForm, Intro } from '../components/ContactPageSections'

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
        <div className='w-full min-h-screen'>
            <Intro />
            <ContactForm />
        </div>
    )
}

export default Contact