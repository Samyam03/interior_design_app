'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react';

function ImageSelection(selectedImage) {

   const [file, setFile] = useState();
   const onFileSelected=(event)=>{
    const file = event.target.files[0];
    console.log(file);
    setFile(file);
    selectedImage(file);
   }
        
  return (
    <div>
       <label htmlFor='upload-image'>Select Image of Your Room
        <div className={'p-10 border-2 border-dashed rounded-xl flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-all duration-200'}>
            {!file?<Image src={'/add-image.png'} alt="" width={70} height={70}/>
            :<Image src={URL.createObjectURL(file)} alt="" width={70} height={70} className ='w-[300px] h-[300px] object-cover'/>}
        </div> 
       </label>
        <div>
            <input type="file" accept='image/*' id="upload-image" style={{display:'none'}} onChange={onFileSelected} />
        </div>
    </div>
  )
}

export default ImageSelection
