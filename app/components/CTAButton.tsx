import Link from 'next/link'
import React from 'react'

interface Props {
    path: string
    children: React.ReactNode
}

const CTAButton: React.FC<Props> = ({ path, children }) => {
    return (
        <Link href={path}>
            <button className="relative inline-flex items-center gap-3 font-semibold text-white whitespace-nowrap rounded-full pr-3.5 pl-3 py-2.5 bg-[#5200cc] hover:bg-black transition-colors duration-300 overflow-hidden group shadow-[0_0_40px_1px_#5200cc] active:bg-black">
                {/* Icon wrapper */}
                <span className="relative w-6 h-6 grid place-items-center flex-shrink-0 rounded-full bg-white text-[#5200cc] transition-colors duration-300 group-hover:text-black overflow-hidden group-active:text-black">
                    {/* Main icon */}
                    <svg
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute transition-transform duration-300 group-hover:translate-x-[150%] group-hover:-translate-y-[150%]"
                        width="10"
                    >
                        <path
                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                            fill="currentColor"
                        />
                    </svg>

                    {/* Copy icon */}
                    <svg
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute translate-x-[-150%] translate-y-[150%] transition-transform duration-300 delay-100 group-hover:translate-x-0 group-hover:translate-y-0 "
                        width="10"
                    >
                        <path
                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                            fill="currentColor"
                        />
                    </svg>
                </span>
                {children}
            </button>
        </Link>
    )
}

export default CTAButton