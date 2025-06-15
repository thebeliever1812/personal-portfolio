import React from 'react'
import { ParaContent } from '../HomePageSections'

const MyWorkPrinciples: React.FC = () => {
    return (
        <section className='flex flex-col items-center justify-center gap-4 px-4 lg:px-8 mt-8 w-full'>
            <ParaContent>
                <h3 className="text-2xl font-semibold">My Work Principles</h3>
                <ul className="space-y-3 text-gray-400 leading-relaxed tracking-wide grid sm:grid-cols-2 gap-3">
                    <li className="flex items-start gap-2">
                        <span className="text-blue-600 text-lg mt-[2px]">✔</span>
                        <span>Problem-solving through real project challenges</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-blue-600 text-lg mt-[2px]">✔</span>
                        <span>Strong attention to UI/UX details</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-blue-600 text-lg mt-[2px]">✔</span>
                        <span>Writing clean, readable, and scalable code</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-blue-600 text-lg mt-[2px]">✔</span>
                        <span>Curiosity-driven learning</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-blue-600 text-lg mt-[2px]">✔</span>
                        <span>Basic understanding of prompt writing for AI tools</span>
                    </li>
                </ul>
            </ParaContent>
        </section>
    )
}

export default MyWorkPrinciples