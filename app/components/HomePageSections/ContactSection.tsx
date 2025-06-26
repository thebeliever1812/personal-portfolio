import React from 'react'
import { Container, CTAButton, Heading } from '../index'
import { ParaContent } from './index'
import fadeIn from '../../variants/variants'
import * as motion from 'motion/react-client'

const ContactSection: React.FC = () => {
    return (
        <Container>
            <section className="px-6 md:px-10 w-full space-y-6 text-center">
                <motion.div
                    variants={fadeIn("down")}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <Heading>
                        OPEN TO OPPORTUNITIES
                    </Heading>
                </motion.div>

                <motion.div
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <ParaContent>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            I&apos;m currently open to <span className="text-white">full-time opportunities</span> as a <span className="text-blue-600 font-semibold">Frontend Developer</span>, where I can contribute to building modern, responsive, and engaging user interfaces.
                        </p>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            Whether you have a question, a project in mind, or simply want to connect — <span className="text-white">feel free to reach out</span>. I&apos;d love to hear from you!
                        </p>

                        <div className="pt-4">
                            <CTAButton path="/contact">
                                Contact Me
                            </CTAButton>
                        </div>
                    </ParaContent>
                </motion.div>
            </section>
        </Container>
    )
}

export default ContactSection