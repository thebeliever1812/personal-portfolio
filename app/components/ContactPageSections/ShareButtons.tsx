'use client'
import { Rubik } from 'next/font/google'
import fadeIn from '@/app/variants/variants';
import { motion } from 'motion/react'

const rubik = Rubik({
    weight: "300",
    style: 'normal',
    variable: "--font-roboto",
    subsets: ['latin'],
})

import {
    TwitterShareButton,
    LinkedinShareButton,
    WhatsappShareButton,
    FacebookShareButton,
    LinkedinIcon,
    WhatsappIcon,
    FacebookIcon,
    XIcon,
} from 'react-share'
import Container from '../Container'

export default function ShareButtons() {
    const url = 'https://basir-ahmad-portfolio.vercel.app'
    const title = 'Check out this awesome frontend portfolio of Basir Ahmad!'

    return (

        <Container>
            <h3 className={`text-lg font-semibold text-gray-300 mb-3 ${rubik.className}`}>
                Share this portfolio:
            </h3>

            <div className="flex gap-4">
                <motion.div
                    variants={fadeIn('left', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <TwitterShareButton url={url} title={title}>
                        <div className="flex items-center gap-2 bg-black hover:bg-neutral-950 text-white px-4 py-2 rounded transition shadow-md">
                            <XIcon size={24} round />
                            <span className="hidden sm:inline">X (formerly Twitter)</span>
                        </div>
                    </TwitterShareButton>
                </motion.div>

                <motion.div
                    variants={fadeIn('left')}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <LinkedinShareButton url={url} title={title}>
                        <div className="flex items-center gap-2 bg-sky-700 hover:bg-sky-800 text-white px-4 py-2 rounded transition shadow-md">
                            <LinkedinIcon size={24} round />
                            <span className="hidden sm:inline">LinkedIn</span>
                        </div>
                    </LinkedinShareButton>
                </motion.div>

                <motion.div
                    variants={fadeIn('right')}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <WhatsappShareButton url={url} title={title}>
                        <div className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition shadow-md">
                            <WhatsappIcon size={24} round />
                            <span className="hidden sm:inline">WhatsApp</span>
                        </div>
                    </WhatsappShareButton>
                </motion.div>

                <motion.div
                    variants={fadeIn('right', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <FacebookShareButton url={url} title={title}>
                        <div className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition shadow-md">
                            <FacebookIcon size={24} round />
                            <span className="hidden sm:inline">Facebook</span>
                        </div>
                    </FacebookShareButton>
                </motion.div>
            </div>
        </Container>

    )
}
