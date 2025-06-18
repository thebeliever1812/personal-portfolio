'use client'
import { Rubik } from 'next/font/google'

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
                <TwitterShareButton url={url} title={title}>
                    <div className="flex items-center gap-2 bg-black hover:bg-neutral-950 text-white px-4 py-2 rounded transition shadow-md">
                        <XIcon size={24} round />
                        <span className="hidden sm:inline">X (formerly Twitter)</span>
                    </div>
                </TwitterShareButton>

                <LinkedinShareButton url={url} title={title}>
                    <div className="flex items-center gap-2 bg-sky-700 hover:bg-sky-800 text-white px-4 py-2 rounded transition shadow-md">
                        <LinkedinIcon size={24} round />
                        <span className="hidden sm:inline">LinkedIn</span>
                    </div>
                </LinkedinShareButton>

                <WhatsappShareButton url={url} title={title}>
                    <div className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition shadow-md">
                        <WhatsappIcon size={24} round />
                        <span className="hidden sm:inline">WhatsApp</span>
                    </div>
                </WhatsappShareButton>

                <FacebookShareButton url={url} title={title}>
                    <div className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition shadow-md">
                        <FacebookIcon size={24} round />
                        <span className="hidden sm:inline">Facebook</span>
                    </div>
                </FacebookShareButton>
            </div>

        </Container>

    )
}
