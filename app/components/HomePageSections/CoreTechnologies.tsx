import React from 'react'
import { Container, CTAButton, Heading } from '../index'
import { ParaContent, SkillGroup } from './index'
import fadeIn from '../../variants/variants'
import * as motion from 'motion/react-client'

const CoreTechnologies: React.FC = () => {
    return (
        <Container>
            <motion.section
                className='px-6 md:px-10 w-full space-y-6 text-center border rounded-lg py-8  border-gray-700 shadow-[0_0_20px_0_#290066]'
                variants={fadeIn()}
                initial={
                    { opacity: 0 }
                }
                whileInView='view'
                viewport={{ once: true, amount: 0.3 }}
            >
                <Heading>
                    CORE TECHNOLOGIES
                </Heading>

                <ParaContent>
                    <SkillGroup />

                    <CTAButton path='/skills'>
                        See All Skills
                    </CTAButton>
                </ParaContent>
            </motion.section>
        </Container>
    )
}

export default CoreTechnologies