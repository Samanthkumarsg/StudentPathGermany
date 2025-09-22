import React from 'react'
import Link from 'next/link'
import { IterationCcw, Waypoints } from 'lucide-react';


const Footer = () => {
    return (
        <div className=" max-w-7xl mx-auto border border-t-0 pt-10 px-5 relative overflow-hidden bg-white backdrop-sepia-0">
            {/* <div className="absolute -z-10 top-16 left-1/2 -translate-x-1/2 animate-spin animate-bounce [animation-duration:3s] size-120 rounded-full bg-gradient-to-r from-violet-500 via-red-400 to-yellow-300 blur-3xl opacity-50"></div> */}

            <div className="flex flex-col p-5 rounded-xl  bg-white/50">
                <h1 className="font-normal text-center tracking-tight text-stone-600 text-4xl mb-12"> Arrive. Settle. Thrive.</h1>
                <div className=' flex flex-col items-start justify-center'>
                    <div className="mb-2 text-whites  text-lg flex flex-row items-center justify-center">

                        <IterationCcw className="size-6 stroke-2  text-stone-800 mr-1 mt-1" />
                        <h1 className="font-medium text-md tracking-tight text-stone-800">ArrivePath</h1>
                    </div>
                    <h1 className='scroll-m-20 text-left font-normal tracking-tight text-balance mb-4 text-stone-600  text-lg/8'>We help international students start their journey in Germany with housing, legal support, banking, and job connections — all in one place.</h1>
                </div>
                <div className='mt-4'>

                    <div className='flex flex-row gap-3 text-sm underline underline-offset-8'>

                        <Link href="">
                            <h1 className=''>Privacy Policy</h1>
                        </Link>
                        <Link href="">
                            <h1 className=''>Terms and Condition</h1>
                        </Link>
                        <Link href="">
                            <h1 className=''>About Us</h1>
                        </Link>

                    </div>


                    <div className="text-sm text-stone-600 mt-6 flex items-end justify-center">
                        © 2025 ArrivePath – All rights reserved
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer