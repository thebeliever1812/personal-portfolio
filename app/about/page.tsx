import React from 'react'
import { CTAButton, Heading, SkillIcon } from '../components'
import { ParaContent } from '../components/HomePageSections'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Me',
    description: 'Learn more about Basir Ahmad, discover the frontend technologies he works with, and explore his journey in web development.',
    keywords: 'Basir Ahmad, frontend developer, web development, about me'
}

const About: React.FC = () => {
    return (
        <section className='w-full max-w-6xl mx-auto px-4 md:px-8 py-8 space-y-5 min-h-screen flex flex-col justify-start items-center'>
            <section className="about-me w-full space-y-6 p-6 md:p-10">
                <Heading>
                    ABOUT ME
                </Heading>

                <ParaContent>
                    <p className="text-gray-400 leading-relaxed tracking-wide">
                        Hi, I'm <span className="font-semibold text-white">Basir Ahmad</span>, a passionate frontend developer based in <span className="text-blue-600 font-medium">Delhi, India</span>, recently completed my <span className="font-medium text-white">Bachelor of Computer Applications (BCA)</span>. I enjoy building responsive and user-friendly web applications that solve real problems and deliver clean user experiences.
                    </p>
                    <p className="text-gray-400 leading-relaxed tracking-wide">
                        My focus is on writing <span className="text-blue-600 font-medium">clean, efficient code</span> and developing interfaces that not only look good but also feel intuitive to use. Over the past few months, I've built several frontend projects, including a <span className="italic font-medium text-blue-600">full-fledged blog app</span>, and continuously aim to refine both my technical and design sense.
                    </p>
                </ParaContent>
            </section>

            <section className="what-i-do w-full space-y-6 p-6 md:p-10">
                <Heading>
                    WHAT I DO
                </Heading>

                <ParaContent>
                    <p className="text-gray-400 text-base leading-relaxed">
                        I design and develop <span className="font-medium text-blue-600">responsive</span>, <span className="font-medium text-blue-600">accessible</span>, and <span className="font-medium text-blue-600">user-focused</span> web interfaces using modern frontend technologies.
                        My goal isn&apos;t just to make things work — it's to make them work <span className="italic text-white">beautifully</span> and <span className="italic text-white">efficiently</span>.
                    </p>

                    <div className="mt-4">
                        <span className="block text-sm font-semibold text-gray-400 mb-2">I pay close attention to:</span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-none text-sm text-gray-400 sm:justify-items-center">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600">✔</span> UI/UX details for a seamless user experience
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600">✔</span> Writing clean, maintainable, scalable code
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600">✔</span> Optimizing performance and load speed
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600">✔</span> Mobile-first design for all screen sizes
                            </li>
                        </ul>
                    </div>
                </ParaContent>
            </section>

            <section className='tech-stack space-y-6 w-full p-6 md:p-10'>
                <Heading>
                    MY TECH STACK
                </Heading>
                <ParaContent>
                    <p className='text-gray-400'>
                        I work primarily with modern frontend technologies that help me build fast, maintainable, and scalable web applications.
                    </p>
                </ParaContent>
                <ParaContent>
                    <h3 className='text-lg font-semibold'>
                        My core tech stack includes:
                    </h3>
                    <section className='grid grid-cols-2 md:grid-cols-3 gap-5'>
                        <SkillIcon skill='javascript' className='text-yellow-400' />
                        <SkillIcon skill='typescript' className='text-blue-500' />
                        <SkillIcon skill='react' className='text-cyan-500' />
                        <SkillIcon skill='nextjs' className='text-white' />
                        <SkillIcon skill='tailwind' className='text-sky-500' />
                        <SkillIcon skill='github' className='text-gray-600' />
                        <SkillIcon skill='redux' className='text-violet-700' />
                        <SkillIcon skill='appwrite' className='text-rose-500' />
                    </section>
                    <CTAButton path='/skills'>
                        See All Skills
                    </CTAButton>
                </ParaContent>
            </section>

            <section className='education space-y-6 w-full p-6 md:p-10'>
                <Heading>
                    Education & Learning Journey
                </Heading>
                <ParaContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Education */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">🎓 Education</h3>
                            <p className="text-sm text-gray-400 flex flex-col space-y-1">
                                <span>Bachelor of Computer Applications (BCA)</span>
                                <span className="text-gray-400 font-medium">Ambedkar Institute of Technology, Delhi</span>
                                <span>Completed: 2025</span>
                            </p>
                        </div>

                        {/* Learning Journey */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">📚 Learning Journey</h3>
                            <p className="text-sm text-gray-400 flex flex-col space-y-1">
                                <span>Focused on frontend development for the past 6+ months.</span>
                                <span>Built projects like a full-featured blog app.</span>
                                <span>Completed DSA course from CodeHelp.</span>
                                <span>Regularly explore React, Tailwind, APIs, and more.</span>
                            </p>
                        </div>
                    </div>

                </ParaContent>
            </section>

            <section className="what-sets-me-apart w-full space-y-6 p-6 md:p-10">
                <Heading>
                    WHAT SETS ME APART
                </Heading>

                <ParaContent>
                    <p className="text-gray-400 leading-relaxed tracking-wide">
                        I bring a strong sense of <span className="font-medium text-blue-600">visual detail</span> and a mindset focused on <span className="font-medium text-blue-600">problem-solving</span> and <span className="font-medium text-blue-600">continuous learning</span>. I treat every project as a real product—ensuring usability, performance, and maintainability.
                    </p>
                    <p className="text-gray-400 leading-relaxed tracking-wide">
                        Even without industry experience, I&apos;ve dedicated the last 6+ months to learning by building <span className="font-medium text-blue-600">realistic frontend projects</span> and developing a <span className="font-medium text-blue-600">professional workflow</span>. My goal is always to deliver <span className="font-semibold text-white">clean code</span>, <span className="font-semibold text-white">thoughtful UI/UX</span>, and a <span className="font-semibold text-white">positive user experience</span>.
                    </p>
                </ParaContent>
            </section>

            <section className="what-i-want w-full space-y-6 p-6 md:p-10">
                <Heading>
                    WHAT I'M LOOKING FOR
                </Heading>

                <ParaContent>
                    <p className="text-gray-400 leading-relaxed tracking-wide">
                        I&apos;m actively seeking a <span className="font-semibold text-blue-600">full-time frontend developer role</span> where I can contribute to real-world products, grow as a developer, and work alongside a team that values <span className="font-medium text-white">clean UI, performance, and good design practices</span>.
                    </p>
                    <p className="text-gray-400 leading-relaxed tracking-wide">
                        I'm excited to apply the skills I've built so far in a professional setting and continue improving through hands-on experience and collaboration.
                    </p>
                    <CTAButton path='/contact'>
                        Get in Touch
                    </CTAButton>
                </ParaContent>

            </section>

        </section >
    )
}

export default About