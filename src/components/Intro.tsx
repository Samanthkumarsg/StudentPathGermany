import React from 'react'
import { Button } from './ui/button'

const Intro = () => {
    return (
        <div className="relative p-4 border border-b-0 flex items-center justify-center -rounded-b-md overflow-hidden">

            <div className="absolute bottom-32 right-1/2 -translate-x-1/2 animate-spin animate-bounce [animation-duration:3s] size-96 rounded-full bg-gradient-to-r from-violet-500 via-red-400 to-yellow-300 blur-3xl opacity-50"></div>

            <div className="relative p-8 mb-8 border border-b-0 flex items-center justify-center w-full rounded-lg -rounded-b-0 bg-white/60 backdrop-sepia-0 ">
                <div className="max-w-lg flex flex-col text-center p-3">
                    <h1 className="scroll-m-20 text-center font-semibold tracking-tight text-balance mb-4 bg-gradient-to-r from-stone-800 to-violet-500 bg-clip-text text-transparent text-5xl">
                        Move to Germany Stress-free
                    </h1>
                    <h2 className="scroll-m-20 text-xl font-normal tracking-tight text-stone-800">
                        All in one platform for Housing, legal registration, bank account, airport pickup, insurance, and jobs.
                    </h2>
                    <div className="flex flex-wrap items-center justify-center gap-2 md:flex-row mt-10">
                        <Button data-tally-open="3q90rY" data-tally-hide-title="1" data-tally-overlay="1" data-tally-form-events-forwarding="1" className="outline-2 outline-offset-6 outline-stone-400 outline-dashed shadow-md">
                            Start Your Onboarding Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
