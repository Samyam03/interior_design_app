import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function EmptyState() {
  return (
    <div className='flex items-center justify-center mt-4 flex-col bg-gray-200 py-12 rounded-xl'>
      <Image src={"/room.png"} alt='' width={300} height={300} />
    <h2 className='font-medium text-xl text-gray-500 py-10'>Create New Interior Design for your room</h2>
    <Link href='/dashboard/create-new'> 
         <Button>+Redesign Room</Button>
         </Link>
    </div>
  )
}

export default EmptyState