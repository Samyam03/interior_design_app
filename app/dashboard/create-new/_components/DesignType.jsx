import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

function DesignType({ selectedDesignType }) {  // Destructure the prop correctly
  const Designs = [
    { id: 1, name: 'Modern', image: '/modern.jpg' },
    { id: 2, name: 'Traditional', image: '/traditional.jpg' },
    { id: 3, name: 'Minimalist', image: '/minimalist.jpg' },
    { id: 4, name: 'Industrial', image: '/industrial.jpg' },
    { id: 5, name: 'Bohemian', image: '/bohemian.jpg' },
    { id: 6, name: 'Rustic', image: '/rustic.jpg' }
  ]
  const [selectedDesign, setSelectedDesign] = useState()
  return (
    <div className='mt-10'>
      <label>Select Interior Design Type</label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {Designs.map((design) => (
          <div key={design.id}>
            <Image
              src={design.image}
              alt={design.name}
              width={100}
              height={100}
              className={`h-[100px] rounded-md cursor-pointer hover:scale-105 transition-all duration-200 ${
                selectedDesign === design.name ? 'border-3 border-blue-500' : ''
              }`}
              onClick={() => {
                setSelectedDesign(design.name);
                selectedDesignType(design.name); // Now this should work
              }}
            />
            <h2>{design.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DesignType