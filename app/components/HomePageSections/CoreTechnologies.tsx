import React from 'react'
import { Heading } from '../index'
import { SkillGroup } from './index'

const CoreTechnologies: React.FC = () => {
    return (
        <section className='core-technologies-section w-full space-y-5 p-3 sm:p-4 rounded-lg'>
            <Heading>
                Core Technologies
            </Heading>

            <SkillGroup />
        </section>
    )
}

export default CoreTechnologies