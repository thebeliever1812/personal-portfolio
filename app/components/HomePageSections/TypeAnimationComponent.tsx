"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const TypeAnimationComponent: React.FC = () => {
    return (
        <TypeAnimation
            preRenderFirstString={true}
            sequence={[
                500,
                'Fullstack Developer',
                2000,
                'MERN Stack Developer',
                1000,
                'Next.js Developer',
                1000,
                'Frontend Developer',
                1000,
                'Backend Developer',
                1000,
                'UI/UX Developer',
                1000,
                'Web Developer',
                500,
            ]}
            speed={50}
            repeat={Infinity}
        />
    )
}

export default TypeAnimationComponent