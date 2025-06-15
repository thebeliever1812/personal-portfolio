import React from 'react'
import { Container, CTAButton, Heading } from '../index'
import { ParaContent, SkillGroup } from './index'

const CoreTechnologies: React.FC = () => {
    return (
        <Container>
            <section className='px-6 md:px-10 w-full space-y-6 text-center border rounded-lg py-8  border-gray-700 shadow-[0_0_20px_0_#290066]'>
                <Heading>
                    CORE TECHNOLOGIES
                </Heading>

                <ParaContent>
                    <SkillGroup />

                    <CTAButton path='/skills'>
                        See All Skills
                    </CTAButton>
                </ParaContent>
            </section>
        </Container>
    )
}

export default CoreTechnologies