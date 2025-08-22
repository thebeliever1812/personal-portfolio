import React from 'react'

const HighlightText: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <span className='font-semibold text-white'>
            {children}
        </span>
    )
}

export default HighlightText