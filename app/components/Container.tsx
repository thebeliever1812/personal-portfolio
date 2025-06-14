import React from 'react'

interface ContainerProps {
    children?: React.ReactNode;
    className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
    return (
        <div className={`w-full ${className}`}>
            <section className="container w-full max-w-6xl mx-auto px-6 md:px-8 py-8 space-y-5 xl:min-h-screen min-h-fit flex flex-col justify-center items-center">
                {children}
            </section>
        </div>

    )
}

export default Container