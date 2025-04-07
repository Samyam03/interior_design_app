"use client";

import React from 'react'
import ImageSelection from './_components/ImageSelection'
import Image from 'next/image'

function CreateNew() {

    const onHandleInputChange= (value,fieldName) => {
        // your logic here
    }

    return (
        <div>
            <h2 className="font-bold text-3xl text-primary text-center">
                Use the power of AI for Interior Designing
            </h2>
            <p className='text-center text-gray-500'>
                Transform your room in a moment using these features.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-4 mt-10">
                <ImageSelection selectedImage={(value)=>onHandleInputChange(value,'image')} />
            </div>
        </div>
    )
}

export default CreateNew