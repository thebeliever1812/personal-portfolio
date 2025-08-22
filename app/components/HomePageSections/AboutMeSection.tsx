import React from 'react'
import { CTAButton, Heading, Container, HighlightText } from '../index'
import { ParaContent } from './index'

const AboutMeSection: React.FC = () => {
    return (
        <Container>
            <section className="px-6 py-10 md:py-14 md:px-10 w-full space-y-6">
                <Heading>
                    ABOUT ME
                </Heading>

                <ParaContent>
                    <p className='text-gray-400 leading-relaxed tracking-wide'>
                        I&apos;m <HighlightText>Basir Ahmad</HighlightText>, a <HighlightText>full-stack developer</HighlightText> with hands-on experience in the <HighlightText>MERN stack</HighlightText> and <HighlightText>Next.js</HighlightText>. I specialize in building performant, SEO-friendly applications with clean architecture, TypeScript/JavaScript, and responsive UI using <HighlightText>Tailwind CSS</HighlightText> and <HighlightText>Bootstrap</HighlightText>. I also work with <HighlightText>NextAuth.js</HighlightText> for authentication, <HighlightText>Zod</HighlightText> for schema validation, and <HighlightText>Git/GitHub</HighlightText> for version control.
                    </p>

                    <div className="pt-4">
                        <CTAButton path="/about">
                            Know more
                        </CTAButton>
                    </div>
                </ParaContent>
            </section>

        </Container>
    )
}

export default AboutMeSection