import React from 'react'
import { Heading, Button, CTAButton, Container } from '../index'
import style from './ProjectSpotlight.module.css'
import { ParaContent } from './index'
import { Rubik } from 'next/font/google'
import Image from 'next/image'
import fadeIn from '../../variants/variants'
import * as motion from 'motion/react-client'

const rubik = Rubik({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-rubik',
})

const ProjectSpotlight: React.FC = () => {
    return (
        <Container>
            <section className='space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-8 flex flex-col justify-center items-center w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-10'>
                <Heading>
                    PROJECT SPOTLIGHT
                </Heading>

                <div className='flex flex-col justify-center items-center'>
                    <motion.div
                        className='bg-black w-full lg:min-w-[400px] max-w-2xl p-3 md:p-4 rounded-lg border-2 border-dotted border-[#5200cc] hover:scale-103 duration-500 hover:shadow-[0_0_20px_1px_#5200cc] space-y-2 md:space-y-0 flex md:gap-5 flex-col md:flex-row md:items-start'
                        variants={fadeIn("down", 0, "tween")}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <section className={`name-description p-1 w-full space-y-2  ${rubik.className}`}>
                            <h3 className='text-xl font-semibold text-[#AE7AFF]'>
                                Ghost Message - Secure Anonymous Messaging Platform
                            </h3>
                            <p className='text-gray-400'>
                                Ghost Message is a secure, anonymous messaging platform that allows users to send and receive any type of messages without revealing their identity. It offers a clean, modern UI, AI-powered message suggestions, and a smooth authentication flow — all built using a full-stack Next.js approach.
                            </p>
                        </section>

                        <section className={`tech-stack flex justify-start items-start gap-2 w-full p-1 flex-wrap ${rubik.className}`}>
                            <div className={style.techStyle}>
                                <span>React</span>
                            </div>
                            <div className={style.techStyle}>
                                <span>Next.js</span>
                            </div>
                            <div className={style.techStyle}>
                                <span>Tailwind CSS</span>
                            </div>
                            <div className={style.techStyle}>
                                <span>Node.js &#40;via Next.js API routes&#41;</span>
                            </div>
                            <div className={style.techStyle}>
                                <span>Shadcn UI</span>
                            </div>
                            <div className={style.techStyle}>
                                <span>MongoDB</span>
                            </div>
                            <div className={style.techStyle}>
                                <span>NextAuth.js</span>
                            </div>
                            <div className={style.techStyle}>
                                <span>Gemini AI API</span>
                            </div>
                            <div className={style.techStyle}>
                                <span>Zod</span>
                            </div>
                            <div className={style.techStyle}>
                                <span>React Hook Form</span>
                            </div>
                        </section>
                    </motion.div>

                    <motion.div
                        className='border h-8'
                        variants={fadeIn("down", 0, "tween")}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 1 }}
                    ></motion.div>

                    <motion.div
                        className={`bg-white w-full max-w-2xl p-1 rounded-lg border-2 border-dotted border-[#5200cc] hover:scale-103 duration-500 hover:shadow-[0_0_20px_1px_#5200cc] overflow-hidden relative group ${rubik.className}`}
                        variants={fadeIn("down", 0, "tween")}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <Image
                            src="/ghost_message.png"
                            alt="whisprr project screenshot"
                            width={800} // adjust as per actual image size or layout needs
                            height={500} // adjust as per actual image size or layout needs
                            className="w-full h-full object-cover object-center"
                        />
                        <div className='absolute w-2/3 h-full bg-[#5200cc]/80 right-0 top-0 translate-x-[100%] group-hover:translate-x-0 duration-500 p-2 xl:flex gap-2 justify-evenly items-center hidden'>
                            <Button path={'https://ghost-message-eta.vercel.app'}>
                                Live Demo
                            </Button>
                            <Button path={'https://github.com/thebeliever1812/ghost-message'}>
                                Github Repo
                            </Button>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className={`w-full flex gap-2 sm:gap-3 md:gap-4 lg:gap-5 justify-center xl:hidden ${rubik.className}`}
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <Button path={'https://ghost-message-eta.vercel.app'}>
                        Live Demo
                    </Button>
                    <Button path={'https://github.com/thebeliever1812/ghost-message'}>
                        Github Repo
                    </Button>
                </motion.div>

                <ParaContent>
                    <p className='text-gray-400'>I&apos;ve also builed more web apps while learning core concepts, such as a Whisprr - A full stack web app, weather dashboard, to-do list app, and real-time paste board — each focused on responsive UI and clean code.</p>
                    <CTAButton path='/projects'>
                        See All Projects
                    </CTAButton>
                </ParaContent>
            </section>
        </Container>
    )
}

export default ProjectSpotlight