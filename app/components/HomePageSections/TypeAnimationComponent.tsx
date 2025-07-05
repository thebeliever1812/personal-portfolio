"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const TypeAnimationComponent: React.FC = () => {
    return (
        <TypeAnimation
            preRenderFirstString={true}
            sequence={[
                500,
                'Frontend Developer',
                2000,
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