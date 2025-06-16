import React from 'react'
import { Container } from '../index'
import { ProjectCard } from './index'

const ProjectsContainer: React.FC = () => {
    return (
        <Container>
            <section className='w-full p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5'>
                <ProjectCard
                    title='Whisprr'
                    description='Built a responsive blogging application using React, Appwrite, Tailwind CSS, and JavaScript. Implemented user authentication, CRUD operations, image uploads, secure API integration, protected routes, and a dynamic grid layout for displaying posts.'
                    imageUrl='/whisprr.png'
                    liveLink='https://whisprr-fawn.vercel.app' githubLink='https://github.com/thebeliever1812/Whisprr---A-blog-web-app'
                    techStack={['React', "JavaScript", "Tailwind CSS", "Appwrite"]}
                    imageAltText='Screenshot provided of Whisprr&apos;s home page'
                />
                <ProjectCard
                    title='Quick Paste'
                    description='Developed a user-friendly web app for creating, storing, and organizing text snippets withlocal storage for data persistence. Implemented CRUD operations, instant sharing via generated links, and a responsive UI optimized for fast performance and seamless usability.'
                    imageUrl='/quick_paste.png'
                    liveLink='https://quick-paste-gilt.vercel.app' githubLink='https://github.com/thebeliever1812/Paste-Web-App'
                    techStack={['React', "Tailwind CSS", "JavaScript", "Local Storage"]}
                    imageAltText='Screenshot provided of Paste App&apos;s page showing CRUD operations'
                />
                <ProjectCard
                    title='Stop Watch'
                    description='It is a simple and responsive stopwatch that allows users to start, pause, and reset the timer, displaying elapsed time in a hh:mm:ss format. Designed with a clean, minimal interface, it ensures a smooth user experience while showcasing core JavaScript functionality and DOM manipulation.'
                    imageUrl='/stop_watch.png'
                    liveLink='https://thebeliever1812.github.io/Stop-Watch' githubLink='https://github.com/thebeliever1812/Stop-Watch'
                    techStack={['React', "JavaScript", "CSS"]}
                    imageAltText='Screenshot provided of Stop Watch&apos;s home page'
                />
                <ProjectCard
                    title='Weather Dashboard'
                    description='Developed a responsive web app that allows users to search and view real-time weather data, including temperature, humidity, and wind speed, with dynamic weather icons. Implemented error handling for invalid city inputs and API failures.'
                    imageUrl='/weather_app.png'
                    liveLink='https://thebeliever1812.github.io/Weather-web-app/'
                    githubLink='https://github.com/thebeliever1812/Weather-web-app'
                    techStack={['HTML', "CSS", "JavaScript"]}
                    imageAltText='Screenshot provided of Weather&apos;s app showing New Delhi&apos;s weather forecast'
                />
                <ProjectCard
                    title='To-Do App'
                    description='This is a simple To-Do List web application built with HTML, CSS, and JavaScript. The app allows users to add, mark as completed, and delete tasks. Tasks are also stored in local storage, so they remain saved even after the page is refreshed.'
                    imageUrl='/todo_app.png'
                    liveLink='https://thebeliever1812.github.io/to-do-list-repo'
                    githubLink='https://github.com/thebeliever1812/to-do-list-repo'
                    techStack={['HTML', "CSS", "JavaScript", "Local Storage"]}
                    imageAltText='Screenshot provided of Whisprr&apos;s home page'
                />
            </section>
        </Container>
    )
}

export default ProjectsContainer