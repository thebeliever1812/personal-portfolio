import React from 'react'
import { Container, Heading } from '../index'
import { ParaContent } from '../HomePageSections'

const WhatIDo: React.FC = () => {
    return (
        <Container>
            <Heading>
                WHAT I DO
            </Heading>

            <ParaContent>
                <p className="text-gray-400 text-base leading-relaxed">
                    I design and develop <span className="font-medium text-blue-600">responsive</span>, <span className="font-medium text-blue-600">accessible</span>, and <span className="font-medium text-blue-600">user-focused</span> web interfaces using modern frontend technologies.
                    My goal isn&apos;t just to make things work — it&apos;s to make them work <span className="italic text-white">beautifully</span> and <span className="italic text-white">efficiently</span>.
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
        </Container>
    )
}

export default WhatIDo