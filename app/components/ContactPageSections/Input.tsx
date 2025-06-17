import React, { useId } from 'react'

interface InputProps {
    type: string
    name: string
    placeholder: string
    className?: string
}

const Input: React.FC<InputProps> = ({ type = "text", name, placeholder, className }) => {
    const id: string = useId()
    return (
        <div className={`${className} bg-black/40 p-3 rounded-sm shadow tracking-wide w-full hover:ring-1 ring-[#1f004d] duration-300`}>
            <input id={id} type={type} placeholder={placeholder} name={name} className='w-full p-1 outline-none' required />
        </div>
    )
}

export default Input