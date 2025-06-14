import React from 'react'

interface Props {
    children: React.ReactNode
}

const ParaContent: React.FC<Props> = ({ children }) => {
    return (
        <div className='w-full flex justify-center'>
            <div className='bg-black/40 p-4 rounded-lg space-y-5 w-full max-w-5xl text-center'>
                {children}
            </div>
        </div>
    )
}

export default ParaContent