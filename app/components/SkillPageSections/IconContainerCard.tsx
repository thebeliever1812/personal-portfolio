import React from 'react'
import { Rubik } from 'next/font/google';
import fadeIn from '../../variants/variants'
import * as motion from 'motion/react-client'

const rubik = Rubik({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-rubik',
});

interface IconContainerCardProps {
    heading: string;
    children: React.ReactNode;
    direction?: 'left' | 'right';
}

const IconContainerCard: React.FC<IconContainerCardProps> = ({ heading, children, direction }) => {
    return (
        <motion.div 
            className={`flex flex-col w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl gap-4 items-center border border-gray-700 px-5 py-8 rounded-lg bg-black/50 shadow-[0_0_20px_0_#290066] will-change-transform ${rubik.className}`}
            variants={fadeIn(direction)}
            initial='hidden'
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
        >
            <h3 className='text-2xl font-semibold'>
                {heading}
            </h3>
            <ul className='list-none grid grid-cols-2 gap-5 mt-2 sm:grid-cols-3 justify-items-center'>
                {React.Children.map(children, (child, index) => (
                    <li key={index} className='flex justify-center items-center'>
                        {child}
                    </li>
                ))}
            </ul>
        </motion.div>
    )
}

export default IconContainerCard