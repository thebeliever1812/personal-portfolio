import React from 'react'
import {Heading, Button , CTAButton} from '../index'
import style from './ProjectSpotlight.module.css'
import {ParaContent} from './index'

const ProjectSpotlight: React.FC = () => {
    return (
        <section className='project-spotlight-section w-full space-y-5 p-3 sm:p-4 rounded-lg'>
            <Heading>
                PROJECT SPOTLIGHT
            </Heading>
            <div className='flex flex-col justify-center items-center xl:flex-row xl:items-center xl:justify-center'>
                <div className='bg-black w-full lg:min-w-[400px] max-w-2xl p-3 md:p-4 rounded-lg border-2 border-dotted border-[#5200cc] hover:scale-103 duration-500 hover:shadow-[0_0_20px_1px_#5200cc] space-y-2 md:space-y-0 flex md:gap-5 flex-col md:flex-row md:items-start'>
                    <section className='name-description p-1 w-full space-y-2 '>
                        <h3 className='text-xl font-semibold text-[#5200cc]'>
                            Whisprr - Full Stack Blog Web App
                        </h3>
                        <p>
                            A full-featured blogging platform built with React, Appwrite, and Tailwind CSS. Includes user authentication, image uploads, protected routes, and dynamic post management with a responsive grid layout.
                        </p>
                    </section>

                    <section className='tech-stack flex justify-start items-start gap-2 w-full p-1 flex-wrap '>
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
                </div>

                <div className='border xl:w-full xl:max-w-10 xl:h-0.5 h-8'></div>

                <div className='bg-white lg:min-w-xl md:h-96 p-1 rounded-lg border-2 border-dotted border-[#5200cc] hover:scale-103 duration-500 hover:shadow-[0_0_20px_1px_#5200cc] overflow-hidden relative group'>
                    <img src="whisprr.png" alt="whisprr-project-screenshot" className='w-full h-full object-cover object-center rounded-lg' />
                    <div className='absolute w-2/3 h-full bg-[#5200cc]/80 right-0 top-0 translate-x-[100%] group-hover:translate-x-0 duration-500 p-2 xl:flex gap-2 justify-evenly items-center hidden'>
                        <Button path={'https://whisprr-fawn.vercel.app'}>
                            Live Demo
                        </Button>
                        <Button path={'https://github.com/thebeliever1812/Whisprr---A-blog-web-app'}>
                            Github Repo
                        </Button>
                    </div>
                </div>
            </div>

            <div className='w-full flex gap-2 sm:gap-3 md:gap-4 lg:gap-5 justify-center xl:hidden'>
                <Button path={'https://whisprr-fawn.vercel.app'}>
                    Live Demo
                </Button>
                <Button path={'https://github.com/thebeliever1812/Whisprr---A-blog-web-app'}>
                    Github Repo
                </Button>
            </div>

            <ParaContent>
                <p>I&apos;ve also built several smaller web apps while learning core concepts, such as a weather dashboard, to-do list app, and real-time paste board — each focused on responsive UI and clean code.</p>

                <CTAButton path='/projects'>
                    See All Projects
                </CTAButton>
            </ParaContent>

        </section>
    )
}

export default ProjectSpotlight