import React from 'react'
import { Container, CTAButton, Heading } from '../index'
import { ParaContent, SkillGroup } from './index'

const CoreTechnologies: React.FC = () => {
    return (
        <Container>
            <Heading>
                CORE TECHNOLOGIES
            </Heading>

            <ParaContent>
                <SkillGroup />

                <CTAButton path='/skills'>
                    See All Skills
                </CTAButton>
            </ParaContent>

        </Container>
    )
}

export default CoreTechnologies