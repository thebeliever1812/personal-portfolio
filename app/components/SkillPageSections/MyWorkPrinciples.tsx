import React from 'react'
import { ParaContent } from '../HomePageSections'

const MyWorkPrinciples: React.FC = () => {
    return (
        <section className='flex flex-col items-center justify-center gap-4 px-4 lg:px-8 mt-8 w-full'>
            <ParaContent>
                <h3 className="text-2xl font-semibold">My Work Principles</h3>
                <ul className="space-y-3 text-gray-400 leading-relaxed tracking-wide grid sm:grid-cols-2 gap-3 sm:gap-x-5 text-start px-4">
                    <li className="flex items-start gap-2">
                        <span className="text-blue-600 text-lg mt-[2px]">✔</span> <span>Solve real product problems with pragmatic, incremental delivery</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-blue-600 text-lg mt-[2px]">✔</span> <span>Design accessible, responsive UI with attention to fine UX details</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-blue-600 text-lg mt-[2px]">✔</span> <span>Write clean, testable, and scalable code with clear architecture</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-blue-600 text-lg mt-[2px]">✔</span> <span>Build robust APIs, secure auth, and reliable data flows</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-blue-600 text-lg mt-[2px]">✔</span> <span>Continuously learn, measure performance, and iterate with feedback</span>
                    </li>
                </ul>
            </ParaContent>
        </section>
    )
}

export default MyWorkPrinciples