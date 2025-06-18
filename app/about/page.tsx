import React from 'react'
import { Metadata } from 'next'
import { WhoIAm, WhatIDo, TechStack, Education, WhatSetsMeApart, WhatIWant } from '../components/AboutPageSections'

export const metadata: Metadata = {
    title: 'About Me',
    description: 'Learn more about Basir Ahmad, discover the frontend technologies he works with, and explore his journey in web development.',
    keywords: [
        'Basir Ahmad',
        'About Basir Ahmad',
        'Frontend Developer Bio',
        'Web Developer Introduction',
        'React Developer from Delhi',
        'BCA Graduate Developer',
        'Self-taught Frontend Developer',
        'Portfolio About Page',
        'Web Development Journey',
        'Basir Ahmad Developer Journey',
        'Frontend Developer from India',
        'Learning Frontend Development',
        'CodeHelp DSA Certified',
        'Junior Frontend Developer',
        'Beginner Web Developer Story'
    ]
}

const About: React.FC = () => {
    return (
        <section className='w-full max-w-6xl mx-auto px-4 md:px-8 py-8 space-y-5 min-h-screen flex flex-col justify-start items-center'>
            {/* About me component*/}
            <WhoIAm />

            {/* What i do component*/}
            <WhatIDo />

            {/* Tech Stack component*/}
            <TechStack />

            {/* Education & Learning Journey component*/}
            <Education />

            {/* What sets me apart component*/}
            <WhatSetsMeApart />

            {/* What i want component*/}
            <WhatIWant />

        </section >
    )
}

export default About