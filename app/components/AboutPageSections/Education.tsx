import React from 'react'
import { Container, Heading } from '../index'
import { ParaContent } from '../HomePageSections'

const Education: React.FC = () => {
    return (
        <Container>
            <Heading>
                Education & Learning Journey
            </Heading>
            <ParaContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:place-items-center">
                    {/* Education */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">🎓 Education</h3>
                        <p className="text-sm text-gray-400 flex flex-col space-y-1">
                            <span>Bachelor of Computer Applications &#40;BCA&#41;,</span>
                            <span className="text-gray-400 font-medium">Ambedkar DSEU Shakarpur Campus-1, Delhi</span>
                            <span>Completed: 2025</span>
                        </p>
                    </div>

                    {/* Learning Journey */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">📚 Learning Journey</h3>
                        <p className="text-sm text-gray-400 flex flex-col space-y-3">
                            <span className=''>Transitioned from frontend focus to full-stack development with Next.js and the MERN stack.</span>
                            <span>Built end-to-end projects &#40;auth, REST APIs, dashboard, blogging, and integrations&#41;.</span>
                            <span>Completed DSA fundamentals &#40;CodeHelp&#41; and apply them in problem-solving and code reviews.</span>
                            <span>Practice clean architecture, TypeScript, Zod validation, and testing &#40;RTL, Vitest&#41;.</span>
                            <span>Continuously exploring performance, SEO, accessibility, and deployment workflows &#40;Vercel&#41;.</span>
                        </p>
                    </div>
                </div>
            </ParaContent>
        </Container>
    )
}

export default Education