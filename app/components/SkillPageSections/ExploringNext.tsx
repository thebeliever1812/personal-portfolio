import React from 'react'
import { ParaContent } from '../HomePageSections'

const ExploringNext: React.FC = () => {
    return (
        <section className='flex flex-col items-center justify-center gap-4 px-4 lg:px-8 mt-8 w-full'>
            <ParaContent>
                <h3 className="text-2xl font-semibold">Currently Exploring</h3>
                <p className="text-gray-400 leading-relaxed text-base tracking-wide">
                    As I continue to grow as a frontend developer, I&apos;m actively exploring new tools and practices that can enhance my skills and make me a more efficient contributor in real-world projects. Here&apos;s what&apos;s on my learning radar:
                </p>
                <ul className="space-y-3 text-gray-400 leading-relaxed tracking-wide grid sm:grid-cols-2 gap-3">
                    <li className="flex items-start gap-2 text-gray-400">
                        <span className="text-lg mt-1">📘</span>
                        <span><strong className='text-white'>Leveling Up in TypeScript</strong> — for writing safer, scalable frontend code</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-400">
                        <span className="text-lg mt-1">🧪</span>
                        <span><strong className='text-white'>React Testing Libraries</strong> — to ensure UI reliability and maintainability</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-400">
                        <span className="text-lg mt-1">⚙️</span>
                        <span><strong className='text-white'>Next.js Server Actions & Caching</strong> — to understand fullstack capabilities</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-400">
                        <span className="text-lg mt-1">♿</span>
                        <span><strong className='text-white'>Accessibility (a11y)</strong> — for building inclusive web experiences</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-400">
                        <span className="text-lg mt-1">🎯</span>
                        <span><strong className='text-white'>Framer Motion</strong> — for adding smooth, user-friendly animations</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-400">
                        <span className="text-lg mt-1">🚀</span>
                        <span><strong className='text-white'>CI/CD Basics</strong> — for faster and more reliable deployment workflow</span>
                    </li>
                </ul>
            </ParaContent>
        </section>
    )
}

export default ExploringNext