import React from 'react'
import { Container, CTAButton, Heading } from '../index'
import { ParaContent, SkillGroup } from './index'

const CoreTechnologies: React.FC = () => {
    return (
        <Container>
            <section className='px-6 md:px-10 w-full space-y-6 text-center'>
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