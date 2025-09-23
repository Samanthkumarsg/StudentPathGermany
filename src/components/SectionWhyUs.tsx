import React from 'react'
import { Plane, House, GraduationCap, Landmark, Handshake } from 'lucide-react';

const SectionWhyUs = () => {
    return (
        <div className="max-w-7xl mx-auto mt-18  z-60 borer rounded-t-4xl backdrop-blur-sm bg-whit">
            <div className=' mb-16'>
                <h1 className='text-2xl font-semibold text-stone-800 flex items-center justify-center '>
                    Services we provide
                </h1>
                <h2 className="scroll-m-20 text-stone-500 text-center font-normal leading-normal tracking-tight text-balance mt-2  text-lg/10">
                    We&apos;ll deliver a tailored plan, including housing options, airport pickup, and a step-by-step checklist.
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 *:bg-white p-5 sm:p-4">

                <div className="flex flex-col p-5  rounded-lg  ">

                    <div className="text-4xl mb-3 text-stone-800"><House className="size-8 stroke-1" /></div>
                    <h1 className="text-lg font-medium mb-2">Find Housing Easily</h1>
                    <h2 className='text-stone-500 font-light text-base/6'>Verified apartments, dorms, and shared flats matched to your budget.</h2>
                </div>

                <div className="flex flex-col p-5  rounded-lg">
                    <span className="text-4xl mb-3 text-stone-800"><Plane className="size-8 stroke-1" /></span>
                    <h1 className="text-lg font-medium mb-2">Seamless Arrival</h1>
                    <h2 className='text-stone-500 font-light text-base/6'>Airport pickup, train/bus ticket, and temporary stay arranged before you land.</h2>
                </div>
                <div className="flex flex-col p-5  rounded-lg">
                    <span className="text-4xl mb-3 text-stone-800"><GraduationCap className="size-8 stroke-1" /></span>
                    <h1 className="text-lg font-medium mb-2">Kickstart Your Career</h1>
                    <h2 className='text-stone-500 font-light text-base/6'>Part-time job opportunities, CV/resume support, and consulting.</h2>
                </div>

                <div className="flex flex-col p-5  rounded-lg col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2 xl:col-span-2 ">
                    <span className="text-4xl mb-3 text-stone-800"><Landmark className="size-8 stroke-1" /></span>
                    <h1 className="text-lg font-medium mb-2">Banking & Legal Made Simple</h1>
                    <h2 className='text-stone-500 font-light text-base/6'>Help with Anmeldung, bank accounts, health insurance, SIM card.</h2>
                </div>


                <div className="flex flex-col p-5  rounded-lg col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1 ">
                    <span className="text-4xl mb-3 text-stone-800"><Handshake className="size-8 stroke-1" /></span>
                    <h1 className="text-lg font-medium mb-2">Community Support</h1>
                    <h2 className='text-stone-500 font-light text-base/6'>Join student groups and events to build your network in Germany.</h2>
                </div>
            </div>
        </div>

    )
}

export default SectionWhyUs