import React from 'react'

interface Props {
    children: React.ReactNode
}

const Heading: React.FC<Props> = ({ children }) => {
    return (
        <div className='w-full flex justify-center'>
            <h1 className='text-3xl lg:text-4xl font-semibold text-shadow-xs text-shadow-current select-none mx-auto my-3 md:my-5'>{children}</h1>
        </div>
    )
}

export default Heading