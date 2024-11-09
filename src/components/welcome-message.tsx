"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

const WelcomeMsg = () => {

    const pathname = usePathname();

    const manageRoute = pathname === "/manage";

    return (
        <div className=' space-y-2 mb-4'>
            <h2 className=' text-2xl lg:text-4xl text-white font-medium'>
                Welcome Back Admin 👋🏾
            </h2>
            <p className=' text-sm lg:text-base text-[#68DBFF]'>
                {manageRoute ? "Manage your user's Profile here" : "This is your Users Overview Report"}

            </p>
        </div>
    )
}

export default WelcomeMsg