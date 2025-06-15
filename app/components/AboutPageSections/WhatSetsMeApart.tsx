import React from 'react'
import { Heading } from '../index'
import { ParaContent } from '../HomePageSections'

const WhatSetsMeApart: React.FC = () => {
    return (
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
    )
}

export default WhatSetsMeApart