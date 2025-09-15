import React from 'react'
import { Plane, House, GraduationCap, Landmark, Handshake } from 'lucide-react';

const SectionWhyUs = () => {
    return (
        <div className="max-w-6xl mx-auto p-4 z-60 border border-t-0 -rounded-t-xl  pt-8">
            <div className=' mb-8'>
                <h1 className='text-xl font-semibold text-stone-600 flex items-center justify-center bg-gradient-to-r from-stone-800 to-violet-800 bg-clip-text text-transparent '>
                    Services we provide
                </h1>
                <h2 className="scroll-m-20 text-center font-normal tracking-tight text-balance mt-1 bg-gradient-to-r from-stone-800 to-violet-800 bg-clip-text text-transparent text-base/10">
                    We&apos;ll deliver a tailored plan, including housing options, airport pickup, and a step-by-step checklist.
                </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3  bg-white/70 backdrop-sepia-0 scroll-m-20  font-normal  *:bg-gradient-to-r *:from-stone-800 *:to-violet-800 *:bg-clip-text *:text-transparent ">

                <div className="flex flex-col p-5 border rounded-lg  ">
                    <div className="text-4xl mb-3 text-stone-800"><House className="size-8 stroke-1" /></div>
                    <h1 className="text-md font-medium mb-1">Find Housing Easily</h1>
                    <h2 className='text-stone-600 font-light text-sm/6'>Verified apartments, dorms, and shared flats matched to your budget.</h2>
                </div>

                <div className="flex flex-col p-5 border rounded-lg">
                    <span className="text-4xl mb-3 text-stone-800"><Plane className="size-8 stroke-1" /></span>
                    <h1 className="text-md font-medium mb-1">Seamless Arrival</h1>
                    <h2 className='text-stone-600 font-light text-sm/6'>Airport pickup, train/bus ticket, and temporary stay arranged before you land.</h2>
                </div>
                <div className="flex flex-col p-5 border rounded-lg">
                    <span className="text-4xl mb-3 text-stone-800"><GraduationCap className="size-8 stroke-1" /></span>
                    <h1 className="text-md font-medium mb-1">Kickstart Your Career</h1>
                    <h2 className='text-stone-600 font-light text-sm/6'>Part-time job opportunities, CV/resume support, and consulting.</h2>
                </div>

                <div className="flex flex-col p-5 border rounded-lg col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2 xl:col-span-2 ">
                    <span className="text-4xl mb-3 text-stone-800"><Landmark className="size-8 stroke-1" /></span>
                    <h1 className="text-md font-medium mb-1">Banking & Legal Made Simple</h1>
                    <h2 className='text-stone-600 font-light text-sm/6'>Help with Anmeldung, bank accounts, health insurance, SIM card.</h2>
                </div>


                <div className="flex flex-col p-5 border rounded-lg col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1 ">
                    <span className="text-4xl mb-3 text-stone-800"><Handshake className="size-8 stroke-1" /></span>
                    <h1 className="text-md font-medium mb-1">Community Support</h1>
                    <h2 className='text-stone-600 font-light text-sm/6'>Join student groups and events to build your network in Germany.</h2>
                </div>
            </div>
        </div>

    )
}

export default SectionWhyUs