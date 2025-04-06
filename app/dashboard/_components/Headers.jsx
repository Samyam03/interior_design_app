'use client'
import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { useContext } from 'react';
import { UserDetailContext } from '@/app/_context/UserDetailContext';
import { Button } from '@/components/ui/button';

function Headers() {
    const{ userDetails,setUserDetails } = useContext(UserDetailContext);
  return (
    

    <div className='p-5 shadow-sm flex justify-between items-center'>
        <div className='flex items-center gap-2 p-1'>
        <Image src ={'/logo.svg'} alt='' width={40} height={40} />
        <h2 className="font-bold text-lg">Interior Room Design</h2>
        </div>   

        
        <div className="flex gap-2 items-center">
        <Button variant="ghost" className='rounded-full'>Buy more credits</Button>
            <div className='flex gap-4 py-1 px-2 items-center px- rounded-full bg-gray-200'>
                <Image
                    src={'/star.png'} 
                    alt=''
                    width={28}
                    height={28}
                    className='rounded-full'
                />
                <h2 className='text-sm font-bold'>{userDetails?.credits}</h2>
            </div>
            <div>
                
            </div>
            <UserButton/>
            </div>
    </div>
  )
}

export default Headers
