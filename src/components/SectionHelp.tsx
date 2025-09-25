import React from 'react'
import Link from 'next/link'
import { Footprints, IterationCcw } from 'lucide-react';


const SectionHelp = () => {
    return (
        <div className="mt-8 max-w-7xl mx-auto mb-12 px-5 py-12 relative overflow-hidden shadow-xs rounded-xl backdrop-blur-xl bg-white/90">
            <div className="absolute -z-10 top-1/2 sm:top-1/2  md:top-16 lg:top-16 xl:top-16 left-1/4 -translate-x-1/2 sm:-translate-x-1/2 md:translate-x-1/2 lg:translate-x-1/2 xl:translate-x-1/2 animate-spin animate-bounce [animation-duration:6s] w-180 h-120 rounded-full bg-gradient-to-l from-stone-100 via-blue-300/60 to-blue-900/70 blur-3xl opacity-50"></div>

            <div className="grid grid-cols-1  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center justify-center p-5 ">
                <div className='my-5 flex items-start justify-center flex-col'>
                    <div className='flex items-center justify-center flex-row text-stone-800 mb-2'>
                        {/* <IterationCcw className="size-6 mt-1 stroke-2  " /> */}



                        <h1 className='font-medium ml-1 text-lg'>ArrivePath</h1>
                    </div>

                    <h1 className='scroll-m-20 text-left font-normal tracking-tight text-balance mb-4  bg-clip-text text-stone-800 text-xl/9'>ArrivalPath makes your arrival so easy from the airport pickup to finding your first job in Germany in simple steps.</h1>
                    <div className=' flex  justify-center items-start flex-col rounded-4xl'>
                        <div className='flex flex-col *:flex *:flex-row items-start justify-end  *:backdrop-blur-lg   *:rounded-xl  *:p-3  gap-6 text-md max-w-fit  mt-4'>
                            <div className=''>
                                <Footprints className="size-6 stroke-1 rotate-120 animate-pulse [animation-duration:6s] mr-3 " />
                                <h1 className=''>Fill the Onboarding Form</h1>

                            </div>
                            <div className=' '>
                                <Footprints className="size-6 stroke-1 -rotate-160 animate-pulse [animation-duration:4s] mr-3" />
                                <h1 className=''>Get Your Personalized Plan</h1>
                            </div>
                            <div className=''>
                                <Footprints className="size-6 stroke-1 -rotate-220 animate-pulse [animation-duration:2s] mr-3" />
                                <h1 className=''>Arrive & Relax</h1>
                            </div>

                        </div>

                    </div>
                </div>
                <div className=' flex items-center justify-center'>
                    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <rect width="200" height="200" fill="transparent" />
                        <g>
                            <polygon points="100,30 45,170 65,170 100,70 135,140 155,140 100,30"
                                fill="white" />
                            {/* <rect x="90" y="120" width="55" height="20" fill="white" /> */}
                            <rect x="100" y="125" width="45" height="15" fill="white" />
                        </g>
                    </svg>
                </div>

            </div>
        </div>

    )
}

export default SectionHelp