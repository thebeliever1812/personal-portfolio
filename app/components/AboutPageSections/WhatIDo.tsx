import React from 'react'
import { Container, Heading, HighlightText } from '../index'
import { ParaContent } from '../HomePageSections'

const WhatIDo: React.FC = () => {
    return (
        <Container>
            <Heading>
                WHAT I DO
            </Heading>

            <ParaContent>
                <p className="text-gray-400 text-base leading-relaxed">
                    I design and develop end-to-end web applications using <HighlightText>Next.js, React,</HighlightText> and the <HighlightText>MERN stack</HighlightText> combining modern frontend engineering with robust APIs and databases. My goal isn&apos;t just to make things work — it&apos;s to make them work <span className="italic text-white">beautifully</span> and <span className="italic text-white">efficiently</span> at scale.
                </p>
                <div className="mt-4">
                    <h6 className="block text-md font-semibold text-gray-400 mb-2">I pay close attention to:</h6>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 list-none text-sm text-gray-400 px-4 text-start">
                        <li className="flex items-start gap-2"> <span className="text-blue-600">✔</span> UI/UX details and accessible, responsive interfaces </li>
                        <li className="flex items-start gap-2"> <span className="text-blue-600">✔</span> Clean, maintainable, and scalable architecture </li>
                        <li className="flex items-start gap-2"> <span className="text-blue-600">✔</span> High performance, Core Web Vitals, and SEO in Next.js </li>
                        <li className="flex items-start gap-2"> <span className="text-blue-600">✔</span> RESTful APIs, data validation with Zod, and integrations </li>
                        <li className="flex items-start gap-2"> <span className="text-blue-600">✔</span> Authentication and security with NextAuth.js and JWT </li>
                        <li className="flex items-start gap-2"> <span className="text-blue-600">✔</span> Testing (RTL, Vitest), Git/GitHub workflows, and deployments </li>
                    </ul>
                </div>
            </ParaContent>
        </Container>
    )
}

export default WhatIDo