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
                        variants={fadeIn("right", 0, "spring")}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <section className={`name-description p-1 w-full space-y-2  ${rubik.className}`}>
                            <h3 className='text-xl font-semibold text-[#5200cc]'>
                                Whisprr - Full Stack Blog Web App
                            </h3>
                            <p className='text-gray-400'>
                                A full-featured blogging platform built with React, Appwrite, and Tailwind CSS. Includes user authentication, image uploads, protected routes, and dynamic post management with a responsive grid layout.
                            </p>
                        </section>

                        <section className={`tech-stack flex justify-start items-start gap-2 w-full p-1 flex-wrap ${rubik.className}`}>
                            <div className={style.techStyle}>
                                <span>React</span>
                            </div>
                            <div className={style.techStyle}>
                                <span>JavaScript</span>
                            </div>
                            <div className={style.techStyle}>
                                <span>Appwrite&#40;BaaS&#41;</span>
                            </div>
                            <div className={style.techStyle}>
                                <span>Tailwind CSS</span>
                            </div>
                            <div className={style.techStyle}>
                                <span>Redux</span>
                            </div>
                            <div className={style.techStyle}>
                                <span>React Router</span>
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
                        variants={fadeIn("left", 0, "spring")}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <Image
                            src="/whisprr.png"
                            alt="whisprr project screenshot"
                            width={800} // adjust as per actual image size or layout needs
                            height={500} // adjust as per actual image size or layout needs
                            className="w-full h-full object-cover object-center"
                        />
                        <div className='absolute w-2/3 h-full bg-[#5200cc]/80 right-0 top-0 translate-x-[100%] group-hover:translate-x-0 duration-500 p-2 xl:flex gap-2 justify-evenly items-center hidden'>
                            <Button path={'https://whisprr-fawn.vercel.app'}>
                                Live Demo
                            </Button>
                            <Button path={'https://github.com/thebeliever1812/Whisprr---A-blog-web-app'}>
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
                    <Button path={'https://whisprr-fawn.vercel.app'}>
                        Live Demo
                    </Button>
                    <Button path={'https://github.com/thebeliever1812/Whisprr---A-blog-web-app'}>
                        Github Repo
                    </Button>
                </motion.div>

                <ParaContent>
                    <p className='text-gray-400'>I&apos;ve also built several smaller web apps while learning core concepts, such as a weather dashboard, to-do list app, and real-time paste board — each focused on responsive UI and clean code.</p>

                    <CTAButton path='/projects'>
                        See All Projects
                    </CTAButton>
                </ParaContent>
            </section>
        </Container>
    )
}

export default ProjectSpotlight