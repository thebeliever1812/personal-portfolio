import React from 'react'
import { MySkillSet } from '../components/SkillPageSections'
import { CTAButton } from '../components'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Skills",
    description: "Explore my skills as a full-stack developer, from frontend with React and Next.js to backend with Node.js, Express, MongoDB, and authentication."
}

const Skills: React.FC = () => {
    return (
        <section className='w-full'>
            <MySkillSet />
            <div className='flex justify-center mb-8'>
                <CTAButton path='/projects'>
                    Go to Projects
                </CTAButton>
            </div>
        </section>
    )
}

export default Skills