'use client'
import React, { useState } from 'react'
import Image from 'next/image'

function ImageSelection({ selectedImage }) {
  const [file, setFile] = useState();

  const onFileSelected = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setFile(file);
    selectedImage(file);
  }

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 box-border">
      <div className="max-w-2xl mx-auto">
        <label 
          htmlFor="upload-image" 
           className="block text-2xl font-semibold text-center mb-4 cursor-pointer whitespace-nowrap"
        >
          Select Image of Your Room
        </label>

        <label htmlFor="upload-image" className="block cursor-pointer">
          <div className="p-20 border-2 border-dashed border-gray-300 rounded-2xl flex items-center justify-center hover:bg-gray-100 transition-all duration-200 aspect-video">
            {!file ? (
              <div className="flex flex-col items-center">
                <Image 
                  src="/add-image.png" 
                  alt="Add" 
                  width={300} 
                  height={300}
                  className="w-full h-auto max-w-[200px]"
                />
              </div>
            ) : (
              <Image
                src={URL.createObjectURL(file)}
                alt="Selected"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto max-h-[300px] object-contain rounded-xl"
              />
            )}
          </div>
        </label>

        <input
          type="file"
          accept="image/*"
          id="upload-image"
          className="hidden"
          onChange={onFileSelected}
        />
      </div>
    </div>
  )
}

export default ImageSelection