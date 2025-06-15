import React from 'react'

const Loading: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen" >
            <div className="p-2 animate-spin drop-shadow-2xl bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-600 h-20 w-20 aspect-square rounded-full">
            </div>
        </div>

    )
}

export default Loading