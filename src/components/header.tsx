import React from 'react'
import HeaderLogo from './header-logo'
import Navigation from './navigation'
import WelcomeMsg from './welcome-message'
import { AdminAvatar } from '@/features/manage/components/admin-avatar'




const Header = () => {
    return (
        <header className=' bg-gradient-to-b from-blue-700 to-blue-500 px-4 py-8 lg:px-14 pb-36'>
            <div className=' max-w-screen-2xl mx-auto'>
                <div className='w-full flex items-center justify-between mb-14'>
                    <div className='flex items-center lg:gap-x-16'>
                        <HeaderLogo />
                        <Navigation />
                    </div>
                    <AdminAvatar name='Admin' />
                </div>
                <WelcomeMsg />
            </div>
        </header>
    )
}

export default Header