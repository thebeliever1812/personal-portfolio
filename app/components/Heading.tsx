import React from 'react'
import { Kanit } from "next/font/google";
import fadeIn from '../variants/variants'
import * as motion from 'motion/react-client'

interface Props {
    children: React.ReactNode
}

const kanit = Kanit({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-kanit',
})

const Heading: React.FC<Props> = ({ children }) => {
    return (
        <motion.div
            className='w-full flex justify-center'
            variants={fadeIn("down")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
        >
            <h2 className={`text-4xl lg:text-4xl font-semibold text-shadow-xs text-shadow-current select-none mx-auto my-3 md:my-5 text-center ${kanit.className}`}>{children}</h2>
        </motion.div>
    )
}

export default Heading