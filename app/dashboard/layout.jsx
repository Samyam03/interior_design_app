import React from 'react'
import Header from './_components/Headers'

function DashboardLayout({children}) {
  return (
    <div>
        <Header/>
        <div className='pt-5 px-20 md:px-20 lg:px-40 xl:px-60 '> 
        {children}
        </div>
       
    </div>
  )
}

export default DashboardLayout
