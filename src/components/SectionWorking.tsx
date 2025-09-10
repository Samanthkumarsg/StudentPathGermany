import React from 'react'
import { Button } from './ui/button'

const SectionWorking = () => {
    return (
        <div className="relative p-3  flex items-center justify-center rounded-md overflow-hidden">

            {/* <div className="absolute top-32 left-1/4 translate-x-1/2 animate-spin animate-bounce [animation-duration:3s] size-120 rounded-full bg-gradient-to-r from-violet-500 via-red-400 to-yellow-300 blur-3xl opacity-50"></div> */}

            <div className=" p-2  w-full flex items-center justify-center rounded-md bg-white/40 backdrop-sepia-0 ">
                <div className=" flex flex-col text-center p-3">
                    <h1 className="scroll-m-20 text-center font-normal tracking-tight text-balance mb-4 bg-gradient-to-r from-stone-800 to-violet-800 bg-clip-text text-transparent text-xl/10">
                        We'll deliver a tailored plan, including housing options, airport pickup, and a step-by-step checklist.
                    </h1>


                </div>
            </div>
        </div>
    )
}

export default SectionWorking
