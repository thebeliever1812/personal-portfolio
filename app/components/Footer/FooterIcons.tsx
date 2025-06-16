import React from 'react'

const FooterIcons: React.FC = () => {
    return (
        <div className="flex items-center gap-4">
            <a href="https://x.com/BasirAhmad1812" target="_blank" rel="noopener noreferrer" className="social-button">
                <button className="relative w-10 h-10 rounded-full group cursor-pointer">
                    <div
                        className="floater w-full h-full absolute top-0 left-0 bg-white rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
                    ></div>
                    <div
                        className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-white rounded-full"
                    >
                        <svg
                            fill="none"
                            viewBox="0 0 22 22"
                            height="22"
                            width="22"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.8115 9.3155L20.8253 0H18.9263L11.9679 8.08852L6.41015 0H0L8.40433 12.2313L0 22H1.89914L9.24745 13.4583L15.1168 22H21.5269L12.811 9.3155H12.8115ZM10.2103 12.339L9.35878 11.1211L2.58343 1.42964H5.5004L10.9682 9.25094L11.8197 10.4689L18.9272 20.6354H16.0102L10.2103 12.3395V12.339Z"
                                className="group-hover:fill-white fill-black duration-300"
                            ></path>
                        </svg>
                    </div>
                </button>
            </a>
            <a href="https://github.com/thebeliever1812" target="_blank" rel="noopener noreferrer" className="social-button">
                <button className="relative w-10 h-10 rounded-full group cursor-pointer">
                    <div
                        className="floater w-full h-full absolute top-0 left-0 bg-white rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
                    ></div>
                    <div
                        className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-b-white rounded-full"
                    >
                        <svg
                            height="24"
                            width="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                className="group-hover:fill-white fill-black duration-300"
                                d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.17 6.839 9.481.5.092.683-.217.683-.481 0-.237-.009-.866-.013-1.699-2.782.603-3.37-1.338-3.37-1.338-.454-1.15-1.11-1.458-1.11-1.458-.906-.619.069-.606.069-.606 1.002.071 1.527 1.03 1.527 1.03.89 1.529 2.34 1.087 2.911.831.091-.645.348-1.087.634-1.338-2.22-.252-4.555-1.11-4.555-4.94 0-1.09.39-1.986 1.028-2.682-.103-.252-.446-1.268.098-2.642 0 0 .837-.268 2.75 1.024a9.563 9.563 0 012.496-.335 9.58 9.58 0 012.496.335c1.913-1.292 2.75-1.024 2.75-1.024.544 1.374.202 2.39.1 2.642.64.696 1.027 1.592 1.027 2.682 0 3.839-2.338 4.685-4.567 4.933.358.309.678.916.678 1.847 0 1.334-.012 2.412-.012 2.74 0 .267.18.577.688.481A12.01 12.01 0 0022 12c0-5.523-4.477-10-10-10z"
                                fill="#FFFFFF"
                            ></path>
                        </svg>
                    </div>
                </button>
            </a>
            <a href="https://www.linkedin.com/in/basir-ahmad-1a5851210/" target="_blank" rel="noopener noreferrer" className="social-button cursor-pointer">
                <button className="relative w-10 h-10 rounded-full group cursor-pointer">
                    <div
                        className="floater w-full h-full absolute top-0 left-0 bg-blue-500 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
                    ></div>
                    <div
                        className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-blue-500 rounded-full"
                    >
                        <svg
                            height="24"
                            width="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                className="group-hover:fill-white fill-white duration-300"
                                d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M8.5,19H6V10h2.5V19z M7.3,9 h-0.1C6.4,9,6,8.6,6,8.1V7.9c0-0.5,0.4-0.9,0.9-0.9h0.1C7.6,7,8,7.4,8,7.9v0.1C8,8.6,7.6,9,7.3,9z M19,19h-2.5v-4.9 c0-1.2-0.4-2-1.4-2c-0.8,0-1.3,0.6-1.5,1.2h-0.1V19H10V10h2.3v1.3h0C12.7,10.7,14,9.9,15.5,9.9c2.1,0,3.5,1.4,3.5,3.8V19z"
                                fill="#FFFFFF"
                            ></path>
                        </svg>
                    </div>
                </button>
            </a>
            <a
                href="mailto:basirahmadmalik@gmail.com"
                className="relative w-10 h-10 rounded-full group cursor-pointer"
                aria-label="Email"
            >
                <div
                    className="floater w-full h-full absolute top-0 left-0 bg-red-400 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
                ></div>
                <div
                    className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-red-400 rounded-full"
                >
                    <svg
                        height="32"
                        width="32"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            className="group-hover:fill-white fill-white duration-300"
                            d="M28 5H4c-1.104 0-2 .896-2 2v18c0 1.104.896 2 2 2h24c1.104 0 2-.896 2-2V7c0-1.104-.896-2-2-2zm0 4.879L16 18 4 9.879V7l12 8 12-8v2.879zM4 23V11.885l11.446 7.63c.269.18.594.274.921.274s.652-.094.92-.274L28 11.885V23H4z"
                            fill="#FFFFFF"
                        ></path>
                    </svg>
                </div>
            </a>

        </div>

    )
}

export default FooterIcons