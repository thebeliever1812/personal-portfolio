"use client"
import React from 'react'

const ResumeButton: React.FC = () => {
    return (
        <a
            href="/Basir_Ahmad_Frontend_Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer">
            <button
                className="cursor-pointer flex justify-between items-center bg-[#5200cc] px-4 py-2.5 rounded-full text-white hover:bg-[#3d0099] hover:scale-105 duration-300 hover:ring-1 gap-3 shadow-[0_0_30px_1px_#5200cc] hover:shadow-[0_0_50px_7px_#3d0099] mx-auto font-semibold"
            >
                Resume
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 animate-bounce"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                    ></path>
                </svg>
            </button>
        </a>

    )
}

export default ResumeButton