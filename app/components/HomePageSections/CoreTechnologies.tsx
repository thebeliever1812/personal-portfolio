import React from 'react'
import { CTAButton, Heading } from '../index'
import { ParaContent, SkillGroup } from './index'

const CoreTechnologies: React.FC = () => {
    return (
        <section className='core-technologies-section w-full space-y-5 p-3 sm:p-4 rounded-lg'>
            <Heading>
                CORE TECHNOLOGIES
            </Heading>

            <SkillGroup />

            <ParaContent>
                <CTAButton path='/skills'>
                    See All Skills
                </CTAButton>
            </ParaContent>
        </section>
    )
}

export default CoreTechnologies