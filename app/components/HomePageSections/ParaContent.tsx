import React from 'react'
import { Rubik } from "next/font/google"
import fadeIn from '../../variants/variants'
import * as motion from 'motion/react-client'

interface Props {
    children: React.ReactNode
}

const rubik = Rubik({
    variable: '--font-rubik',
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})

const ParaContent: React.FC<Props> = ({ children }) => {
    return (
        <motion.div
            className='w-full flex justify-center'
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className={`bg-black/50 p-4 rounded-lg space-y-5 w-full max-w-5xl text-center ${rubik.className} text-white`}>
                {children}
            </div>
        </motion.div>
    )
}

export default ParaContent