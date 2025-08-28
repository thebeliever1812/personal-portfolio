import React from 'react'
import { Metadata } from 'next'
import { ContactForm, Intro, ShareButtons } from '../components/ContactPageSections'

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Contact Basir Ahmad, full-stack developer skilled in MERN and Next.js. Open to freelance projects, collaborations, and exciting opportunities.',
}

const Contact: React.FC = () => {
    return (
        <div className='w-full min-h-screen'>
            <Intro />
            <ContactForm />
            <ShareButtons />
        </div>
    )
}

export default Contact