import React from 'react'
import Link from 'next/link'
import { Waypoints } from 'lucide-react';


const Footer = () => {
    return (
        <div className="border border-t-0 pt-10 px-5 relative overflow-hidden bg-white/20 backdrop-sepia-0">
            {/* <div className="absolute -z-10 top-16 left-1/2 -translate-x-1/2 animate-spin animate-bounce [animation-duration:3s] size-120 rounded-full bg-gradient-to-r from-violet-500 via-red-400 to-yellow-300 blur-3xl opacity-50"></div> */}

            <div className="flex flex-col p-5 rounded-xl  bg-white/50">
                <h1 className="font-normal text-center tracking-tight bg-linear-to-r from-stone-800 to-violet-500 bg-clip-text text-transparent text-4xl mb-12"> Arrive. Settle. Thrive.</h1>
                <div className=' flex flex-col items-start justify-center'>
                    <h1 className="font-semibold tracking-tight bg-linear-to-r from-stone-800 to-violet-500 bg-clip-text text-transparent text-lg mb-1"> ArrivePath</h1>

                    <h1 className='scroll-m-20 text-left font-normal tracking-tight text-balance mb-4 bg-gradient-to-r from-stone-800 to-violet-800 bg-clip-text text-transparent text-lg/8'>We help international students start their journey in Germany with housing, legal support, banking, and job connections — all in one place.</h1>
                </div>
                <div className=''>

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