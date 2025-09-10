import React from 'react'
import Link from 'next/link'
import { Footprints, IterationCcw } from 'lucide-react';


const SectionHelp = () => {
    return (
        <div className="border border-t-0 px-5 py-18 relative overflow-hidden bg-white/70 backdrop-sepia-0">
            <div className="absolute -z-10 top-16 left-1/4 -translate-x-1/2 animate-spin animate-bounce [animation-duration:8s] w-180 h-120 rounded-full bg-gradient-to-r from-violet-300 via-red-300 to-yellow-200 blur-3xl opacity-50"></div>

            <div className="grid grid-cols-1  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center justify-center p-5 ">
                <div className='my-5 flex items-start justify-center flex-col'>
                    <div className='flex items-center justify-center flex-row text-stone-800 mb-2'>
                        <IterationCcw className="size-6 mt-1 stroke-2  " />
                        <h1 className='font-medium ml-1 text-lg'>ArrivePath</h1>
                    </div>

                    <h1 className='scroll-m-20 text-left font-normal tracking-tight text-balance mb-4 bg-gradient-to-r from-stone-800 to-violet-800 bg-clip-text text-transparent text-xl/9'>ArrivalPath makes your arrival so easy from the airport pickup to finding your first job in Germany in simple steps.</h1>
                </div>
                <div className=' flex items-centers justify-center flex-col'>
                    <div className='flex flex-col *:flex-col gap-8 text-sm  '>
                        <div className=''>
                            <Footprints className="size-10 stroke-1 rotate-120 mb-3 animate-pulse [animation-duration:6s]" />
                            <h1 className=''>Fill the Onboarding Form</h1>

                        </div>
                        <div className='flex items-center '>
                            <Footprints className="size-10 stroke-1 -rotate-160 mb-3 animate-pulse [animation-duration:4s]" />
                            <h1 className=''>Get Your Personalized Plan</h1>
                        </div>
                        <div className='flex items-end'>
                            <Footprints className="size-10 stroke-1 -rotate-220 mb-3 animate-pulse [animation-duration:2s]" />
                            <h1 className=''>Arrive & Relax</h1>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}

export default SectionHelp