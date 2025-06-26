import React from 'react'

const Loading: React.FC = () => {
    return (
        <div className="flex justify-center items-center mt-40" >
            <div className="p-1.5 animate-spin drop-shadow-2xl bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-600 w-15 h-15 rounded-full ">
                <div className="rounded-full h-full w-full bg-slate-100 dark:bg-[#140033] background-blur-md"></div>
            </div>
        </div>
    )
}

export default Loading