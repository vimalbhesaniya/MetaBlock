import React from 'react'

const Loader = () => {
    return (
        <div className='mainLoader'>

            <main>
                <svg xmlns="http://www.w3.org/2000/svg" height="128px" width="256px" viewBox="0 0 256 128" class="ip">
                    <defs>
                        <linearGradient y2="0" x2="1" y1="0" x1="0" id="grad1">
                            <stop stop-color="#5ebd3e" offset="0%"></stop>
                            <stop stop-color="#ffb900" offset="33%"></stop>
                            <stop stop-color="#f78200" offset="67%"></stop>
                            <stop stop-color="#e23838" offset="100%"></stop>
                        </linearGradient>
                        <linearGradient y2="0" x2="0" y1="0" x1="1" id="grad2">
                            <stop stop-color="#e23838" offset="0%"></stop>
                            <stop stop-color="#973999" offset="33%"></stop>
                            <stop stop-color="#009cdf" offset="67%"></stop>
                            <stop stop-color="#5ebd3e" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <g stroke-width="16" stroke-linecap="round" fill="none">
                        <g stroke="#ddd" class="ip__track">
                            <path d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56"></path>
                            <path d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64"></path>
                        </g>
                        <g stroke-dasharray="180 656">
                            <path d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56" stroke-dashoffset="0" stroke="url(#grad1)" class="ip__worm1"></path>
                            <path d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64" stroke-dashoffset="358" stroke="url(#grad2)" class="ip__worm2"></path>
                        </g>
                    </g>
                </svg>
            </main>

        </div>
    )
}

export default Loader
