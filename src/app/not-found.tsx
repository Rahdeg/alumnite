"use client"

import { Button } from '@/components/ui/button'
import { AlertTriangle } from 'lucide-react'
import Link from 'next/link'


const NotFound = () => {
    return (
        <div className=' h-screen w-full flex flex-col items-center justify-center '>
            <AlertTriangle className='  size-6 text-muted-foreground' />
            <p className=' text-sm  text-muted-foreground'>
                You have missed Road
            </p>
            <Button variant="secondary" asChild>
                <Link href="/">
                    Back to  home
                </Link>

            </Button>
        </div>
    )
}

export default NotFound