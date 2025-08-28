import React from 'react'
import { Metadata } from 'next'
import { WhoIAm, WhatIDo, TechStack, Education, WhatSetsMeApart, WhatIWant } from '../components/AboutPageSections'

export const metadata: Metadata = {
    title: 'About Me',
    description: "I'm Basir Ahmad, a full-stack developer skilled in MERN and Next.js, passionate about building scalable apps, clean architecture, and modern UI.",
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