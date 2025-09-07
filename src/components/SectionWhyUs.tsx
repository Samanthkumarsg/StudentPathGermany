import React from 'react'
import { Plane, House, GraduationCap, Landmark, Handshake } from 'lucide-react';

const SectionWhyUs = () => {
    return (
        <div className="max-w-6xl mx-auto p-4 z-60 border border-t-0 -rounded-t-xl  pt-8">

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3  bg-white/70 backdrop-sepia-0 *:bg-gradient-to-r *:from-stone-800 *:to-violet-800 *:bg-clip-text *:text-transparent ">
                <div className="flex flex-col p-5 border rounded-lg  ">
                    <div className="text-4xl mb-4 text-stone-800"><House className="size-8 stroke-1" /></div>
                    <h3 className="text-lg font-medium mb-2">Find Housing Easily</h3>
                    <p className='text-stone-700'>Verified apartments, dorms, and shared flats matched to your budget.</p>
                </div>

                <div className="flex flex-col p-5 border rounded-lg">
                    <span className="text-4xl mb-4 text-stone-800"><Plane className="size-8 stroke-1" /></span>
                    <h3 className="text-lg font-medium mb-2">Seamless Arrival</h3>
                    <p className='text-stone-700'>Airport pickup, train/bus ticket, and temporary stay arranged before you land.</p>
                </div>
                <div className="flex flex-col p-5 border rounded-lg">
                    <span className="text-4xl mb-4 text-stone-800"><GraduationCap className="size-8 stroke-1" /></span>
                    <h3 className="text-lg font-medium mb-2">Kickstart Your Career</h3>
                    <p className='text-stone-700'>Part-time job opportunities, CV/resume support, and consulting.</p>
                </div>

                <div className="flex flex-col p-5 border rounded-lg col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2 xl:col-span-2 ">
                    <span className="text-4xl mb-4 text-stone-800"><Landmark className="size-8 stroke-1" /></span>
                    <h3 className="text-lg font-medium mb-2">Banking & Legal Made Simple</h3>
                    <p className='text-stone-700'>Help with Anmeldung, bank accounts, health insurance, SIM card.</p>
                </div>



                <div className="flex flex-col p-5 border rounded-lg col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1 ">
                    <span className="text-4xl mb-4 text-stone-800"><Handshake className="size-8 stroke-1" /></span>
                    <h3 className="text-lg font-medium mb-2">Community Support</h3>
                    <p className='text-stone-700'>Join student groups and events to build your network in Germany.</p>
                </div>
            </div>
        </div>

    )
}

export default SectionWhyUs